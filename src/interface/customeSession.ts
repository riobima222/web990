import { Session } from "next-auth";

export interface CustomeSession extends Session {
  token?: string; // tambahkan token ke tipe session
}
