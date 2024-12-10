import React from "react";
import Image from "../../assets/Image.jpg";

const ProductsData = [
  {
    id: 1,
    img: Image,
    title: "Profesional Team",
    para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sitasperiores modi. Sit asperiores modi.",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Image,
    title: "24/7 Services",
    para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sitasperiores modi. Sit asperiores modi.",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Image,
    title: "Services Guarantee",
    para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sitasperiores modi. Sit asperiores modi.",
    aosDelay: "400",
  },
 
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            WHY CHOOSE US
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Tradition of Trust
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi. Sit asperiores modi.
          </p>
        </div>

        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 place-items-center">
            {/* Product Card section */}
            {ProductsData.map((data) => (
              <div
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] w-full flex flex-col"
              >
                {/* Image Section */}
                <div className="h-[150px] w-full overflow-hidden">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 duration-300"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-1 text-center">
                  <h3 className="font-semibold text-xl">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

