'use client';
import Image from "next/image";
import React, { useState , useEffect } from 'react';
import Cursor from "./animation/Cursor";
import Link from "next/link";

export default function RecentWorks() {
  const [hoverText, setHoverText] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/db');
      const result = await response.json();
      setData(result.design);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-6 py-10 md:px-10 lg:px-20 relative">
      <Cursor hoverText={hoverText} />
      <p className="text-xl  my-5">Recent Works</p>
      
      <div className="space-y-6">
        {data.slice(0,4).map((data) => (
          <div
            key={data.id}
            className="hover:bg-gray-100 rounded-lg transition duration-200"
            onMouseEnter={() => setHoverText(data.name)}
            onMouseLeave={() => setHoverText('')}
          >
            <Link href={`/works/${data.id}`}>
            <div className="flex flex-col md:flex-row justify-between items-start p-4">
              <p className="text-3xl md:text-4xl lg:text-5xl  mb-4 md:mb-0">{data.name}</p>
              <div>
                <Image
                  src={data.img}
                  width={200}
                  height={100}
                  alt={data.name}
                  className="w-full md:w-auto object-cover rounded-lg"
                  />
              </div>
            </div>
            </Link>
            <hr className="border-t border-gray-300" />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link href={'/works'}>
        <button className=" relative bg-black text-white py-3 px-8 rounded-full hover:bg-gray-800 transition">
          View All 
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-black bg-slate-200 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                <p>{data.length}</p>
          </div>
        </button>
        </Link>
      </div>
    </div>
  );
}
