
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ExternalLink } from "lucide-react";

export default function NavigationMenu() {
  return (
    <header className="flex justify-between items-center border-b py-4 bg-white" style={{ backgroundColor: "#E9F6FF", paddingLeft: "88px", paddingRight: "88px" }}>
      {/* Logo + Navigation Menu */}
      <div className="flex items-center">
        {/* Logo */}
        <Link href="/" className="mr-[30px]">
          <Image
            src="/assets/navLogo.png"
            alt="DAYF Booking Logo"
            width={90}
            height={29}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center text-sm font-medium text-gray-700">
          <Link href="#" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="#" className="ml-[18px] hover:text-blue-600 transition-colors">
            Hotels
          </Link>
          <Link href="#" className="ml-[18px] hover:text-blue-600 transition-colors">
            House
          </Link>
          <Link href="#" className="ml-[18px] hover:text-blue-600 transition-colors">
            About Us
          </Link>
          <Link href="#" className="ml-[18px] hover:text-blue-600 transition-colors">
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Center Section - Currency & Language Dropdowns */}
      <div className="flex items-center gap-4">
        {/* Currency Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
              <div className="w-5 h-5 rounded-full flex items-center justify-center">
                <span className="text-black text-sm">€</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuItem>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-xs">€</span>
                </div>
                EUR
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-white text-xs">$</span>
                </div>
                USD
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center">
                  <span className="text-white text-xs">£</span>
                </div>
                GBP
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Language Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
              <div className="w-5 h-5 rounded-full overflow-hidden">
                <Image
                  src="/assets/spain-flag.png" // You'll need to add flag images
                  alt="Spanish Flag"
                  width={20}
                  height={20}
                  className="w-full h-full object-cover"
                />
              </div>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuItem>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                Spanish
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                English
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-black"></div>
                French
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-4">
        <Button 
          variant="outline" 
          size="sm"
          className="flex items-center gap-2 text-blue-600 border-blue-600 hover:bg-blue-50"
        >
          List your property
          <ExternalLink className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="p-2"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </Button>
        <Avatar className="w-8 h-8">
          <AvatarFallback className="bg-blue-600 text-white text-sm">
            S
          </AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium text-gray-700">Sunan</span>
      </div>
    </header>
  );
}