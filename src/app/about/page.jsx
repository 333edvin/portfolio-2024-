import Image from "next/image";
import ContactSection from "../components/homepage/ContactSection";
import Education from "../components/aboutpage/Education";

export default function(){

    const services = [
        {
            id:1,
            title:"Design",
            description:"With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)",
        },
        {
            id:2,
            title:"Development",
            description:"With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)",
        },
        {
            id:3,
            title:"Full Stack",
            description:"With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)",
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