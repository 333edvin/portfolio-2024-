'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ImWhatsapp } from "react-icons/im";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { toast } from 'sonner';
import MagneticElement from "../homepage/animation/MagneticElement";
export default function Form(){
    const router = useRouter();

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      orgname:'',
      service:'',
      message: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent default form submission
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        router.push('/');
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', orgname:'' , service:'', message: '' });
      } else {
        toast.error('Failed to send message. Please try again later.');
      }
    };
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 pt-20">
                <div className="p-2 md:p-8 col-span-2">
                    <form className="space-y-10" onSubmit={handleSubmit}>
                        <div className="">
                        <label className="block text-gray-200 font-thin mb-1 ml-4 text-sm md:text-2xl " htmlFor="name">What&apos;s your name?</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 bg-transparent focus:outline-none focus:border-none text-white  "
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        </div>
                        <hr/>

                        <div>
                        <label className="block text-gray-200 font-thin mb-1 ml-4 text-sm md:text-2xl " htmlFor="email">What&apos;s your email?</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 bg-transparent  focus:outline-none focus:border-none text-white "
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        </div>
                        <hr/>

                        <div>
                        <label className="block text-gray-200 font-thin mb-1 ml-4 text-sm md:text-2xl " htmlFor="orgname">What&apos;s the name of your organization?</label>
                        <input
                            type="text"
                            id="orgname"
                            name="orgname"
                            placeholder="Your Organization"
                            className="w-full px-4 py-2 bg-transparent  focus:outline-none focus:border-none text-white "
                            value={formData.orgname}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <hr/>
                        <div>
                        <label className="block text-gray-200 font-thin mb-1 ml-4 text-sm md:text-2xl " htmlFor="service">What services are you looking for?</label>
                        <input
                            type="text"
                            id="service"
                            name="service"
                            placeholder="Services Needed"
                            className="w-full px-4 py-2 bg-transparent  focus:outline-none focus:border-none text-white "
                            value={formData.service}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <hr/>
                        <div>
                        <label className="block text-gray-200 font-thin mb-1 ml-4 text-sm md:text-2xl " htmlFor="message">Your message?</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Type your message here"
                            rows="4"
                            className="w-full px-4 py-2 bg-transparent  focus:outline-none focus:border-none text-white "
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        </div>

                        <hr/>
                        <div className="flex items-end justify-end ">
                            <MagneticElement>
                        <button
                            type="submit"
                            className="w-20 h-20  md:w-36 md:h-36 rounded-full bg-white font-semibold text-black ">
                            Send it
                        </button>
                            </MagneticElement>
                        </div>
                    </form>
                    </div>

                    <div className="col-span-1 space-y-6 ">
                        <div className="text-white space-y-3">
                            <h2 className="text-gray-400 text-sm">Contact Details</h2>
                            <p>edvinjohnson333@gmail.com</p>
                            <p>+91 81 29 77 97 13</p>
                        </div>

                        <div className="text-white space-y-3">
                            <h2 className="text-gray-400 text-sm">Business Details</h2>
                            <p>Edvin Johnson</p>
                            <p>Location: Thrissur , Kerala</p>
                        </div>

                        <div className="text-white">
      <h2 className="text-gray-400 text-sm my-5">Socials</h2>
      <div className="space-y-6">
        <Link href={'#'}>
        <p className="group flex items-center w-auto">
          Github
          <span className="ml-2 invisible group-hover:visible text-lg "><FaGithub /></span>
        </p>
        </Link>
        
        <Link href={'#'}>
        <p className="group flex items-center w-auto">
          Linkedin
          <span className="ml-2 invisible group-hover:visible text-lg "><CiLinkedin /></span>
        </p>
        </Link>

        <Link href={'#'}>
        <p className="group flex items-center w-auto">
          Whatsapp
          <span className="ml-2 invisible group-hover:visible text-lg "><ImWhatsapp /></span>
        </p>
        </Link>
      </div>
    </div>
                    </div>
        </div>
    )
}