// import TextReveal from './animation/TextReveal';
import Word from './animation/Word';
export default function AboutSection() {
  const lines = 
    "I'm a dedicated freelance web developer creating responsive, user-friendly websites tailored to clients' needs. With a focus on quality and adaptability, I bring each project to life, helping businesses enhance their online presence.";
  
    const lines2 = "I also offer specialized services for brands, focusing on crafting digital experiences that amplify their presence and resonate with their audience. By combining functionality with compelling design, I help brands connect meaningfully with their customers online."
    return (
      <div className="container mx-auto px-6 md:px-10 lg:px-20 py-10 md:py-16 space-y-10 md:space-y-16">
        <p className="text-xl ">About</p>
        
          <Word lines={lines} className="text-base md:text-lg lg:text-2xl leading-relaxed"/>
        
          <Word lines={lines2} className="flex justify-end  text-end "/>
      </div>
    );
  }
  