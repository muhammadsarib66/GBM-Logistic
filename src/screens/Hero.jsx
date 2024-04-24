import Slider from "react-slick";
import hero from "../assets/heroImg1.jpg";
import hero2 from "../assets/heroImg2.jpg";
import "slick-carousel";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import { useEffect } from "react";
import PrimaryBtn from "../components/PrimaryBtn";
const Hero = () => {
  const heroArr = [
    {
      heading: "Fastest & Secured Logistic Solution & Services ",
      subheading: "Internatonal logistic",
      descript:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia quod officiis numquam fugit alias totam dicta, esse minima dolores.",
      image: hero,
      transition: "fade-right",
    },
    {
      heading: "Shipping the Products with Care & Safety",
      subheading: "Customer Satisfaction",
      descript:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia quod officiis numquam fugit alias totam dicta, esse minima dolores.",
      image: hero2,
      transition: "fade-right",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className=" w-full   ">
      <Slider {...settings} className="w-full overflow-hidden h-screen ">
        {heroArr.map((item, ind) => (
          <div key={ind} className=" bg-red-500 ">
            <img src={item?.image} alt="hero" className="img" />
            <div className="p-4 w-full h-screen absolute top-0  bg-black lg:bg-opacity-15 bg-opacity-40"></div>
            <div
              data-aos={item?.transition}
              className=" hidden lg:block ContentDiv text-white w-[60%] font-black font-Outfit absolute top-0 h-screen "
            ></div>
            <div
              data-aos="fade-up"
              className="absolute top-0 w-[96%] md:w-[80%] lg:max-w-[40%] h-screen  text-white  flex flex-col gap-4 p-4 justify-center"
            >
              <h3
                data-aos="fade-up"
                className="font-DmSans text-lg md:text-xl uppercase"
              >
                {item?.subheading}
              </h3>
              <h1
                data-aos="fade-up"
                className=" font-bold text-4xl md:text-6xl font-Outfit md:tracking-normal leading-tight"
              >
                {item?.heading}
              </h1>
              <p className="text-lg font-DmSans font-normal">
                {" "}
                {item?.descript}
              </p>
              <div className="flex  flex-col md:flex-row gap-6">
                <PrimaryBtn
                  title="all services"
                  icon="fa-solid fa-arrow-right"
                  style="capitalize  font-semibold py-3 px-5 border-2 border-white hover:bg-secondary duration-300 hover:border-secondary"
                />

                <div className="flex gap-4">
                  <div className=" relative bg-[#CC0E16] rounded-full w-14 h-14 flex  items-center justify-center">
                    <i className="text-2xl fa-solid fa-phone"></i>
                    <div className="absolute top-0  animate-ping bg-[#CC0E16] rounded-full  w-14 h-14"></div>
                  </div>
                  <div>
                    <p> Call us Now</p>
                    <p className="font-bold text-lg md:text-2xl"> +92 345023218</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
