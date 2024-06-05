import Carousel from "@/components/home/CarouselCard";

import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";
import { Spotlight } from "@/components/ui/Spotlight";
import dynamic from "next/dynamic";


const ServiceSection = dynamic(() => import("@/components/home/ServiceSection"), {
  ssr: false
})

const PortfolioSection = dynamic(() => import("@/components/home/PortfolioSection"), {
  ssr: false
})

const PricingSection = dynamic(() => import("@/components/home/PricingSection"), {
  ssr: false
})


const TestimonialSection = dynamic(() => import("@/components/home/TestimonialSection"), {
  ssr: false
})

export default function Home() {

  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

  return (
    <main className="w-full    pt-8 text-white  min-h-screen bg-black">
      <div className="bg-grid-white/[0.1] overflow-hidden relative container mx-auto w-full pb-8">
        <Spotlight fill="#8B5CF6" />
        <h1 className="text-6xl leading-normal  font-bold">
          We develop <br />
          <span className="bg-gradient-to-r from-purple-300 to-primary bg-clip-text text-transparent">amazing</span> Websites <br /> for your business <span className="bg-gradient-to-r from-purple-300 to-primary bg-clip-text text-transparent">.</span>
        </h1>
        <p className="text-sm w-full lg:w-[60%] text-stone-300 leading-5 mt-5">Discover our semaless workflow as we transform Figma designs into stunning  webflow websites . Explore the synergy between design and development for a  pixel-perfect online experience</p>
        <div className="mt-5 flex items-center space-x-4">

          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 text-sm bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              View Work
            </div>
          </button>

          <div className="flex flex-row items-center justify-center">
            <AnimatedTooltip items={people} />
          </div>

        </div>

        <Spotlight fill="#8B5CF6" className="absolute left-[80%] top-0" />

      </div>

      <div className="mt-16 overflow-hidden flex flex-col items-center">
        <p className="text-sm text-center ">Trusted by 30+ business</p>
        <Carousel />
      </div>

      <ServiceSection />
      <PortfolioSection />
      <PricingSection />
      <TestimonialSection />
    </main>
  );
}
