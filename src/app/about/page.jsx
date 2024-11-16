import Image from "next/image";
import ContactSection from "../components/homepage/ContactSection";
import Education from "../components/aboutpage/Education";

export default function page(){

    const services = [
        {
            id:1,
            title:"Design",
            description:"I create user-friendly, visually engaging designs using Figma, focusing on both functionality and aesthetics. From wireframes to high-fidelity prototypes, I use Figma’s collaborative features to streamline the process and ensure responsive, accessible interfaces that resonate with users.",
        },
        {
            id:2,
            title:"Development",
            description:"I create high-performance websites with a focus on responsive design, seamless functionality, and scalability. My work covers both front-end and back-end development, delivering efficient, user-friendly solutions that are easy to maintain and tailored to each client’s unique needs.",
        },
        {
            id:3,
            title:"Full Stack",
            description:"I’m a full-stack developer focused on creating high-performance, responsive websites. From front-end interfaces to back-end systems, I build scalable, efficient solutions that ensure seamless, user-friendly experiences.",
        },
    ]
    return(
        <>
        <div className="container mx-auto p-5 pt-32 md:p-20">
        <div className="space-y-10 my-5">
        <p className="text-3xl md:text-7xl font-extralight">Helping brands reach <br/> a broad audience through impactful website</p>
        <p className="text-end text-xs md:text-lg">I help companies create tailored solutions that make a real impact. <br/> With every project, I’m committed to quality and always push my work to new heights</p>
        </div>
        <hr/>
        
        <Education/>

        <div className="space-y-10 md:space-y-20 mt-20">
            <p className="text-2xl md:text-5xl">I can help you with ...</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                {
                services.map((data)=>(
                    <div key={data.id} className='space-y-6 md:space-y-10 '>
                        <p>0{data.id}</p><hr/>
                        <h2 className="text-3xl">{data.title}</h2>
                        <p>{data.description}</p>
                    </div>
                ))
                }
                
            </div>
        </div>
        </div>
        <ContactSection/>
        </>
    )
}