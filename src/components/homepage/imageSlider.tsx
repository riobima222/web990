import React, { useState, useEffect } from "react";
import Image from "next/image";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/banner.jpg",
      title: "Hello world",
      subtitle: "Carousel with Next.js and React",
    },
    {
      image: "/images/banner.jpg",
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
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start p-10"></div>
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
