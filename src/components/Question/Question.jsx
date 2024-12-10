import React from "react";

const QuestionSection = () => {
  return (
    <div>
      <div className="bg-sky-500/40 py-2">
      
      <div className="container py-12 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div className="relative">
            <img
              src="https://via.placeholder.com/600x400" // Replace with your image URL
              alt="Question Section Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent text-white w-full rounded-lg">
              <h2 className="text-3xl font-bold">Our Special Offer</h2>
              <p className="mt-4 text-sm">
                We provide exclusive offers to our customers. Check out the
                details below to learn more!
              </p>
              <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600">
                Learn More
              </button>
            </div>
          </div>

          {/* Right side: Additional content (Heading & Paragraph) */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-center">Why Choose Us?</h3>
            <p className="text-sm text-gray-500 text-center mt-4">
              We offer the best products and services with amazing offers. Get
              in touch with us to know more about our services and exclusive
              deals!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12 mt-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-bold">Quality Products</h4>
              <p className="text-gray-500 mt-4">
                High quality products with excellent reviews from our customers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-bold">Fast Delivery</h4>
              <p className="text-gray-500 mt-4">
                Get your products delivered quickly with our efficient delivery
                service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-bold">Easy Payment</h4>
              <p className="text-gray-500 mt-4">
                Flexible payment methods that suit your needs and preferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-bold">Customer Support</h4>
              <p className="text-gray-500 mt-4">
               support team is always ready to help you with any queries or issues.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default QuestionSection;
