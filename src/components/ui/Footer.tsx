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
      <div className="container mx-auto mt-8 px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/assets/footerLogo.png"
                alt="DAYF Logo"
                width={32}
                height={32}
                className="rounded"
              />
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-6 max-w-md">
              DAYF makes booking your next stay easy, affordable, and stress-free. 
              With thousands of hotels worldwide, exclusive deals, and secure payment 
              options, we're here to help you find the perfect place to stay every time.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-[#004270] text-white"
                asChild
              >
                <Link href="#" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-[#004270] text-white"
                asChild
              >
                <Link href="#" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-[#004270] text-white"
                asChild
              >
                <Link href="#" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-[#004270] text-white"
                asChild
              >
                <Link href="#" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block text-white hover:text-blue-200 transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="/hotels"
                className="block text-white hover:text-blue-200 transition-colors text-sm"
              >
                Hotels
              </Link>
              <Link
                href="/deals"
                className="block text-white hover:text-blue-200 transition-colors text-sm"
              >
                Deals
              </Link>
              <Link
                href="/about"
                className="block text-white hover:text-blue-200 transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block text-white hover:text-blue-200 transition-colors text-sm"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact & App Section */}
          <div className="space-y-4">
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-blue-200" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-blue-200" />
                <span>support@yourapphome.com</span>
              </div>
            </div>

            {/* Download App */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium">Download Our App</span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="px-3 py-1 h-8 bg-white text-blue-600 hover:bg-blue-50"
                  asChild
                >
                  <Link href="#" className="flex items-center gap-1">
                    <Apple className="w-3 h-3" />
                    <span className="text-xs">iOS</span>
                  </Link>
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="px-3 py-1 h-8 bg-white text-blue-600 hover:bg-blue-50"
                  asChild
                >
                  <Link href="#" className="flex items-center gap-1">
                    <Smartphone className="w-3 h-3" />
                    <span className="text-xs">Android</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-500 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-blue-200">
              <MapPin className="w-4 h-4" />
              <span>123 Travel St, Suite 100, City, Country</span>
            </div>
            <div className="text-sm text-blue-200">
              © 2023. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
