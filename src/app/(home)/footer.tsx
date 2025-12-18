"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavBarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavBarItem = ({ href, children, isActive }: NavBarItemProps) => {
  return (
    <Link
      className={cn(
        !isActive &&
          "hover:after:flex hover:after:absolute hover:after:w-[30px] hover:after:h-[30px] hover:after:bg-[url('/vector.svg')] hover:after:bg-contain hover:after:bg-no-repeat hover:after:content-[''] after:opacity-0 after:translate-y-2 after:transition-all after:duration-300 hover:after:opacity-100 hover:after:translate-y-0",
        isActive &&
          "after:flex after:absolute after:w-[30px] after:h-[30px] after:bg-[url('/vector.svg')] after:bg-contain after:bg-no-repeat"
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

const navBarItems = [
  { href: "/", children: "Home" },
  { href: "/services", children: "Services" },
  { href: "/aboutus", children: "About Us" },
  { href: "/contactus", children: "Contact US" },
];

export const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="bg-neutral-800 ">
      <div className="mx-auto py-24 w-full sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[83rem]">
        <div className="grid grid-cols-1 gap-x-2 gap-y-10 lg:grid-cols-4 xl:grid-cols-3">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center mb-10">
              <Image
                src="/logo-white.svg"
                width={150}
                height={150}
                alt="Logo white"
              />
            </Link>
            <div className="flex space-x-4">
              <Link href="/" className="bg-gray-100 rounded-full p-2">
                <Facebook className="size-6" />
              </Link>
              <Link href="/" className="bg-gray-100 rounded-full p-2">
                <Instagram className="size-6" />
              </Link>
              <Link href="/" className="bg-gray-100 rounded-full p-2">
                <Mail className="size-6" />
              </Link>
              <Link href="/" className="bg-gray-100 rounded-full p-2">
                <Twitter className="size-6" />
              </Link>
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-2 gap-x-4 gap-y-8 text-sm/4 sm:grid-cols-4 lg:col-span-3 xl:col-span-2">
            <div className="space-y-4">
              <h2 className="text-gray-100 font-bold text-xl">Company</h2>
              <div className="flex flex-col space-y-4 text-gray-100 text-lg">
                {navBarItems.map((item) => (
                  <NavBarItem
                    key={item.href}
                    {...item}
                    isActive={pathname === item.href}
                  >
                    {item.children}
                  </NavBarItem>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-gray-100 font-bold text-xl">Our Product</h2>
              <div className="flex flex-col space-y-4 text-gray-100 text-lg">
                <Link href="/">Support</Link>
                <Link href="/">Guide</Link>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-gray-100 font-bold text-xl">
                Terms & policies
              </h2>
              <div className="flex flex-col space-y-4 text-gray-100 text-lg">
                <Link href="/">Terms of Service</Link>
                <Link href="/">Privacy Policy</Link>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-gray-100 font-bold text-xl">Contact</h2>
              <div className="flex flex-col space-y-4 text-gray-100 text-lg">
                <Link href="/">(+62) 893912392190</Link>
                <Link href="/">agecnycr@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex pb-6 items-center gap-2 text-gray-100">
          © 24Food 2022 - All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
