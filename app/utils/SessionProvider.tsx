"use client";
/* eslint-disable no-console */
import React from "react";
import { SessionProvider } from "next-auth/react";

interface AuthProviderProps {
    children: any; // Specify the type for children
}

const AuthProvider = ({children}: AuthProviderProps) => {
    return <SessionProvider>{children}</SessionProvider>;
}

export default AuthProvider;