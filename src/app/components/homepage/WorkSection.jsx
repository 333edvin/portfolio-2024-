'use client';
import Image from "next/image";
import React, { useState } from 'react';
import Cursor from "./animation/Cursor";
import Link from "next/link";

export default function RecentWorks() {
  const [hoverText, setHoverText] = useState('');

  const works = [
    { id: 1, title: "GYM", img: '/images/work.png' },
    { id: 2, title: "YOGA", img: '/images/work.png' },
    { id: 3, title: "WEDDING", img: '/images/work.png' },
    { id: 4, title: "PET SHOP", img: '/images/work.png' },
  ];

  return (
    <div className="container mx-auto px-6 py-10 md:px-10 lg:px-20 relative">
      <Cursor hoverText={hoverText} />
      <p className="text-xl  my-5">Recent Works</p>
      
      <div className="space-y-6">
        {works.map((data) => (
          <div
            key={data.id}
            className="hover:bg-gray-100 rounded-lg transition duration-200"
            onMouseEnter={() => setHoverText(data.title)}
            onMouseLeave={() => setHoverText('')}
          >
            <div className="flex flex-col md:flex-row justify-between items-center p-4">
              <p className="text-3xl md:text-4xl lg:text-5xl  mb-4 md:mb-0">{data.title}</p>
              <div>
                <Image
                  src={data.img}
                  width={200}
                  height={100}
                  alt={data.title}
                  className="w-full md:w-auto object-cover rounded-lg"
                />
              </div>
            </div>
            <hr className="border-t border-gray-300" />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link href={'/works'}>
        <button className="bg-black text-white py-3 px-8 rounded-full hover:bg-gray-800 transition">
          View All
        </button>
        </Link>
      </div>
    </div>
  );
}
