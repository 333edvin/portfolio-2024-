'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import RevealingList from '../components/homepage/animation/RevealingList';
import { Suspense } from "react";
import ContactSection from "../components/homepage/ContactSection";
import Loading from "./Loading";

export default function Page() {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/db');
      const result = await response.json();
      setData(result.design);
    };

    fetchData();
  }, []);

  const filteredData = activeTab === 'All' 
  ? [...data].reverse()
  : [...data.filter(item => item.category.toLowerCase() === activeTab.toLowerCase())].reverse();


  const getCategoryCount = (category) =>
    data.filter(item => item.category.toLowerCase() === category.toLowerCase()).length;

  return (
    <>
      <div className="container mx-auto px-6 py-10 pt-32 md:px-10 lg:px-20">
        <p className="text-3xl md:text-7xl font-extralight">Creating Top-notch <br /> Digital Products</p>
      </div>
      <Suspense fallback={<Loading />}>
        <div className="container mx-auto px-6 py-10 md:px-10 lg:px-20">
          <div className="flex gap-5 mb-6">
            <button
              className={`relative inline-flex items-center p-3 text-sm font-medium text-center p-5 border rounded-full ${activeTab === 'All' ? 'bg-gray-200' : ''}`}
              onClick={() => setActiveTab('All')}
            >
              All
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-black border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                <p>{data.length}</p>
              </div>
            </button>
            <button
              className={`relative inline-flex items-center p-3 text-sm font-medium text-center p-5 border rounded-full ${activeTab === 'Design' ? 'bg-gray-200' : ''}`}
              onClick={() => setActiveTab('Design')}
            >
              Design
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-black border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                <p>{getCategoryCount('design')}</p>
              </div>
            </button>
            <button
              className={`relative inline-flex items-center p-3 text-sm font-medium text-center p-5 border rounded-full ${activeTab === 'Development' ? 'bg-gray-200' : ''}`}
              onClick={() => setActiveTab('Development')}
            >
              Development
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-black border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                <p>{getCategoryCount('development')}</p>
              </div>
            </button>
          </div>

          {/* Display Items */}
          <div>
            <ul>
              {filteredData.map(item => (
                <div key={item.id}>
                  <RevealingList>
                    <Link href={`/works/${item.id}`}>
                      <div className="flex flex-row justify-between items-center py-4">
                        <div>
                          <p className="text-2xl md:text-4xl lg:text-5xl mb-4 text-black uppercase">{item.brand}</p>
                            <div className=" text-xs font-semibold text-black/40">
                              
                                Website  - 
                                
                              <span>
                                &nbsp;{item.category}
                                </span>
                            </div>
                        </div>
                        <div>
                          <Image
                            src={item.mainimg}
                            width={200}
                            height={100}
                            alt={item.name}
                            className="w-32 h-20 md:h-32 md:w-52 object-cover rounded-lg drop-shadow-md"
                          />
                        </div>
                      </div>
                      <hr className="border-t border-gray-300" />
                    </Link>
                  </RevealingList>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </Suspense>
      <ContactSection />
    </>
  );
}
