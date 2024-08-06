import jwt from "jsonwebtoken";
import { configENV } from "@/config/config.env";

export class JwtHelper {
  private static jwtSecret = configENV.jwtSecret;

  static generateToken(payload: any): string {
    if (this.jwtSecret) {
      return jwt.sign(payload, this.jwtSecret, { expiresIn: "1d" });
    }
    throw new Error("JWT secret is not defined");
  }

  static verifyToken(token: string): any {
    try {
      if (this.jwtSecret) {
        return jwt.verify(token, this.jwtSecret);
      }
    } catch (error) {
      throw new Error("Invalid token");
    }
  }

  static decodeToken(token: string): any {
    return jwt.decode(token);
  }
}
