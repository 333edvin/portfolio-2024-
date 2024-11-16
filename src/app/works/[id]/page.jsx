'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import  MagneticElement  from '@/app/components/homepage/animation/MagneticElement';
import ContactSection from './../../components/homepage/ContactSection';

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
    <div className="container mx-auto px-6 py-10 pt-32 md:px-10 lg:px-20 ">
      <div className="relative space-y-6 md:space-y-10">
      <p className="text-4xl md:text-8xl">{product.name}</p>
        <hr/>
        <div className="absolute top-0 right-5  md:right-10">
          { product.category !== "design"?

<MagneticElement>
        <Link href={product.link} target="_blank">
          <button className=" rounded-full w-20 h-20  md:w-48  md:h-48 bg-cyan-500 text-white text-xs md:text-lg font-semibold">  
             View Live
          </button>
        </Link>
      </MagneticElement>
              :"Design"
        }
        </div>
      </div>
      <Image
        src={product.img}
        alt={product.name}
        width={1920}  
        height={1080} 
        className="w-full h-auto object-cover mt-14 md:mt-20 rounded-xl "
        />


          <p className="text-2xl md:text-5xl text-center my-10 font-semibold md:my-20">Responsive Design</p>
        <div className="space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto my-10 gap-10">
          <div>
            <Image src={product.deskImg} alt={product.name} width={800} height={200}/>
          </div>
          <div className='flex justify-center items-center'>
            <p className="text-xl">I also offer specialized services for brands, focusing on crafting digital experiences that amplify their presence and resonate with their audience. By combining functionality with compelling design, I help brands connect meaningfully with their customers online.</p>
          </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto my-10 gap-10">
          <div className="order-2 md:order-1 flex justify-center items-center">
            <p className="text-xl">I also offer specialized services for brands, focusing on crafting digital experiences that amplify their presence and resonate with their audience. By combining functionality with compelling design, I help brands connect meaningfully with their customers online.</p>
          </div>
          <div className='flex justify-center order-1 md:order-2'>
            <Image src={product.phoneImg} alt={product.name} width={300} height={200}/>
          </div>
          </div>
        </div>



    </div>
        <ContactSection/>
        </>
  );
}
