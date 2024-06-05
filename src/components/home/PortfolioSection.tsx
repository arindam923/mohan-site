import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";



const HeaderComponent = () => (
    <div className="w-full h-[60%]">

    </div>
)

const items = [
    {
        title: "The Dawn of Innovation",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <HeaderComponent />,
        image: "/pro1.jpg",
        className: "md:col-span-2",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <HeaderComponent />,
        image: "/pro2.jpg",
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <HeaderComponent />,
        className: "md:col-span-1",
        image: "/pro1.jpg",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <HeaderComponent />,
        image: "/pro3.png",
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <HeaderComponent />,
        image: "/pro1.jpg",
        className: "md:col-span-1",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
];

function BentoGridSecondDemo() {
    return (
        <BentoGrid className=" mt-4">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                    icon={item.icon}
                />
            ))}
        </BentoGrid>
    );
}


const PortfolioSection = () => {
    return (
        <section className="container mx-auto mt-6">
            <p className="text-primary text-sm tracking-widest font-semibold uppercase">portfolio</p>
            <h3 className="text-4xl leading-normal font-semibold">Our Latest work<span></span></h3>
            <p className="text-muted text-xs lg:text-sm lg:w-[60%] ">Discover our freshest creations that showcases the power of design and digital excellence . Explore our latest work and withness the impact we bring to every project</p>


            <BentoGridSecondDemo />

        </section>
    )
}


export default PortfolioSection