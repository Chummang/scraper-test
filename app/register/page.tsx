"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const Register = () => {
  const [error, setError] = useState("");
  const router = useRouter();

const isValidEmail = (email: string) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

const handleSubmit= async (e: any) => {
  e.preventDefault();
  const email = e.target[0].value;
  const password= e.target[1].value;

  if(!isValidEmail(email)){
    setError("Email is invalid");
    return;
  }

  if(!password || password.length <8) {
    setError("Password is invalid");
    return;
  }

  try {
    const res= await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-type" : "application/json",
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    if(res.status === 400) {
      setError("This email is already registered");
    } if(res.status == 200) {
      setError("");
      router.push("/login");
    }
  } catch (error) {
    setError("Error, try again");
    console.log(error);
  }
};


  return (
    <div className="grid place-items-center max-h-full">
        <div className="shadow-lg p-5 rounded-lg" >
            <h1 className="text-4xl font-semibold mb-8">Register</h1>
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
                Register</button>
                <p className="text-red-600 text -[16px] mb-4">{error && error}</p>
                <Link className=" mt-3 text-right" href="/login">Already have an account? <span className="underline"> Log in </span></Link>
            </form>
            
        </div>          
        
    </div>
  )
}

export default Register