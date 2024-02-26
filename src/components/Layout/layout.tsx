'use client';

import { useSession } from "next-auth/react";
import SlideMenu  from '@/components/SlideMenu/slideMenu';

export default function Layout(props: any){
    const {data: session} = useSession();
    return(
        <div>
            {session && <SlideMenu/>}
            {props.children}
        </div>
    )
}