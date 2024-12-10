import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const ProductsData = [
  {
    id: 1,
  
    title: "Home Cleaning",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaquereiciendis inventore iste ratione ex alias quis magni at optio",
    aosDelay: "0",
  },
  {
    id: 2,
    
    title: "Windows Cleaning",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaquereiciendis inventore iste ratione ex alias quis magni at optio",
    aosDelay: "200",
  },
  {
    id: 3,
    
    title: "Office Cleaning",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaquereiciendis inventore iste ratione ex alias quis magni at optio",
    aosDelay: "400",
  },
];

const Banner = () => {
  return (
    <div>
     
      <div className="min-h-[550px] py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
           
            <div data-aos="zoom-in">
              <img
                src={BannerImg}
                alt="Banner"
                className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
              />
            </div>

            {/* Text Section with Icons */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg sm:col-span-1 col-span-2">
           
              <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-center">
                A Cleaner Place is a Safer Place
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wide leading-5 text-center sm:text-left mt-4"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                reiciendis inventore iste ratione ex alias quis magni at optio
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                  <p>Quality Products</p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                  <p>Fast Delivery</p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                  <p>Easy Payment method</p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                  <p>Get Offers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-sky-500 py-12 mt-12">
        <div className="container">
       
          <div className="text-center mb-10">
            <p className="text-sm text-white">WHY CHOOSE US</p>
            <h2 className="text-3xl font-bold text-white">Our Grest Services</h2>
            <p className="text-xs text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              convallis efficitur ligula. Donec facilisis metus nulla, eu
              lobortis metus euismod nec.
            </p>
          </div>

          {/* Product Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ProductsData.map((data) => (
              <div
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 bg-white p-4 rounded-lg shadow-md"
              >
               
                <div>
                  <h3 className="font-semibold text-center">{data.title}</h3>
                  <p className="text-sm text-gray-600 text-center">{data.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;


