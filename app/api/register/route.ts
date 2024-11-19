import User from '@/app/models/User';
import connect from "@/app/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";


export const POST = async (request: any) => {
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
    } catch (err: any) {
        return new NextResponse(err, {
            status: 500,
        })
        
    }
}