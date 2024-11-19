/* eslint-disable no-console */
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";
import User from "@/app/models/User";
import connect from "@/app/utils/db";

interface Credentials {
    email: string;
    password: string;
}

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        id: "credentials",
        name: "Credentials",
        credentials: {
            email: {label: "Email", type: "text"},
            password: {label: "Password", type: "password"},
        },
        async authorize(credentials: Credentials | undefined) {
            await connect();
            try {
                if (!credentials) {
                    throw new Error("No credentials provided");
                }
                const user = await User.findOne({email: credentials.email});
                if(user){
                    const isPasswordCorrect = await bcrypt.compare(
                        credentials.password,
                        user.password
                    )
                    if(isPasswordCorrect) {
                        return user;
                    }
                }
            } catch (err) {
                if (err instanceof Error) {
                    throw new Error(err.message); // Capture the original error message
                } else {
                    throw new Error("An unknown error occurred during authentication");
                }
            }
            return null; // Return null if authorization fails
        }
    }),
    // ...add more providers here
  ],
}

export const handler = NextAuth(authOptions);
export {
    handler as GET, handler as POST
};