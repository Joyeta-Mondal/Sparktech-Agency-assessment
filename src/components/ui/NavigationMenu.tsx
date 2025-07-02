"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
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
  const [selectedCurrency, setSelectedCurrency] = useState("€ EUR");
  const [selectedLanguage, setSelectedLanguage] = useState("Spanish");
  const [isScrolled, setIsScrolled] = useState(false);

  const languageFlagMap: Record<string, string> = {
    Spanish: "/assets/spain-flag.png",
    English: "/assets/uk-flag.jpg",
    French: "/assets/france-flag.jpg",
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#E9F6FF]/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm' 
        : 'bg-[#E9F6FF] border-b border-gray-200'
    }`}>
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
              {["Home", "Hotels", "House", "About Us", "Contact Us"].map((label) => (
                <Link
                  key={label}
                  href={`/${label.toLowerCase().replace(" ", "")}`}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Controls */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Currency Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 px-3 flex items-center gap-1.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                >
                  <span className="text-lg font-medium">{selectedCurrency.split(" ")[0]}</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-20">
                {["€ EUR", "$ USD", "£ GBP"].map((cur) => (
                  <DropdownMenuItem key={cur} className="justify-center" onClick={() => setSelectedCurrency(cur)}>
                    {cur}
                  </DropdownMenuItem>
                ))}
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
                    src={languageFlagMap[selectedLanguage]}
                    alt={selectedLanguage}
                    width={20}
                    height={15}
                    className="rounded-lg"
                  />
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                {Object.entries(languageFlagMap).map(([lang, flag]) => (
                  <DropdownMenuItem key={lang} onClick={() => setSelectedLanguage(lang)}>
                    <Image src={flag} alt={lang} width={16} height={12} className="mr-2 rounded-sm" />
                    {lang}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* List Property Button */}
            <Button
              variant="outline"
              size="sm"
              className="h-9 px-4 text-[#007DD0] border-[#007DD0] hover:bg-blue-50 hover:border-blue-700 rounded-md font-medium"
            >
              List your property
              <ExternalLink className="w-4 h-4 ml-1.5" />
            </Button>

            {/* Icons */}
            <Button variant="ghost" size="sm" className="h-9 w-9 p-0 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-md">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="h-9 w-9 p-0 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md">
              <RotateCcw className="w-5 h-5" />
            </Button>

            {/* User */}
            <div className="flex items-center gap-2 ml-2">
              <Avatar className="w-8 h-8">
                <AvatarFallback className=" text-gray-500 text-sm font-medium">S</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-gray-900">Sunan</span>
            </div>
          </div>

          {/* Mobile Toggle */}
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
          className={`lg:hidden absolute top-16 left-0 w-full ${
            isScrolled 
              ? 'bg-white/90 backdrop-blur-md border-t border-gray-200/50' 
              : 'bg-white border-t border-gray-200'
          } shadow-md z-50 transform transition-all duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"
          }`}
        >
          <div className="py-4 space-y-1 px-4">
            {/* Navigation */}
            <nav className="space-y-1">
              {["Home", "Hotels", "House", "About Us", "Contact Us"].map((label) => (
                <Link
                  key={label}
                  href={`/${label.toLowerCase().replace(" ", "")}`}
                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <hr className="my-3 border-gray-200" />

            {/* User Info */}
            <div className="flex items-center gap-3 px-4">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-blue-600 text-white text-sm font-medium">S</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-gray-900">Sunan</span>
            </div>

            {/* List Button */}
            <div className="px-4 mt-3">
              <Button variant="outline" className="w-full text-blue-600 border-blue-600 hover:bg-blue-50">
                List your property
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Currency & Language */}
            <div className="px-4 mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Currency:</span>
                <span className="text-gray-900 font-medium">{selectedCurrency}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Language:</span>
                <div className="flex items-center gap-2 text-gray-900">
                  <Image src={languageFlagMap[selectedLanguage]} alt={selectedLanguage} width={16} height={12} className="rounded-sm" />
                  {selectedLanguage}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 px-4 mt-4">
              <Button variant="outline" size="sm" className="flex-1 text-gray-600 border-gray-300">
                <Heart className="w-4 h-4 mr-2" />
                Favorites
              </Button>
              <Button variant="outline" size="sm" className="flex-1 text-gray-600 border-gray-300">
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
