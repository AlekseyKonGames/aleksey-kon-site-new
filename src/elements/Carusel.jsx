import React, { useState } from 'react';
import { ArrowButton } from './Buttons/ArrowButton';
export const Carusel = ({images}) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };
    return (
      <>
        <div className="relative w-full">
          <div className="w-full lg:w-[70%] flex overflow-hidden gap-5 p-4 mx-auto">
            {images.map((src, index) => (
              <a
                key={index}
                className={`flex-none w-full transition-transform duration-500 `}
                style={{
                  transform: `translateX(calc(-${current * 100}% - ${
                    current * 20
                  }px))`,
                }}>
                <div className="">
                  <img
                    className="mx-auto object-cover rounded-2xl shadow-lg hover:scale-102 transform-transition duration-300"
                    src={src}
                    alt={`Project ${index + 1}`}
                  />
                </div>
              </a>
            ))}
          </div>
          <div className="absolute top-[40%] lg:top-[45%] z-[10] left-[2%] lg:left-[5%]">
            <ArrowButton isRight={false} onClick={prevSlide} />
          </div>
          <div className="absolute top-[40%] lg:top-[45%] z-[10] right-[2%] lg:right-[5%]">
            <ArrowButton isRight={true} onClick={nextSlide} />
          </div>
        </div>
      </>
    );
}