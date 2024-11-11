import Image from "next/image";
import Form from "../components/contactpage/Form";

export default function (){
    return(
        <div className="bg-black ">
        <div className="container mx-auto p-5 pt-32 md:p-20 ">
        <div className="space-y-10 my-5 relative">
            <p className="text-4xl md:text-8xl font-extralight text-white">Let's Get <br/> Started.</p>
            <div className="absolute bottom-10 md:top-1/3 right-10 md:right-10 lg:right-12 xl:right-10">
                <Image
                        src={'/images/eye.jpg'}
                        width={200}
                        height={200}
                        className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-[200px] xl:h-[200px] rounded-full"
                    />
            </div>

        </div>
        <hr/>
        <Form/>
        </div>
        </div>
    )
}