import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TopData } from "./TopData";
import Image from "next/image";

function TopSlide() {
  const refSlider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="w-full relative lg:p-20 p-0">
      <Slider {...settings} ref={refSlider}>
        {/* image */}
        {TopData.map((item) => (
          <div className="top-image-section">
            <div className="flex items-center p-3 h-72 w-full">
              <img
                src={item.image}
                alt=""
                className="object-fill rounded-xl shadow-md mt-10 h-2/4"
              />
            </div>
          </div>
        ))}
        {/* --------- */}
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

export default TopSlide;
