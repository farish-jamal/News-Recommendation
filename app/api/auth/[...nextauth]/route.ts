import { connectToDatabase } from "@/database/mongoose";
import { User } from "@/models/user.model";
import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google';

const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
    GoogleProvider({
     clientId: process.env.GOOGLE_CLIENT_ID || "",
     clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
   }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        await connectToDatabase();
        const existingUser = await User.findOne({ email: user.email});
        if(!existingUser){
          await User.create({
            email: user.email,
            name: user.name,
            avatar: user.image,
          })
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
