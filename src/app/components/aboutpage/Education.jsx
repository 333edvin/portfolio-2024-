import Image from "next/image";
import Skills from "./Skills";

export default function EducationTable() {
  const educationData = [
    {
      image: '/images/eye.jpg',
      title: '+2 (computer science)',
      university: 'Chaldean Syrian',
      year: '2019',
    },
    {
      image: '/images/eye.jpg',
      title: 'Bachelor of Science',
      university: 'Kerala University',
      year: '2023',
    },
    {
      image: '/images/eye.jpg',
      title: 'Full Stack Developer (Intern)',
      university: 'Zuike Infotech',
      year: '2023',
    },
    {
      image: '/images/eye.jpg',
      title: 'MERN Stack Developer (Intern)',
      university: 'Luminar Technolab PVT',
      year: '2024',
    },
    {
      image: '/images/eye.jpg',
      title: 'Next js Developer',
      university: 'Freelance',
      year: 'Now',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-10">
      <div>
        <Image src={'/images/aboutPic.jpg'} width={500} height={650} alt="Dummy" className="rounded-full" />
      </div>
      <div className="mt-10">
        <p className="text-3xl text-start md:text-end mb-5">Education & Experience</p>
        <table className="w-full text-left ">
          <tbody>
            {educationData.slice().reverse().map((item, index) => (
              <tr
                key={index}
                
              >
                  
                <td className="text-xs md:text-sm p-1 md:p-4">{item.title}</td>
                <td className="text-xs md:text-sm p-1 md:p-4">{item.university}</td>
                <td className="text-xs md:text-sm p-1 md:p-4">{item.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Skills/>
      </div>
    </div>
  );
}
