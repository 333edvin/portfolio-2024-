'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ImWhatsapp } from 'react-icons/im';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import MagneticElement from './animation/MagneticElement';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isContactPage, setIsContactPage] = useState(false);

    useEffect(() => {
        // You can check the pathname manually to set the navbar color
        if (window.location.pathname === '/contact') {
            setIsContactPage(true); // Set navbar to white when on contact page
        } else {
            setIsContactPage(false); // Set navbar to blur for other pages
        }
    }, []);

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB');
    const texts = ['Edvin Johnson', 'call me ED'];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000); 

        return () => clearInterval(intervalId); 
    });

    return (
        <nav className={`fixed top-0 w-full z-10 'bg-transparent backdrop-blur-lg transition-all ease-in-out duration-300 p-2`}>
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-sm flex items-center gap-5">
                    <div className="relative inline-block group">
                        <Image src="/images/profilePic.png" width={50} height={50} className="rounded-full" alt="Eye" />
                        <div className="absolute left-0 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in-out pointer-events-none group-hover:pointer-events-auto">
                            <div className="flex py-2 block p-5 gap-4">
                                <Image src="/images/profilePic.png" width={100} height={100} className="rounded-full" alt="Eye" />
                                <div className="flex flex-col justify-center space-y-3">
                                    <p className="font-semibold">Edvin Johnson</p>
                                    <p>+91 8129 77 9713</p>
                                    <div className="flex gap-3 text-lg mt-2">
                                        <Link href={'https://github.com/333edvin'} target="_blank">
                                            <FaGithub />
                                        </Link>
                                        <Link href={'linkedin.com/in/edvin-johnson-884a10221'} target="_blank">
                                            <CiLinkedin />
                                        </Link>
                                        <Link href={'linkedin.com/in/edvin-johnson-884a10221'} target="_blank">
                                            <ImWhatsapp />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`flex flex-col ${isContactPage?`text-white`:`text-black`}`}>
                        <p>{texts[currentTextIndex]}</p>
                        <p className="text-[10px]">{formattedDate}</p>
                    </div>
                </div>

                <div className="flex items-center space-x-6">
                    <div className="hidden md:flex space-x-6">
                        <MagneticElement>
                        <a href="/" className={`hover:text-gray-400 ${isContactPage?`text-white`:`text-black`}`}>Home</a>
                        </MagneticElement>
                        <MagneticElement>
                        <a href="/works" className={`hover:text-gray-400 ${isContactPage?`text-white`:`text-black`}`}>Works</a>
                        </MagneticElement>
                        <MagneticElement>
                        <a href="/about" className={`hover:text-gray-400 ${isContactPage?`text-white`:`text-black`}`}>About</a>
                        </MagneticElement>
                        <MagneticElement>
                        <a href="/contact" className={`hover:text-gray-400 ${isContactPage?`text-white`:`text-black`}`}>Contact</a>
                        </MagneticElement>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className={`focus:outline-none ${isContactPage?`text-white`:`text-black`}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden mt-2 space-y-2 text-right pr-4">
                    <a href="/" className={`block px-4 py-2 hover:text-gray-400 ${isContactPage?`text-white`:`text-black`}`}>Home</a>
                    <a href="/works" className={`block px-4 py-2 hover:text-gray-400 ${isContactPage?`text-white`:`text-black`}`}>Works</a>
                    <a href="/about" className={`block px-4 py-2 hover:text-gray-400 ${isContactPage?`text-white`:`text-black`}`}>About</a>
                    <a href="/contact" className={`block px-4 py-2 hover:text-gray-400 ${isContactPage?`text-white`:`text-black`}`}>Contact</a>
                </div>
            )}
        </nav>
    );
}
