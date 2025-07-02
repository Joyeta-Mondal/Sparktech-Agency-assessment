// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import {
//   Twitter,
//   Facebook,
//   Instagram,
//   Github,
//   Phone,
//   Mail,
//   MapPin,
//   Download,
//   Apple,
//   Smartphone,
// } from 'lucide-react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-[#00548C] text-white">
//       <div className="container mx-auto px-4 py-10">
//         {/* Grid Sections */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Brand + Social */}
//           <div className="lg:col-span-2  text-center sm:text-left">
//             <div className="flex justify-center sm:justify-start items-center gap-2 mb-4">
//               <Image
//                 src="/assets/footerLogo.png"
//                 alt="DAYF Logo"
//                 width={90}
//                 height={29}
//                 className="rounded"
//               />
//             </div>
//             <p className="text-blue-100 text-sm leading-relaxed mb-6 max-w-md mx-auto sm:mx-0">
//               DAYF makes booking your next stay easy, affordable, and stress-free. 
//               With thousands of hotels worldwide, exclusive deals, and secure payment 
//               options, we're here to help you find the perfect place to stay every time.
//             </p>

//             {/* Social Icons */}
//             <div className="flex justify-center sm:justify-start gap-3">
//               {[Twitter, Facebook, Instagram, Github].map((Icon, i) => (
//                 <Button
//                   key={i}
//                   variant="ghost"
//                   size="sm"
//                   className="p-2 hover:bg-[#004270] text-white"
//                   asChild
//                 >
//                   <Link href="#" aria-label={Icon.name}>
//                     <Icon className="w-4 h-4" />
//                   </Link>
//                 </Button>
//               ))}
//             </div>
//           </div>

//           {/* Nav Links */}
//           <div className="text-center sm:text-left">
//             <nav className="space-y-3">
//               {['Home', 'Hotels', 'Deals', 'About Us', 'Contact Us'].map((item) => (
//                 <Link
//                   key={item}
//                   href={`/${item.toLowerCase().replace(/\s/g, '')}`}
//                   className="block text-white hover:text-blue-200 transition-colors text-sm"
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* Contact + App */}
//           <div className="space-y-6 text-center sm:text-left">
//             {/* Contact Info */}
//             <div className="space-y-3">
//               <div className="flex justify-center sm:justify-start items-center gap-2 text-sm">
//                 <Phone className="w-4 h-4 text-blue-200" />
//                 <span>+1 (555) 123-4567</span>
//               </div>
//               <div className="flex justify-center sm:justify-start items-center gap-2 text-sm">
//                 <Mail className="w-4 h-4 text-blue-200" />
//                 <span>support@yourapphome.com</span>
//               </div>
//             </div>

//             {/* App Download */}
//             <div>
//               <div className="flex justify-center sm:justify-start items-center gap-2 mb-3">
//                 <Download className="w-4 h-4" />
//                 <span className="text-sm font-medium">Download Our App</span>
//               </div>
//               <div className="flex justify-center sm:justify-start gap-2">
//                 <Button
//                   variant="secondary"
//                   size="sm"
//                   className="px-3 py-1 h-8 bg-white text-blue-600 hover:bg-blue-50"
//                   asChild
//                 >
//                   <Link href="#" className="flex items-center gap-1">
//                     <Apple className="w-3 h-3" />
//                     <span className="text-xs">iOS</span>
//                   </Link>
//                 </Button>
//                 <Button
//                   variant="secondary"
//                   size="sm"
//                   className="px-3 py-1 h-8 bg-white text-blue-600 hover:bg-blue-50"
//                   asChild
//                 >
//                   <Link href="#" className="flex items-center gap-1">
//                     <Smartphone className="w-3 h-3" />
//                     <span className="text-xs">Android</span>
//                   </Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="border-t border-blue-500 mt-10 pt-6">
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
//             <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-blue-200">
//               <MapPin className="w-4 h-4" />
//               <span>123 Travel St, Suite 100, City, Country</span>
//             </div>
//             <div className="text-sm text-blue-200">
//               © {new Date().getFullYear()}. All Rights Reserved
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


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
      <div className="py-[60px]">
        <div className="mx-auto" style={{ paddingLeft: '160px', paddingRight: '160px' }}>
          {/* Two Main Sections with 80px gap */}
          <div className="flex justify-between" style={{ gap: '80px' }}>
            
            {/* Left Section: Brand + Description + Social */}
            <div className="flex-1">
              <div className="mb-6">
                <Image
                  src="/assets/footerLogo.png"
                  alt="DAYF Logo"
                  width={90}
                  height={29}
                  className="rounded"
                />
              </div>
              <p className="text-white text-sm leading-relaxed mb-6 max-w-md">
                DAYF makes booking your next stay easy, affordable, and stress-free. 
                With thousands of hotels worldwide, exclusive deals, and secure payment 
                options, we're here to help you find the perfect place to stay every time.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
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
              <div className="flex items-center gap-2 text-sm text-white mt-6">
                <MapPin className="w-4 h-4" />
                <span>123 Travel St, Suite 100, City, Country</span>
              </div>
            </div>

            {/* Right Section: Navigation + Contact + App Download */}
            <div className="flex gap-16">
              
              {/* Navigation Links */}
              <div>
                <nav className="space-y-4">
                  {['Home', 'Hotels', 'Deals', 'About Us', 'Contact Us'].map((item) => (
                    <Link
                      key={item}
                      href={`/${item.toLowerCase().replace(/\s/g, '')}`}
                      className="block text-white hover:text-blue-200 transition-colors text-sm"
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
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4" />
                    <span>support@yourapphome.com</span>
                  </div>
                </div>

                {/* App Download */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Download className="w-4 h-4" />
                    <span className="text-sm font-medium">Download Our App</span>
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
                        <span className="text-xs">iOS</span>
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
                        <span className="text-xs">Android</span>
                      </Link>
                    </Button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

{/* bottom copyright */}
      <div className="pt-4" style={{ paddingLeft: '160px', paddingRight: '160px' }}>
<div className="flex justify-end">
<div className="text-sm text-white">
              © {new Date().getFullYear()}. All Rights Reserved
            </div></div></div>

    </footer>
  );
};

export default Footer;