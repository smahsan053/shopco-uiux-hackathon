import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        if (body.authMethod === "email") {
            const { firstName, lastName, email, password, authMethod } = body
            const newUser = {
                _type: "user",
                firstName: firstName,
                lastName: lastName,
                userId: crypto.randomUUID(),
                email: email,
                password: password,
                authMethod: authMethod,
                role: email === 'syedmahsan053@gmail.com' ? "admin" : "user",
                createdAt: new Date().toISOString(),
            }
            await client.create(newUser!);
            return NextResponse.json({ message: "Registration Sucessfull", newUser }, { status: 200 })
        } else {
            return NextResponse.json({ message: "Registration Sucessfull", authMethod: body.authMethod }, { status: 200 })

        }
    } catch (e) {
        console.error({ e });
    }

    return NextResponse.json({ message: "success" });
}