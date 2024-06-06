import Image from "next/image";

const ServiceSection = () => {
  const cards = [
    {
      id: 0,
      name: "Figma to React",
      description:
        "Transform your Figma designs into fully functional, high-performance React applications with pixel-perfect accuracy.",
      image: "/arrow-48.png",
    },
    {
      id: 1,
      name: "Custom Web Development",
      image: "/chat-48.png",
      description:
        " Tailor-made websites and web applications that perfectly align with your business goals and brand identity.",
    },
    {
      id: 2,
      name: "SEO Optimization",
      image: "/location-48.png",
      description:
        "Enhance your online presence and drive organic traffic with our expert search engine optimization strategies.",
    },
    {
      id: 3,
      name: "Content Management Systems (CMS)",
      image: "/trophy-48.png",
      description:
        " Implement and customize powerful CMS solutions like WordPress, Joomla, and Drupal to manage your content effortlessly.",
    },
  ];

  return (
    <section className="container mx-auto mt-6">
      <p className="text-primary text-sm tracking-widest font-semibold uppercase">
        service
      </p>
      <h3 className="lg:text-4xl text-2xl leading-normal font-semibold">
        Exceeding Expectations <span></span>
      </h3>
      <p className="text-muted text-xs lg:text-sm ">
        We are not just an agency we are path to exceptional web projects
      </p>

      <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((item) => (
          <article
            key={item.id}
            className="bg-neutral-900 flex flex-col justify-around border border-muted-foreground h-[200px] p-4 rounded-md"
          >
            {/* <div className="w-16 h-16 rounded-md bg-purple-100" /> */}
            <Image
              alt="service"
              src={item.image}
              width={30}
              height={30}
              className=""
            />
            <h3 className="text-2xl font-semibold">{item.name}</h3>
            <p className="text-xs text-muted-foreground">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
