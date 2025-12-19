"use client";

import { ArrowRight, MenuIcon, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";

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

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <nav className="flex h-32 my-10 space-y-4 lg:my-0 lg:space-y-0  lg:flex-row flex-col w-full items-center justify-between">
      <Link href="/">
        <Image src="/logo.svg" width={150} height={150} alt="Logo" />
      </Link>
      <div className="items-center hidden lg:flex space-x-20 text-gray-700 text-lg">
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
      <div className="flex items-center space-x-4">
        <Button
          asChild
          className="inline-flex items-center justify-center transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground hover:bg-secondary/80 h-17 px-6 py-2 rounded-3xl has-[>svg]:px-6"
        >
          <Link href="/cart">
            <ShoppingBag className="size-6" />
          </Link>
        </Button>
        <Button asChild className="text-md">
          <Link href="/signup">
            Sign Up <ArrowRight className="size-5" />
          </Link>
        </Button>
        <NavbarSidebar
          open={isSidebarOpen}
          onOpenChange={setIsSidebarOpen}
          items={navBarItems}
        />
        <Button
          variant="secondary"
          className="lg:hidden"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon className="size-6" />
        </Button>
      </div>
    </nav>
  );
};
