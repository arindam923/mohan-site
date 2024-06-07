import { IconMenu } from "@tabler/icons-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const MobileMenu = () => {
  const links = [
    {
      id: 0,
      name: "Why Us",
      href: "/why-us",
    },
    {
      id: 1,
      name: "Case Studies",
      href: "/case-study",
    },
    {
      id: 2,
      name: "Testimonials",
      href: "/ashd",
    },
    {
      id: 3,
      name: "FAQ",
      href: "/faq",
    },
  ];
  return (
    <Sheet>
      <SheetTrigger>
        <IconMenu />
      </SheetTrigger>
      <SheetContent
        className="bg-neutral-950 border-none text-white"
        side={"left"}
      >
        <SheetHeader>
          <SheetTitle>
            <h2 className="text-2xl text-white font-semibold">
              Rev<span className="text-purple-600">V</span>Trex
            </h2>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="mt-4 space-y-4 text-xs cursor-pointer">
          {links.map((item) => (
            <p key={item.id} className="">
              {item.name}
            </p>
          ))}
        </div>
        <button className="w-full bg-primary mt-5 py-2 rounded-md text-sm font-semibold">
          Get Started
        </button>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
