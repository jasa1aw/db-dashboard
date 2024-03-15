'use client';

import { useSession } from "next-auth/react";
import SlideMenu  from '@/components/SlideMenu/slideMenu';
import Footer from "../Footer/Footer";

export default function Layout(props: any){
    const {data: session} = useSession();
    return(
        <div className="layout" 
            style={{padding: session ? '0 24px 0 80px' : 0}}>
            {session && <SlideMenu/>}
            {props.children}
            <Footer/>
        </div>
    )
};