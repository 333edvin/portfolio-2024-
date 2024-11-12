'use client';

import { useScroll , motion, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Words({lines , className}){
    const element = useRef(null);
    const {scrollYProgress} = useScroll({
        target:element,
        offset:['start end','-200px start']
    })

    const words = lines.split(" ");
    
    return(
        <p ref={element} className={`paragraph ${className}`} >
            {
            words.map((word,i)=>{
                const start = i/words.length;
                const end = start + (1/words.length)

               return <Word key={i} range={[start,end]} progress={scrollYProgress} >{word}</Word>
            })
            }</p>
    )
}

const Word = ({children,range,progress}) => {
    const opacity = useTransform(progress,range,[0,1])
    return(
        <span className="word">
            <span className="shadow">{children}</span>
        <motion.span  style={{opacity}}>{children}</motion.span>
        </span>
    )
}
