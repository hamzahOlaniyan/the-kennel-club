"use server";

import prisma from "@/src/lib/prisma";
import { hashPassword } from "@/src/helpers/hashPassword";

export const signUp = async (email: string, password: string, name: string) => {
   const existingUser = await prisma.user.findUnique({ where: { email } });
   if (existingUser) throw Error("This email is already in use, try another email");

   const hashedPassword = await hashPassword(password);

   const user = await prisma.user.create({ data: { email, password: hashedPassword, name } });
   return { message: "✅ Congratulations! you have sucessfully reigstered ", data: user };
};

// export const signIn = async (email: string, password: string) => {
//    const result = await auth.api.signInEmail({
//       body: {
//          email,
//          password,
//          callbackURL: "//",
//       },
//    });

//    return result;
// };

// export const signInSocial = async (provider: "facebook" | "google") => {
//    const { url } = await auth.api.signInSocial({
//       body: {
//          provider,
//          callbackURL: "/dashboard",
//       },
//    });

//    if (url) {
//       redirect(url);
//    }
// };

// export const signOut = async () => {
//    const result = await auth.api.signOut({ headers: await headers() });
//    return result;
// };
