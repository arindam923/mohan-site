import { IconArrowLeft, IconArrowRight, IconCheck } from "@tabler/icons-react";

const PricingSection = () => {
  const packages = [
    {
      id: 0,
      name: "BASIC",
      price: 10000,
      description:
        "Single One page site fully responsive developed using react or next.js",
      points: [
        "Functional Website",
        "Responsive Design",
        "Content Upload",
        "SEO Ready",
        "Ready to deploy",
      ],
    },
    {
      id: 1,
      name: "STANDARD",
      price: 25000,
      description:
        "Multi-page website with dynamic content and user authentication",
      points: [
        "Fully Responsive Design",
        "Content Management System (CMS)",
        "User Registration and Login",
        "Admin Dashboard",
        "Email Integration",
        "Social Media Integration",
        "SEO Optimized",
      ],
    },
    {
      id: 2,
      name: "PREMIUM",
      price: 50000,
      description:
        "E-commerce website with payment gateway integration and advanced features",
      points: [
        "Fully Responsive Design",
        "Content Management System (CMS)",
        "User Registration and Login",
        "Admin Dashboard",
        "Email Integration",
        "Social Media Integration",
        "SEO Optimized",
        "E-commerce Functionality",
        "Payment Gateway Integration",
        "Order Management System",
        "Inventory Management",
        "Shipping and Tracking",
      ],
    },
  ];

  return (
    <section className="container mt-6 mx-auto">
      <p className="text-primary text-sm tracking-widest font-semibold uppercase">
        pricing
      </p>
      <h3 className="lg:text-4xl text-2xl leading-normal font-semibold">
        One Fixed pricing to get your project done<span></span>
      </h3>
      <p className="text-muted text-xs lg:text-sm ">
        your custom on-demand team for only a single payment
      </p>
      <div className="grid md:grid-cols-3 gap-10 mt-5">
        {packages.map((item) => (
          <article
            className="bg-neutral-900 group hover:scale-105 transition-all duration-75 ease-in-out flex flex-col justify-between border p-4 rounded-md  border-stone-700"
            key={item.id}
          >
            <div>
              <p className="text-stone-400 text-sm uppercase tracking-widest">
                {item.name}
              </p>
              <h3 className="text-2xl font-semibold leading-normal">
                {" "}
                ₹ {item.price}
              </h3>

              <p className="text-sm text-stone-400">{item.description}</p>
              <div className="mt-4 space-y-2">
                {item.points.map((it, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <IconCheck className="text-primary" />
                    <p className="text-sm text-stone-400 ">{it}</p>
                  </div>
                ))}
              </div>
            </div>
            <button className="w-full group-hover:bg-primary flex items-center justify-center space-x-2 mt-2 border border-primary hover:bg-primary text-white py-2 rounded-md">
              <span>Get Started </span> <IconArrowRight />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
