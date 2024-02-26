'use client'
import styles from "./page.module.css";
import Dashboard from "./dashboard/page";
import Header from '@/components/header/header';
import SlideMenu from "@/components/SlideMenu/slideMenu";
import Login from '@/components/Login/login';
import { useSession } from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  return (
    <main className={styles.main}>
      <Header/>
      {session && (
        <>
          <SlideMenu/>
          <Dashboard/>
        </> 
      )}
      
      <Login/>
    </main>
  );
}
