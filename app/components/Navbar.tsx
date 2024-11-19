"use client"

import React from 'react'
import Link from 'next/link';
import {signOut, useSession } from "next-auth/react";


const Navbar = () => {
  const {data: session}: any = useSession();
  return (
    <div className="flex justify-center shadow-lg">
        <ul className="flex justify-end p-5">
            <div className="flex gap-10">
                <Link href="/dashboard">
                <li>Dashboard</li>
                </Link>
                {!session ? (
                  <>
                    <Link href="/login">
                    <li>Login</li>
                    </Link>
                    <Link href="/register">
                    <li>Register</li>
                    </Link>
                    </>
                ) : (
                  <>
                  {session.user?.email}
                  <li>
                    <button onClick={()=> {
                      signOut();
                      }} className=" p-2 px-5 -mt-1 bg-blue-400 text-white rounded-full" >
                      Logout
                    </button>
                  </li>
                  </>
                )}
                
            </div>
        </ul>
    </div>
  )
}

export default Navbar