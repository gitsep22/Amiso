import React from "react";
import Slider from "react-slick";
import Image from "../../assets/Img1.png";
import Img1 from "../../assets/women/women.png";


const SliderSection = ({ images }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-sky-500/40 py-2 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      <div className="bg-sky-500/40 py-2">
        <img src={Img1} alt="Icon" className="w-6 h-6" />
      </div>
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {images.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className="text-sm">
                    {data.description}
                  </p>
                  <h1 data-aos="zoom-out" data-aos-duration="1000" data-aos-once="true" className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {data.title}
                  </h1>
                  <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                    <button
                      onClick={data.handleOrderPopup}
                      className="bg-gradient-to-r from-sky-400 to-sky-600 transition-all duration-200 text-white py-1 px-4  flex items-center gap-3 group"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
                <div className="order-1 sm:order-2">
                  <div data-aos="zoom-in" data-aos-once="true" className="relative z-10">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
const ProductCard = ({ img, title, description, rating, handleOrderPopup, additionalText, aosDelay }) => (
  <div
    data-aos="zoom-in"
    data-aos-delay={aosDelay}
    className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] w-full flex flex-col"
  >
    {/* Image Section */}
    <div className="h-[250px] w-full overflow-hidden">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-110 duration-300"
      />
    </div>

    {/* Details Section */}
    <div className="p-4 flex flex-col justify-between flex-1 text-center">
      <h1 className="text-xl font-bold mb-2">{title}</h1>

      {/* Description */}
      <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 mb-4">{description}</p>
    </div>

    {/* Additional Text Below the Container */}
    {additionalText && (
      <div className="p-2 text-center text-sm text-gray-600 dark:text-gray-300 mt-2">
      <p>{additionalText}</p>
    </div>
    )}
  </div>
);
const HeroSection = ({ handleOrderPopup }) => {
  const imageList = [
    {
      id: 1,
      img: Img1,
      description: "RENEW YOUR LOOK",
      title: "A Tradition of Quality Cleaning",
      handleOrderPopup,
    },
    {
      id: 2,
      img: Img1,
      description: "RENEW YOUR LOOK",
      title: "A Tradition of Quality Cleaning",
      handleOrderPopup,
    },
    {
      id: 3,
      img: Img1,
      description: "RENEW YOUR LOOK",
      title: "A Tradition of Quality Cleaning",
      handleOrderPopup,
    },
  ];

  const productsData = [
    { id: 1, img: Image, title: "Professional Cleaning", description: "Elegant traditional wear", aosDelay: "0" },
    { id: 2, img: Image, title: "Fast and efficient", description: "Trendy casual wear", aosDelay: "200" },
    { id: 3, img: Image, title: "Renew your look", description: "Stylish sunglasses",aosDelay: "400" },
  ];

  return (
    <div>   
      <SliderSection images={imageList} />

      {/* Products Section */}
      <div className="mt-14 mb-12">
        <div>
        <div className="bg-sky-500/40 py-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {productsData.map((data) => (
              <ProductCard
              key={data.id}
              img={data.img}
              title={data.title}
              description={data.description}
              handleOrderPopup={handleOrderPopup}
              additionalText="This product is available in multiple colors and sizes!"
              aosDelay={data.aosDelay}
              />
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;






















