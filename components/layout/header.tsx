"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X, CircuitBoard, Home, Wrench, FolderGit2, Users, BookOpen } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const routes = [
  {
    href: "/",
    label: "Home",
    icon: <Home className="h-4 w-4 text-blue-500" />,
  },
  {
    href: "/services",
    label: "Services",
    icon: <Wrench className="h-4 w-4 text-green-500" />,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: <FolderGit2 className="h-4 w-4 text-purple-500" />,
  },
  {
    href: "/about",
    label: "About",
    icon: <Users className="h-4 w-4 text-orange-500" />,
  },
  {
    href: "/blog",
    label: "Blog",
    icon: <BookOpen className="h-4 w-4 text-red-500" />,
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
          ? "bg-background/95 backdrop-blur-sm border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <CircuitBoard className="h-6 w-6 text-primary" />
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
            <Button asChild className="hidden md:inline-flex">
              <Link href="/contact">Contact Us</Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
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
                  <Button asChild className="mt-2">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}