"use client";

import * as React from "react";
import { Moon, Sun, Paintbrush, Palette } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Update flavor in HTML attribute
  const setFlavor = (flavor: string) => {
    document.documentElement.setAttribute("data-catppuccin-flavor", flavor);
    
    // Set theme based on flavor
    const isDark = flavor === "mocha" || flavor === "macchiato";
    setTheme(isDark ? "dark" : "light");
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="rounded-full">
        <Paintbrush className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Theme Mode</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Catppuccin Flavors</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setFlavor("latte")} className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-[#eff1f5] mr-2" />
          Latte (Light)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setFlavor("frappe")} className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-[#303446] mr-2" />
          Frappé (Light)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setFlavor("macchiato")} className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-[#24273a] mr-2" />
          Macchiato (Dark)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setFlavor("mocha")} className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-[#1e1e2e] mr-2" />
          Mocha (Dark)
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="flex items-center">
          <Link href="/catppuccin">
            <Palette className="h-4 w-4 mr-2" />
            Catppuccin Components
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}