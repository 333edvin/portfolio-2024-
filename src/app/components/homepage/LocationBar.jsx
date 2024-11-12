import Image from "next/image";

export default function LocationBar(){
    return(
        <>
        <div className="flex justify-between items-center gap-5 bg-black  p-2 w-72 rounded-tr-full rounded-br-full">
            <p className="font-semibold text-white">
            Located <br/> in Thrissur , kerala
            </p>
            <div className="w-16 h-16 bg-white flex justify-center items-center rounded-full ">
                <Image src={'/images/globe.gif'} width={200} height={200} alt="globe" className="rounded-full"/>
            </div>
        </div>
        </>
    )
}