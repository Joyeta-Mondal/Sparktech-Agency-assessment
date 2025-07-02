
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Twitter,
  Facebook,
  Instagram,
  Github,
  Phone,
  Mail,
  MapPin,
  Download,
  Apple,
  Smartphone,
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#00548C] text-white">
      {/* Main Footer Content */}
      <div className="py-8 md:py-[60px]">
        <div className="mx-auto px-4 md:px-8 lg:px-[160px]">
          {/* Two Main Sections with responsive layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[80px]">
            
            {/* Left Section: Brand + Description + Social */}
            <div className="lg:flex-1">
              <div className="mb-6">
                <Image
                  src="/assets/footerLogo.png"
                  alt="DAYF Logo"
                  width={100}
                  height={32}
                  className="rounded"
                />
              </div>
              <p className="text-white text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                DAYF makes booking your next stay easy, affordable, and stress-free. 
                With thousands of hotels worldwide, exclusive deals, and secure payment 
                options, we are here to help you find the perfect place to stay every time.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3 mb-6">
                {[Twitter, Facebook, Instagram, Github].map((Icon, i) => (
                  <Button
                    key={i}
                    variant="ghost"
                    size="sm"
                    className="p-2 hover:bg-[#004270] text-white"
                    asChild
                  >
                    <Link href="#" aria-label={Icon.name}>
                      <Icon className="w-4 h-4" />
                    </Link>
                  </Button>
                ))}
              </div>

              {/* Address */}
              <div className="flex items-center gap-2 text-sm md:text-base text-white">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>123 Travel St, Suite 100, City, Country</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px bg-white opacity-30"></div>

            {/* Right Section: Navigation + Contact + App Download */}
            <div className="lg:flex-1">
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-[78px] lg:mt-14">
              
                {/* Navigation Links */}
                <div>
                  <nav className="space-y-3 md:space-y-4">
                    {['Home', 'Hotels', 'Deals', 'About Us', 'Contact Us'].map((item) => (
                      <Link
                        key={item}
                        href={`/${item.toLowerCase().replace(/\s/g, '')}`}
                        className="block text-white hover:text-blue-200 transition-colors text-base md:text-base"
                      >
                        {item}
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Contact Info + App Download */}
                <div className="space-y-6">
                  {/* Contact Info */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[15px] md:text-base">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2 text-[15px] md:text-base">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span>support@yourapphome.com</span>
                    </div>
                  </div>

                  {/* App Download */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Download className="w-4 h-4" />
                      <span className="text-[15px] md:text-base font-medium">Download Our App</span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="px-3 py-1 h-8 bg-white text-blue-600 hover:bg-blue-50 rounded-md"
                        asChild
                      >
                        <Link href="#" className="flex items-center gap-1">
                          <Apple className="w-3 h-3" />
                          <span className="text-[15px] md:text-base">iOS</span>
                        </Link>
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="px-3 py-1 h-8 bg-white text-blue-600 hover:bg-blue-50 rounded-md"
                        asChild
                      >
                        <Link href="#" className="flex items-center gap-1">
                          <Smartphone className="w-3 h-3" />
                          <span className="text-[15px] md:text-base">Android</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="pb-2 px-4 md:px-8 lg:px-[160px]">
        <div className="flex justify-center lg:justify-end">
          <div className="text-xs md:text-sm text-white">
            © {new Date().getFullYear()}. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;