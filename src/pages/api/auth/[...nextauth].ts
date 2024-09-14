import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { adminLogin } from "@/lib/firebase/service";
import jwt from "jsonwebtoken";

interface Credentials {
  email: string;
  password: string;
}

const authOption: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "email.." },
        password: {
          label: "password",
          type: "password",
          placeholder: "password..",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials as Credentials;
        const data = {
          email,
          password,
        };
        const admin: any = await adminLogin(data);
        if (admin) {
          const checkPassword = await bcrypt.compare(password, admin.password);
          if (checkPassword) {
            return admin;
          } else throw new Error("password salah");
        } else {
          throw new Error("belum terdaftar");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account?.provider === "credentials") {
        token.username = user.username;
        token.email = user.email;
        token.password = user.password;
        token.createdAt = user.createdAt;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user.username = token.username || "";
      session.user.email = token.email || "";
      session.user.password = token.password || "";
      session.user.createdAt = token.createdAt || "";
      const accessToken = jwt.sign(token, process.env.NEXTAUTH_SECRET || "", {
        algorithm: "HS256",
      });
      session.token = accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOption);
