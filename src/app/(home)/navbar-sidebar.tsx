"use client";

import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface NavBarItem {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

interface Props {
  items: NavBarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NavBarItem = ({ href, children, isActive }: NavBarItem) => {
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

export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
  const pathname = usePathname();
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <Link
              onClick={() => onOpenChange(false)}
              href="/"
              className="flex items-center"
            >
              <Image src="/logo.svg" width={150} height={150} alt="Logo" />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        <ScrollArea className="flex flex-col overflow-y-auto h-full space-y-6 px-6">
          {items.map((item) => (
            <NavBarItem
              key={item.href}
              {...item}
              isActive={pathname === item.href}
            >
              {item.children}
            </NavBarItem>
          ))}
        </ScrollArea>
        <Separator className="my-4" />
        <div className="mx-4 mb-2 space-y-2">
          <Button asChild className="text-md w-full">
            <Link onClick={() => onOpenChange(false)} href="/signup">
              Sign Up <ArrowRight className="size-5" />
            </Link>
          </Button>
          <Button
            onClick={() => onOpenChange(false)}
            asChild
            variant="secondary"
            className="text-md w-full"
          >
            <Link href="/sign-up-selling">
              Start Selling <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
