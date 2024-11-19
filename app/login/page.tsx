"use client"
/* eslint-disable no-console */
import React, { FormEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn, useSession } from "next-auth/react";

const Login = () => {
 const router =useRouter();
 const[error, setError] = useState("");
 const session = useSession();

 useEffect(() => {
  if(session?.status == "authenticated") {
    router.replace("/dashboard")
 }
}, [session, router])

 const isValidEmail = (email: string) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};


 const handleSubmit = async (e: FormEvent<HTMLElement>) => {
  e.preventDefault();
  const form: any = e.currentTarget; 
  const email = form[0].value;
  const password = form[1].value;

  if (!isValidEmail(email)) {
    setError("Email is invalid");
    return;
  }

  if (!password || password.length < 8) {
    setError("Password is invalid");
    return;
  }

  const res = await signIn("credentials", {
    redirect: false,
    email,
    password
  });

  if (res?.error) {
    setError("Invalid email or password");
    if (res?.url) router.replace("/dashboard");
  } else {
    setError("");
  }
};

  return (
    <div className="grid place-items-center max-h-full">
    <div className="shadow-lg p-5 rounded-lg" >
        <h1 className="text-4xl font-semibold mb-8">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
            type="text"
            placeholder="Email"
            required/>
            
            <input
            type="password"
            placeholder="Password"
            required/>
            <button type="submit" className="p-2.5 text-[17px] w-[70%] mt-6 ml-[37px] border-2 border-transparent rounded-full bg-blue-600 text-gray-200 font-bold ">
            Sign In</button>
            <p className="text-red-600 text -[16px] mb-4">{error && error}</p>
            <Link className=" mt-3 text-right" href="/register">Not a member? <span className="underline"> Register Now </span></Link>
        </form>
        
    </div>          
    
</div>
  )
}

export default Login