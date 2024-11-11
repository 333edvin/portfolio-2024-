// import TextReveal from './animation/TextReveal';
import Word from './animation/Word';
export default function AboutSection() {
  const lines = 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptates sit voluptatibus veniam ipsum accusamus facilis in pariatur voluptatum exercitationem sapiente sequi consequatur expedita saepe ad omnis ducimus, debitis provident.";
  
    const lines2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit Doloremque voluptates sit voluptatibus veniam ipsum accusamus facilis in pariatur voluptatum exercitationem sapiente sequi consequatur"
    return (
      <div className="container mx-auto px-6 md:px-10 lg:px-20 py-10 md:py-16 space-y-10 md:space-y-16">
        <p className="text-xl ">About</p>
        
          <Word lines={lines} className="text-base md:text-lg lg:text-2xl leading-relaxed"/>
        
          <Word lines={lines2} className="flex justify-end  text-end "/>
      </div>
    );
  }
  