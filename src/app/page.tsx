'use client';
import Layout from "@/components/Layout/layout";
import Dashboard from "./dashboard/page";
import Login from '@/components/Login/login';
import Header from "@/components/header/header";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  return (
    <main className="main">
        {session && <Dashboard />}
        {!session && <Login />}
    </main>
  );
};