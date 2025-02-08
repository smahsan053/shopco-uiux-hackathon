'use server'

import { signIn, signOut } from "@/auth"
import { redirect } from "next/navigation";
export const GithubLogin = async () => {
    await signIn("github", { redirectTo: "/" })
}
export const GoogleLogin = async () => {
    await signIn("google", { redirectTo: "/" })
}

export const login = async (formData: FormData): Promise<void> => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
        await signIn("credentials", {
            redirect: false,
            email,
            password,
        });
    } catch (error) {
        console.error(error)
    }
    redirect("/");
};

export const logout = async () => {
    await signOut({ redirectTo: "/" })
}