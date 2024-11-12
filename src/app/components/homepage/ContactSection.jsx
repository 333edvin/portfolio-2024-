import { ImWhatsapp } from "react-icons/im";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import MagneticElement from "./animation/MagneticElement";
import Link from "next/link";

export default function ContactSection() {
    return (
        <div className="bg-black text-white">
            <div className="container mx-auto py-10 p-3  md:p-20 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col space-y-3">
                    <div className="flex items-center justify-center md:justify-start gap-5">
                        <Image src={'/images/eye.jpg'} width={80} height={80} alt="eye" className="md:w-28 rounded-full " />
                        <p className="text-5xl  md:text-7xl">LET&apos;S WORK</p>
                    </div>
                    <p className="text-5xl md:text-7xl text-left">TOGETHER</p>
                </div>

                <div className="flex items-end justify-end">
                     <MagneticElement>
                        <Link href={'/contact'}>
                            <button className="border border-gray-200 text-white w-28 h-28 md:w-48 md:h-48 rounded-full  hover:border-5">
                                Connect
                            </button>
                        </Link>
                    </MagneticElement>       
                </div>
                
            </div>

            <hr className="mx-5 md:mx-28 border-gray-800" />

            <div className="flex flex-col md:flex-row justify-between container mx-auto px-5 md:px-20 py-10">
                <div className="flex gap-5 flex-wrap justify-start text-gray-500">
                    <button className="border border-gray-700  px-5 py-2 rounded-full">edvinjohnson333@gmail.com</button>
                    <button className="border border-gray-700  px-5 py-2 rounded-full">+91 8129 77 9713</button>
                </div>
                <div className="flex gap-5 justify-end items-center text-3xl mt-5 md:mt-0">
                    <MagneticElement>
                        <FaGithub />
                    </MagneticElement>
                    <MagneticElement>
                        <CiLinkedin />
                    </MagneticElement>
                    <MagneticElement>
                        <ImWhatsapp />
                    </MagneticElement>
                </div>
            </div>
        </div>
    );
}
