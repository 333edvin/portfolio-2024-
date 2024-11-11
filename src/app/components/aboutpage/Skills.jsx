import Image from "next/image";

export default function(){
    const skills=[
        {
            id:1,
            img:'/images/eye.jpg'
        },
        {
            id:2,
            img:'/images/eye.jpg'
        },
        {
            id:3,
            img:'/images/eye.jpg'
        },
        {
            id:4,
            img:'/images/eye.jpg'
        },
        {
            id:5,
            img:'/images/eye.jpg'
        },
        {
            id:6,
            img:'/images/eye.jpg'
        },
        {
            id:7,
            img:'/images/eye.jpg'
        },
        {
            id:8,
            img:'/images/eye.jpg'
        },
    ]
    return(
        <div className="my-10">
            <p>Tech...</p>
        <div className="grid grid-cols-4 mt-5">
            {
                skills.map((data)=>(
                    <div key={data.id} className="flex justify-center m-2">
                        <Image src={data.img} width={60} height={60} alt={data.id} className="rounded-full"/>
                    </div>
                ))
            }
        </div>
        </div>
    )
}