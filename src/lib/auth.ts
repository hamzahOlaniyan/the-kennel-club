import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
// Your own logic for dealing with plaintext password strings; be careful!
// import { saltAndHashPassword } from "@/utils/password";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma";
import { compare } from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
   adapter: PrismaAdapter(prisma),
   session: { strategy: "jwt" },
   providers: [
      Credentials({
         // You can specify which fields should be submitted, by adding keys to the `credentials` object.
         credentials: {
            email: {
               type: "email",
               label: "Email",
               placeholder: "johndoe@gmail.com",
            },
            password: {
               type: "password",
               label: "Password",
               placeholder: "*****",
            },
         },

         authorize: async (credentials) => {
            if (!credentials.email || !credentials.password) return null;

            const user = await prisma.user.findUnique({
               where: { email: credentials?.email as string },
            });

            if (!user || !user.password) throw new Error("User does not exist!");

            const isMatch = await compare(credentials.password as string, user.password);
            if (isMatch) {
               return { id: user.id, email: user.email, name: user.name };
            } else return null;
         },
      }),
   ],
});
