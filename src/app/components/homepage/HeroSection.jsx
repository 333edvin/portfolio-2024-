'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { IoArrowRedoOutline } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {

  const container = useRef(null);
  const title = useRef(null);
  const nameRef = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(()=>{
    const context = gsap.context(()=>{
      const t1 = gsap.timeline({
        scrollTrigger:{
          target: container.current,
          start:"top bottom",
          end:'bottom top',
          scrub:true
        }
      })
      t1.to(title.current,{y:-250},0)
      t1.to(nameRef.current,{y:-160},0)
      t1.to(imgRef.current,{y:100},0)
    })

    return () => context.revert();
  },[])
  return (
    <>
    <div ref={container} className="h-[45rem] md:min-h-screen bg-[#faf9f5] relative">
      <div className="flex justify-center items-center">
        <Image
          src="/images/profilePic.png"
          ref={imgRef}
          width={400}
          height={400}
          className="rounded-full h-[400px] mt-32 md:-mt-10 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]  object-cover "
          alt="Profile Picture"
        />
      </div>

     
      <div ref={title} className="absolute  top-52  md:top-2/4 right-4 md:right-16 lg:right-40 xl:right-52 text-black  flex flex-col items-end md:items-start">
        <IoArrowRedoOutline className="text-2xl md:text-3xl lg:text-4xl mb-2" />
        <p className="text-lg lg:text-xl xl:text-2xl text-end md:text-left ">
          Freelance <br /> Designer & Developer
        </p>
      </div>

      <div ref={nameRef} className="absolute -bottom-10 md:bottom-0 left-6 md:left-6 lg:left-6 text-black ">
        <p className="text-6xl md:text-7xl lg:text-8xl xl:text-8xl text-black/20 ">
          EDVIN <br />JOHNSON
        </p>
      </div>
    </div>
          </>
  );
}
