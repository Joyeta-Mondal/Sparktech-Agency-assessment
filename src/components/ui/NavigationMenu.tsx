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
} from "lucide-react";

export default function NavigationMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-[#E9F6FF] py-4 px-4 sm:px-6 lg:px-[88px]">
      <div className="flex justify-between items-center">
        {/* Left: Logo + Desktop Nav */}
        <div className="flex items-center gap-6">
          <Link href="/" className="shrink-0">
            <Image
              src="/assets/navLogo.png"
              alt="DAYF Booking Logo"
              width={90}
              height={29}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-[18px] text-sm font-medium text-gray-700">
            <Link href="#" className="hover:text-blue-600">Home</Link>
            <Link href="#" className="hover:text-blue-600">Hotels</Link>
            <Link href="#" className="hover:text-blue-600">House</Link>
            <Link href="#" className="hover:text-blue-600">About Us</Link>
            <Link href="#" className="hover:text-blue-600">Contact Us</Link>
          </nav>
        </div>

        {/* Right: Dropdowns & Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Currency Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <span className="text-black text-sm">€</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>EUR</DropdownMenuItem>
              <DropdownMenuItem>USD</DropdownMenuItem>
              <DropdownMenuItem>GBP</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <Image
                  src="/assets/spain-flag.png"
                  alt="Flag"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>French</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="outline"
            size="sm"
            className="text-blue-600 border-blue-600 hover:bg-blue-50"
          >
            List your property
            <ExternalLink className="w-4 h-4 ml-1" />
          </Button>

          <Button variant="ghost" size="icon" className="p-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </Button>

          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-blue-600 text-white text-sm">
              S
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-gray-700">Sunan</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-sm text-gray-700">
          <nav className="flex flex-col gap-2">
            <Link href="#" className="hover:text-blue-600">Home</Link>
            <Link href="#" className="hover:text-blue-600">Hotels</Link>
            <Link href="#" className="hover:text-blue-600">House</Link>
            <Link href="#" className="hover:text-blue-600">About Us</Link>
            <Link href="#" className="hover:text-blue-600">Contact Us</Link>
          </nav>

          <div className="flex flex-col gap-2 pt-4 border-t">
            <Button variant="outline" className="text-blue-600 border-blue-600">
              List your property
            </Button>
            <div className="flex gap-2 items-center text-sm">
              <span>Currency:</span>
              <span className="font-medium">€</span>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <span>Language:</span>
              <span className="font-medium">Spanish</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
