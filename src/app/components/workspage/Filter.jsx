'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import RevealingList from '../homepage/animation/RevealingList';

export default function () {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/db');
      const result = await response.json();
      setData(result);
      
    };

    fetchData();
  }, []);

  
  const allDataLength = (data?.design.length || '') + (data?.development.length || '');

  return (
    <div className="container mx-auto px-6 py-10 md:px-10 lg:px-20">
      <div className="flex gap-5 mb-6">
        <button
          className={`relative inline-flex items-center p-3 text-sm font-medium text-center p-5 border rounded-full ${activeTab === 'All' ? 'bg-gray-200' : ''}`}
          onClick={() => setActiveTab('All')}
        >
          All
          <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-black bg-slate-200 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            <p> {allDataLength}</p>
          </div>
        </button>
        <button
          className={`relative inline-flex items-center p-3 text-sm font-medium text-center p-5 border rounded-full ${activeTab === 'Design' ? 'bg-gray-200' : ''}`}
          onClick={() => setActiveTab('Design')}
        >
          Design
          <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-black bg-slate-200 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            <p> {data?.design.length}</p>
          </div>
        </button>
        <button
          className={`relative inline-flex items-center p-3 text-sm font-medium text-center p-5 border rounded-full ${activeTab === 'Development' ? 'bg-gray-200' : ''}`}
          onClick={() => setActiveTab('Development')}
        >
          Development
          <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-black bg-slate-200 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            <p> {data?.development.length}</p>
          </div>
        </button>
      </div>

      <div>
        {activeTab === 'All' && (
          <div>
            <h3>All</h3>
            <ul>
              {data?.design.map(item => (
                <div key={item.id}>
                  <RevealingList>
                    <Link href={item.link}>
                    <div className="flex flex-row justify-between items-center p-4">
                      <div>
                      <p className="text-3xl md:text-4xl lg:text-5xl  mb-4 ">{item.name}</p>
                      <p className="text-xs ">Design</p>
                      </div>
                      <div>
                        <Image
                          src={item.img}
                          width={200}
                          height={100}
                          alt={item.name}
                          className="w-full h-20 md:h-32 md:w-auto object-cover rounded-lg"
                          />
                      </div>
                    </div>
                    <hr className="border-t border-gray-300" />
                    </Link>
                  </RevealingList>
                </div>
              ))}
              {data?.development.map(item => (
                <RevealingList>
                <Link href={item.link}>
                <div className="flex flex-row justify-between items-center p-4">
                <div>
                      <p className="text-3xl md:text-4xl lg:text-5xl  mb-4 ">{item.name}</p>
                      <p className="text-xs ">Develop</p>
                  </div>
                  <div>
                    <Image
                      src={item.img}
                      width={200}
                      height={100}
                      alt={item.name}
                      className="w-full h-20 md:h-32 md:w-auto object-cover rounded-lg"
                    />
                  </div>
                </div>
                <hr className="border-t border-gray-300" />
                </Link>
              </RevealingList>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'Design' && (
          <div>
            <h3>Design</h3>
            <ul>
              {data?.design.map(item => (
                <RevealingList>
                <Link href={item.link}>
                <div className="flex flex-row justify-between items-center p-4">
                  <p className="text-3xl md:text-4xl lg:text-5xl  mb-4 md:mb-0">{item.name}</p>
                  <div>
                    <Image
                      src={item.img}
                      width={200}
                      height={100}
                      alt={item.name}
                      className="w-full h-20 md:h-32 md:w-auto object-cover rounded-lg"
                    />
                  </div>
                </div>
                <hr className="border-t border-gray-300" />
                </Link>
              </RevealingList>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'Development' && (
          <div>
            <h3>Development</h3>
            <ul>
              {data?.development.map(item => (
                <RevealingList>

               <Link href={item.link}>
               <div className="flex flex-row justify-between items-center p-4">
                 <p className="text-3xl md:text-4xl lg:text-5xl  mb-4 md:mb-0">{item.name}</p>
                 <div>
                   <Image
                     src={item.img}
                     width={200}
                     height={100}
                     alt={item.name}
                     className="w-full h-20 md:h-32 md:w-auto object-cover rounded-lg"
                   />
                 </div>
               </div>
               <hr className="border-t border-gray-300" />
               </Link>
              </RevealingList>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
