import Slider from "react-slick";
import { ServiceData } from "./ServiceData";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ServiceSlide() {
  const refSlider = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="w-full relative">
      <Slider {...settings} ref={refSlider}>
        {ServiceData.map((item) => (
          <div className=" server-image-section">
            {/* image */}
            <div className=" flex flex-col mt-10 items-center ">
              <img
                src={item.image}
                alt=""
                className="object-cover serverslide-img-slide h-80 rounded-xl "
              />
              {/* content */}
              <div className="p-6 flex flex-col rounded-xl lg:w-96 w-96 lg:h-44 h-48 absolute z-50 bg-gray-50 mt-60 lg:mt-64 items-start shadow-md">
                <h3 className="mb-3">{item.title}</h3>
                <p className="tracking-wide leading-relaxed">
                  {item.description}
                </p>
                <button className="mt-3 text-slate-600 border-slate-600 flex flex-row">
                  <h3 className="text-base mr-2">អាន​បន្ថែម</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* --------- */}
          </div>
        ))}
      </Slider>
      <div className="float-right inline-block ">
        <button onClick={() => refSlider.current.slickPrev()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block mr-2 opacity-50 hover:text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button onClick={() => refSlider.current.slickNext()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block opacity-50 hover:text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default ServiceSlide;
