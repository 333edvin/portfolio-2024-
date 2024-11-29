'use client'

import { AnimatePageIn } from './components/homepage/animation/animatePageIn';
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

export default function Template({ children }) {
    // const [pageName, setPageName] = useState('');
    // const pathname = usePathname();

    useEffect(() => {
        AnimatePageIn();

        // const name = pathname === '/' ? 'Home' : pathname.replace('/', '').replace('-', ' ');
        // setPageName(name.charAt(0).toUpperCase() + name.slice(1));
    }, []);

    return (
        <div className="relative min-h-screen">
            <div id="banner-1" className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-0 w-1/4" />
            <div id="banner-2" className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-1/4 w-1/4" />
            <div id="banner-3" className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-2/4 w-1/4" />
            <div id="banner-4" className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-3/4 w-1/4" />

            {/* <div id='pagename' className="absolute top-2/3 left-1/3 text-white text-3xl ">
                {pageName}
            </div> */}


            {children}
        </div>
    );
}
