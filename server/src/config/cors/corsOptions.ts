import allowedOrigins from "./allowedOrigins";

const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
  preflightContinue: true,
};

export default corsOptions;