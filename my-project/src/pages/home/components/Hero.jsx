import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

import img from '../../../assets/ola-szkolda-66cEiQvv4Z0-unsplash.jpg';
export default function Hero(){
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting){
            setIsVisible(true);
            observer.unobserve(entry.target);
        }
    },
    {threshold: 0.1},

    );
    if(sectionRef.current){
        observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
    }, []);
    const bgStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };
    return (
      <section
        ref={sectionRef}
        className={`${isVisible ? "opacity-100" : "opacity-0"}
         flex flex-col items-start justify-end gap-3 px-4 py-12
          w-full min-h-[55dvh] md:min-h-[80dvh] lg:min-h-[100dvh] transition-opacity duration-300 `}
        style={bgStyle}
      >
        <h1 className="text-white text-[40px] leading-[30px] font-playfair font-medium">shavan</h1>
        <p className="text-white text-[16px] leading-[18px] font-roboto-serif lg:text-[20px] lg:leading-[23px] font-sans"> Limited collections. Timeless design. No excess.</p>
        <button className="outline-none bg-white text-black w-fit p-2 cursor-pointer"
        onClick={() => navigate("/collections")}>
            Explore Collection
        </button>
      </section>
    );
}