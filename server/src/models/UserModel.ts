import { model, Model, Document, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "@config/config";
import { languages } from "@constants/constants";

export interface IUser {
  _id: Schema.Types.ObjectId;
  email: string;
  username: string;
  password: string;
  name: string;
  provider: string;
  providerId?: string;
  providerAccessToken?: string;
  providerRefreshToken?: string;
  emailVerified?: boolean;
  topics: string[];
  languages?: string[];
  goal: string;
  isNew: boolean;
  isModified(query: string): boolean;
}

export interface IUserMethods {
  issueJwt(): Promise<string>;
  comparePassword(password: string): Promise<boolean>;
}

export type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>(
  {
    email: {
      type: String,
      required: [true, "Email is a required field."],
      minLength: 3,
      maxLength: 255,
      unique: true,
    },
    username: {
      type: String,
      unique: true,
      sparse: true,
      lowercase: true,
      minlength: 4,
      maxlength: 30,
      validate: {
        validator: (username: string) => {
          const regex = /(^[a-zA-Z0-9_]+$)/;
          return regex.test(username);
        },
        message:
          "Username must precede with letters followed by _ or numbers eg: john23 | john_23",
      },
    },
    password: {
      type: String,
      minLength: 6,
      maxLength: 55,
      required: true,
    },
    name: String,
    provider: {
      type: String,
      default: "password",
      enum: ["password", "facebook", "google"],
    },
    providerId: {
      type: String,
      default: null,
    },
    providerAccessToken: String,
    providerRefreshToken: String,
    emailVerified: {
      type: Boolean,
      required: false,
    },
    topics: {
      type: [String],
      enum: ["languages", "arts-and-sciences", "other"],
      required: true,
    },
    languages: {
      type: [String],
      enum: languages,
    },
    goal: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret, opt) {
        delete ret.password;
        delete ret.providerAccessToken;
        delete ret.providerRefreshToken;
        return ret;
      },
    },
  }
);

userSchema.method(
  "comparePassword",
  async function comparePassword(this: IUser, password: string) {
    const user = this;

    return bcrypt.compare(password, user.password);
  }
);

userSchema.method("issueJwt", async function issueJwt() {
  const user = this;
  const payload = { _id: user._id };
  const expiresIn = "1d";

  const signedToken = await jwt.sign(payload, config.jwt.secret, {
    expiresIn: expiresIn,
  });

  return signedToken;
});

// Use a middleware function to hash the password before saving the user to the database
userSchema.pre("save", async function (this: IUser, next) {
  // Only hash the password if the user is new or the password has been modified
  if (this.isNew || this.isModified("password")) {
    const saltRounds = Number(config.crypto.saltRounds);
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(this.password, salt);

    this.password = hash;

    next();
  } else {
    next();
  }
});

const User = model<IUser, UserModel>("user", userSchema);

export default User;
