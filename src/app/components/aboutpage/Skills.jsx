import Image from "next/image";

export default function Skills(){
    const skills=[
        {
            id:1,
            img:'/images/html.png'
        },
        {
            id:2,
            img:'/images/css.png'
        },
        {
            id:3,
            img:'/images/js.png'
        },
        {
            id:4,
            img:'/images/react.png'
        },
        {
            id:5,
            img:'/images/node.png'
        },
        {
            id:6,
            img:'/images/mongo.png'
        },
        {
            id:7,
            img:'/images/tailwind.png'
        },
        {
            id:8,
            img:'/images/next.png'
        },
        {
            id:9,
            img:'/images/wordpress.png'
        },
        {
            id:10,
            img:'/images/wix.png'
        },
        
    ]
    return(
        <div className="my-10">
            <p>Tech...</p>
        <div className="grid grid-cols-4 mt-5">
            {
                skills.map((data)=>(
                    <div key={data.id} className="flex justify-center m-2">
                        <Image src={data.img} width={60} height={60} alt={data.id} className="object-fit"/>
                    </div>
                ))
            }
        </div>
        </div>
    )
}