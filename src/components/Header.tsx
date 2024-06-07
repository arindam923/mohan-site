"use client";

import { cn } from "@/lib/utils";
import { IconMenu } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { DrawerDialogDemo } from "./GetStartedDrawer";

const Header = () => {
  const pathname = usePathname();

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
      href: "/",
    },
    {
      id: 3,
      name: "FAQ",
      href: "/faq",
    },
  ];

  return (
    <header className="w-full bg-black border-neutral-800 text-white flex items-center justify-between border-b px-4 py-2">
      <div className="flex items-center space-x-2">
        <div className="lg:hidden">
          <MobileMenu />
        </div>
        <Link href="/">
          <h2 className="text-2xl font-semibold">
            Rev<span className="text-purple-600">V</span>Trex
          </h2>
        </Link>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        {links.map((item) => (
          <Link href={item.href} key={item.id}>
            <p
              className={cn(
                "text-sm",
                item.href === pathname ? "text-primary font-semibold" : ""
              )}
            >
              {item.name}
            </p>
          </Link>
        ))}
      </nav>

      {/* <button className="px-8 py-2 bg-purple-600 text-white text-sm rounded-md font-semibold">
        <span>Let&apos;s Talk</span>
      </button> */}
      <DrawerDialogDemo />
    </header>
  );
};

export default Header;
