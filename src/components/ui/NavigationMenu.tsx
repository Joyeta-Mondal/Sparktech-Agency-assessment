
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  ExternalLink,
  Menu,
  X,
  Heart,
  RotateCcw,

} from "lucide-react";

export default function NavigationMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#E9F6FF] border-b border-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo + Desktop Nav */}
          <div className="flex items-center">
            <Link href="/" className="shrink-0 mr-8">
              <Image
                src="/assets/navLogo.png"
                alt="DAYF Booking Logo"
                width={90}
                height={29}
                className="h-7 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/hotels" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Hotels
              </Link>
              <Link href="/house" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                House
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Right: Controls + User */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Currency Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-9 px-3 flex items-center gap-1.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                >
                  <span className="text-lg font-medium">€</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-20">
                <DropdownMenuItem className="justify-center">€ EUR</DropdownMenuItem>
                <DropdownMenuItem className="justify-center">$ USD</DropdownMenuItem>
                <DropdownMenuItem className="justify-center">£ GBP</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-9 px-3 flex items-center gap-1.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                >
                  <Image
                    src="/assets/spain-flag.png"
                    alt="Spanish"
                    width={20}
                    height={15}
                    className="rounded-sm"
                  />
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem>
                  <Image src="/assets/spain-flag.png" alt="" width={16} height={12} className="mr-2 rounded-sm" />
                  Spanish
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Image src="/assets/uk-flag.png" alt="" width={16} height={12} className="mr-2 rounded-sm" />
                  English
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Image src="/assets/france-flag.png" alt="" width={16} height={12} className="mr-2 rounded-sm" />
                  French
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* List Property Button */}
            <Button
              variant="outline"
              size="sm"
              className="h-9 px-4 text-blue-600 border-blue-600 hover:bg-blue-50 hover:border-blue-700 rounded-md font-medium"
            >
              List your property
              <ExternalLink className="w-4 h-4 ml-1.5" />
            </Button>

            {/* Heart Icon */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-9 w-9 p-0 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-md"
            >
              <Heart className="w-5 h-5" />
            </Button>

            {/* Refresh Icon */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-9 w-9 p-0 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
            >
              <RotateCcw className="w-5 h-5" />
            </Button>

            {/* User Section */}
            <div className="flex items-center gap-2 ml-2">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-blue-600 text-white text-sm font-medium">
                  S
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-gray-900">Sunan</span>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
<button
  className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle menu"
>
  {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
</button>
</div>

{/* Mobile Menu */}
<div
  className={`lg:hidden absolute top-16 left-0 w-full bg-white border-t border-gray-200 shadow-md z-50 transform transition-transform duration-300 ${
    menuOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"
  }`}
>
  <div className="py-4 space-y-1 px-4">
    {/* Navigation Links */}
    <nav className="space-y-1">
      {[
        { name: "Home", path: "/" },
        { name: "Hotels", path: "/hotels" },
        { name: "House", path: "/house" },
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
      ].map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
          onClick={() => setMenuOpen(false)}
        >
          {item.name}
        </Link>
      ))}
    </nav>

    {/* Divider */}
    <hr className="my-3 border-gray-200" />

    {/* User Info */}
    <div className="flex items-center gap-3 px-4">
      <Avatar className="w-8 h-8">
        <AvatarFallback className="bg-blue-600 text-white text-sm font-medium">S</AvatarFallback>
      </Avatar>
      <span className="text-sm font-medium text-gray-900">Sunan</span>
    </div>

    {/* List Property Button */}
    <div className="px-4 mt-3">
      <Button
        variant="outline"
        className="w-full text-blue-600 border-blue-600 hover:bg-blue-50"
      >
        List your property
        <ExternalLink className="w-4 h-4 ml-2" />
      </Button>
    </div>

    {/* Currency & Language */}
    <div className="px-4 mt-4 space-y-2">
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>Currency:</span>
        <span className="text-gray-900 font-medium">€ EUR</span>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>Language:</span>
        <div className="flex items-center gap-2 text-gray-900">
          <Image src="/assets/spain-flag.png" alt="Spanish" width={16} height={12} className="rounded-sm" />
          Spanish
        </div>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex gap-2 px-4 mt-4">
      <Button
        variant="outline"
        size="sm"
        className="flex-1 text-gray-600 border-gray-300"
      >
        <Heart className="w-4 h-4 mr-2" />
        Favorites
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="flex-1 text-gray-600 border-gray-300"
      >
        <RotateCcw className="w-4 h-4 mr-2" />
        Recent
      </Button>
    </div>
  </div>
</div>

      </div>
    </header>
  );
}