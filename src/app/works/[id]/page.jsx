'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import  MagneticElement  from '@/app/components/homepage/animation/MagneticElement';
import ContactSection from './../../components/homepage/ContactSection';

import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";

export default function ProductDetailsPage({ params }) {
  const { id } = params; // Get the product ID from params

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/db/${id}`);

        if (!res.ok) {
          throw new Error(`Error: ${res.statusText}`);
        }

        // Log the raw response for debugging
        const rawData = await res.text();
        console.log('Raw Response:', rawData);

        // Try to parse the response as JSON
        const data = JSON.parse(rawData);

        if (data) {
          setProduct(data);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Failed to fetch product');
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className=" mt-20 ">

        <div className="container mx-auto md:px-28 space-y-6 md:space-y-10 mt-5 px-4 ">
            <div className="flex gap-5 items-center">

                <Image 
                        src='/images/figma.jpeg'
                        alt={product.name} 
                        width={100} 
                        height={100} 
                        className="w-10 h-10 md:h-auto " 
                        />
                <p>Figma Design</p>
            </div>
            <div className="relative">
                <Image 
                    src={product.mainimg} 
                    alt={product.name} 
                    width={900} 
                    height={400} 
                    className="w-full rounded-lg" 
                    />
                    {product.link && (
                                  <Link href={product.link} className="absolute bottom-2 right-2 rounded-full bg-blue-500 text-white p-2 md:p-5">
                                  <CgWebsite />
                                </Link>
                    )}
            </div>
            <p className="text-center my-20 text-2xl uppercase">{product.name} Website</p>

            {/* Ensure the images do not exceed the container width */}
            <div className="flex justify-center gap-2 md:gap-5">
                <div className="max-w-[500px] w-full">
                    <Image 
                        src={product.img1} 
                        alt={product.name} 
                        width={500} 
                        height={900} 
                        className="w-full h-72 md:h-auto shadow-lg rounded-lg" 
                    />
                </div>
                <div className="max-w-[500px] w-full">
                    <Image 
                        src={product.img2} 
                        alt={product.name} 
                        width={500} 
                        height={900} 
                        className="w-full h-72 md:h-auto shadow-lg rounded-lg" 
                    />
                </div>
            </div>   
<div className="my-10">
    <div className="flex items-center">
        <div className="flex-1 border-t border-black/10" />
        <Image 
            src={`/images/profilePic.png`} 
            alt="profilePic" 
            width={100} 
            height={100} 
            quality={50} 
            className="object-cover rounded-full mx-4" 
        />
        <div className="flex-1 border-t border-black/10" />
    </div>

    <div className="text-center my-5">
        <button className="bg-black px-4 py-2 text-white rounded-full">Contact</button>
    </div>
</div>
</div>

     
    </div>
        <ContactSection/>
        </>
  );
}
