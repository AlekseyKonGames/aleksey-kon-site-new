import React, { useState } from 'react';
import { ArrowButton } from '../Buttons/ArrowButton';
import { ButtonWithIcon } from '../Buttons/ButtonWhisIcon';
export const ProjectSection = ({data}) => {
    const [current, setCurrent] = useState(0);

  // Массив картинок
  

  // Функция: следующий слайд
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % data.images.length);
  };

  // Функция: предыдущий слайд
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + data.images.length) % data.images.length);
  };
    return (<>
    <section className="project-section section">
        <div className="  px-6 md:px-0 pt-6 md:pt-0">
            <h2 className='text-center'>My Projects</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, odio praesentium. Aperiam culpa odio quas laborum ad quae asperiores eos?</p>
        </div>
        <div className="relative w-full">
            <div className="w-full lg:w-[70%] flex overflow-hidden gap-5 p-4 mx-auto">
                 {data.images.map((src, index) => (
          <a
            key={index}
            className={`flex-none w-full transition-transform duration-500 `}
            style={{
            transform: `translateX(calc(-${current * 100}% - ${current * 20}px))`,
            }}
          >
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
                  <ArrowButton  isRight={true} onClick={nextSlide} />
                </div>

            </div>
            <div className=" flex justify-center">
        {data.isButton === true && (
          
          <ButtonWithIcon isIconButton={data.isIconButton} icon={data.icon} text={"View All Projects ..."} href={"/projects"}/>
        )}
        </div>
    </section>
    </>)
}