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
    <div className=" py-10 pt-32 md:px-10 lg:px-20 ">
      <div className="container mx-auto px-6 relative space-y-6 md:space-y-10">
        <div className='space-y-3'>
        <p className="text-4xl md:text-8xl">{product.brand}</p>
        <p className="text-xs">{product.name} website</p>
        </div>
        <hr/>
        <div className=" absolute top-0 right-5  md:right-10">
          { product.category !== "design"?

      <MagneticElement>
        <Link href={product.link} target="_blank">
          <button className=" rounded-full w-20 h-20  md:w-48  md:h-48 bg-cyan-500 text-white text-xs md:text-lg font-semibold">  
             View Live
          </button>
        </Link>
      </MagneticElement>
              :"Figma Design"
        }
        </div>
      </div>
      <Image
        src={product.img}
        alt={product.name}
        width={1920}  
        height={1080} 
        className="w-full h-auto object-cover mt-14 md:mt-20  "
        />

          <p className="text-2xl md:text-5xl text-center my-10 font-semibold md:my-20">Responsive Design</p>

        <div className="container mx-auto px-6 space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto my-10 gap-10">
          <div>
            <Image src={product.deskImg} alt={product.name} width={800} height={200}/>
          </div>
          <div className='flex justify-center items-center'>
            <p className="text-sm md:text-xl">The desktop user interface (UI) is crafted to offer a visually rich and spacious layout, providing users with a seamless browsing experience on larger screens. It incorporates advanced navigation systems, detailed visuals, and optimized content placement to utilize the available space effectively. Dynamic elements ensure that content adapts to different screen resolutions, enabling smooth transitions and maximizing user engagement. Features like hover effects and multi-column designs enhance usability and present a professional aesthetic for desktop users.</p>
          </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto my-10 gap-10">
          <div className="order-2 md:order-1 flex justify-center items-center">
            <p className="text-sm md:text-xl">The phone user interface (UI) focuses on simplicity and ease of use, ensuring a responsive design that adapts perfectly to smaller screens. Key elements are reorganized for a vertical layout, prioritizing touch-friendly controls and legible text sizes for mobile users. The dynamic design ensures quick loading times and streamlined navigation, with collapsible menus and swipe gestures providing an intuitive browsing experience. This approach guarantees that the website retains its functionality and appeal, even on compact devices.</p>
          </div>
          <div className='flex justify-center order-1 md:order-2'>
            <Image src={product.phoneImg} alt={product.name} width={300} height={200} className="rounded-[45px]"/>
          </div>
          </div>
        </div>



    </div>
        <ContactSection/>
        </>
  );
}
