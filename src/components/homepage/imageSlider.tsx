import React, { useState, useEffect } from "react";
import Image from "next/image";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1422&q=80",
      title: "Hello world",
      subtitle: "Carousel with Next.js and React",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544144433-d50aff500b91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Hello world",
      subtitle: "Carousel with Next.js and React",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="relative h-auto w-full translate-y-[-6em]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-[200px] sm:h-[250px] w-full">
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start p-10">
              <div className="text-white">
                <p className="font-bold text-sm uppercase">Services</p>
                <p className="text-1xl sm:text-3xl font-bold">{slide.title}</p>
                <p className="text-1xl sm:text-3xl mb-10 leading-none">
                  {slide.subtitle}
                </p>
                <a
                  href="#"
                  className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentSlide ? "bg-purple-800" : "bg-purple-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
