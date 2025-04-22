"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, CircuitBoard, Home, Wrench, FolderGit2, Users, BookOpen, CalendarClock, Mail, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CatButton } from "@/components/ui/cat-button";
import { CatBadge } from "@/components/ui/cat-badge";

const routes = [
  {
    href: "/",
    label: "Home",
    icon: <Home className="h-4 w-4 text-blue" />,
  },
  {
    href: "/services",
    label: "Services",
    icon: <Wrench className="h-4 w-4 text-green" />,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: <FolderGit2 className="h-4 w-4 text-mauve" />,
  },
  {
    href: "/about",
    label: "About",
    icon: <Users className="h-4 w-4 text-peach" />,
  },
  {
    href: "/snigdha",
    label: "Snigdha OS",
    icon: <BookOpen className="h-4 w-4 text-teal" />,
  },
  {
    href: "/blog",
    label: "Blog",
    icon: <BookOpen className="h-4 w-4 text-red" />,
  },
  {
    href: "/schedule-meeting",
    label: "Schedule Meeting",
    icon: <CalendarClock className="h-4 w-4 text-yellow" />,
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "glass border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <CircuitBoard className="h-6 w-6 text-lavender" />
              <span className="font-bold text-lg hidden sm:inline-block">
                Tonmoy I&V
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2"
              >
                {route.icon}
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="hidden md:inline-flex">
                <CatButton variant="lavender" glow>
                  Contact Us <ChevronDown className="ml-2 h-4 w-4" />
                </CatButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass backdrop-blur-md">
                <DropdownMenuItem asChild>
                  <Link href="/contact" className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-blue" />
                    <span>Contact Form</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/schedule-meeting" className="flex items-center">
                    <CalendarClock className="mr-2 h-4 w-4 text-mauve" />
                    <span>Schedule Meeting</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <CatButton variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </CatButton>
              </SheetTrigger>
              <SheetContent side="right" className="glass backdrop-blur-md">
                <div className="flex flex-col space-y-4 mt-8">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className="text-base font-medium py-2 flex items-center gap-2"
                    >
                      {route.icon}
                      {route.label}
                    </Link>
                  ))}
                  <CatButton asChild className="mt-2" variant="sapphire" glow>
                    <Link href="/contact">Contact Us</Link>
                  </CatButton>
                  <CatButton asChild variant="lavender" className="mt-2">
                    <Link href="/schedule-meeting" className="flex items-center">
                      <CalendarClock className="mr-2 h-4 w-4" />
                      Schedule Meeting
                    </Link>
                  </CatButton>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}