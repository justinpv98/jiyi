import { Request as ExpressRequest } from "express";
import { IUser, IUserMethods, UserModel } from "@models/UserModel";

export interface Request extends ExpressRequest {
  user: IUser & IUserMethods; // or any other type
}
