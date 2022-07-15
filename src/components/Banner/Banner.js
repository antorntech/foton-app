import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Banner.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="py-5">
      <Slider {...settings}>
        <div>
          <div className="wrapper">
            <h1 className="text-5xl text-primary">
              Just What Your Business Needs
            </h1>
            <p className="text-2xl p-5 lg:px-72 text-gray-400">
              Make your awesome business idea a reality with Foton, the fresh
              new theme from Mikado - custom made for modern startups
            </p>
            <div className="banner-button p-5">
              <button
                id="readMoreBtn"
                className="btn btn-secondary mx-2 px-10 rounded-full"
              >
                READ MORE
              </button>
              <button
                id="contactUsBtn"
                className="btn bg-blue-500 mx-2 px-10 rounded-full"
              >
                CONTACT US
              </button>
            </div>
          </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
