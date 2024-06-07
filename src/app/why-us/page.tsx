import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <header className="bg-primary text-white text-center py-12">
        <h1 className="text-4xl  font-bold mt-16">Why Us</h1>
      </header>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Mission And Values</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          At MDAllTechSolution, our vision is to empower businesses worldwide by
          delivering innovative and high-quality web development solutions. We
          aspire to be a global leader in web development, recognized for our
          exceptional craftsmanship, commitment to customer satisfaction, and
          dedication to creating digital experiences that drive business growth
          and transformation.
        </p>
        <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">10+</h3>
            <p className="text-gray-700">Specialists</p>
          </div>
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">5+</h3>
            <p className="text-gray-700">Years of Experience</p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          We envision a future where every business, regardless of size or
          industry, has access to state-of-the-art digital tools and platforms
          that enable them to reach their full potential. Through our relentless
          pursuit of excellence and our passion for technology
        </p>
      </section>
    </div>
  );
}
