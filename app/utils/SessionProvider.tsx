"use client";
/* eslint-disable no-console */
import React from "react";
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({children}: any) => {
    return <SessionProvider>{children}</SessionProvider>;
}

export default AuthProvider;