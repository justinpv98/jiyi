import { Request } from "express";

export default function extractCookie(req: Request) {
  let token = null;
  if (req?.cookies) {
    token = req.cookies["accessToken"];
  }

  return token;
}
