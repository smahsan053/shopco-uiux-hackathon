import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import type { JWT } from "next-auth/jwt";
import type { Session } from "next-auth";
import { User } from "next-auth";
import NextAuth from "next-auth";
import { getUserFromEmail } from "./sanity/helpers";
import { client } from "./sanity/lib/client";

export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: [Github, Google, Credentials({
        name: "Credentials",

        credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" },
        },

        // authorize: async (credentials) => {
        //     const email = credentials.email as string | undefined;
        //     const password = credentials.password as string | undefined;


        //     if (!email || !password) {
        //         throw new CredentialsSignin("Please provide both email & password");
        //     }

        //     const user = await getUserFromEmail(email)

        //     if (!user) {
        //         throw new Error("Invalid email or password");
        //     }

        //     if (!user.password) {
        //         throw new Error("Invalid email or password");
        //     }

        //     const userData = {
        //         firstName: user.firstName,
        //         lastName: user.lastName,
        //         email: user.email,
        //         role: user.role,
        //         id: user._id,
        //     };

        //     return userData;
        // },
    })],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({ session, token }: { session: Session; token: JWT }) {
            if (session.user) {
                session.user.id = token.id as string;
            }
            return session;
        },
        async jwt({ token, user }: { token: JWT; user?: Partial<User> }) {
            if (user) {
                token.id = user.id!;
            }
            return token;
        },
        signIn: async ({ user, account }) => {
            if (account?.provider === "google") {
                handleGoogleSignIn(user)
            }

            if (account?.provider === "credentials") {
                return true;
            } else {
                return false;
            }
        },
    },

});

async function handleGoogleSignIn(user: User) {
    const { email, name, id } = user;

    try {
        const newUser = {
            _type: "user",
            firstName: name,
            lastName: "",
            userId: id,
            email: email,
            password: "",
            authMethod: "google",
            createdAt: new Date().toISOString(),
        };

        const existingUser = await getUserFromEmail(email!);
        if (!existingUser) {
            await client.create(newUser);
        }

        return true;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error while creating user:", error);
            throw new Error("Error while creating user");
        }
    }
}
