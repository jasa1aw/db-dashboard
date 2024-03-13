'use client';

import Login from "@/components/Login/login";
import { Box } from "@mui/material";
import { useSession } from "next-auth/react";

export default function SignIn(){
    const {data: session} = useSession()
    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}        
        >
            <h2>{session ? "Thank you for logging in" : "PLease log in"}</h2>
            <Login/>
        </Box>
    )
}
