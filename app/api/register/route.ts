/* eslint-disable no-console */
import User from '@/app/models/User';
import connect from "@/app/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";


export const POST = async (request: Request) => {
    const {email, password } = await request.json();

    await connect();

    const existingUser = await User.findOne({ email });

    if(existingUser){
return new NextResponse("Email address is already taken.", {status: 400});
    }
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        return new NextResponse("Registration Successful.", {status: 200});
    } catch (err) {
        return new NextResponse((err as Error).message || "An error occured", {
            status: 500,
        })
        
    }
}