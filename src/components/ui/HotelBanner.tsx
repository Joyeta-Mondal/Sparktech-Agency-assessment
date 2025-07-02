import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

import { Card, CardContent } from '@/components/ui/card';
import {
  Bookmark,
  Users,
  ArrowRight,
  MessageCircle,
  Wifi,

  Waves,
  Snowflake,
  Dumbbell,
  X
} from 'lucide-react';

const HotelBanner: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-[100px] py-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
              El Aurassi Hotel
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Spacious, modern rooms with panoramic views of the Mediterranean Sea.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="lg" 
              className="h-12 w-12 rounded-full bg-blue-50 hover:bg-blue-100 p-0"
            >
              <Bookmark className="h-6 w-6 text-[#007DD0]" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="h-12 w-12 rounded-full bg-blue-50 hover:bg-blue-100 p-0"
            >
              <Users className="h-5 w-5 text-[#007DD0]" />
            </Button>
            <Button className="bg-[#007DD0] hover:bg-blue-700 text-white px-8 py-3 rounded-full text-base font-medium h-12">
              Reserve <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Image Gallery Grid */}
        <div className="mb-8">
          <div className="grid grid-cols-12 gap-2 h-[400px] lg:h-[500px]">
            {/* Main large image - takes up 8 columns and 2 rows */}
            <div className="col-span-12 lg:col-span-8 row-span-2 rounded-2xl overflow-hidden">
              <Image
                src="/assets/banner1.png"
                alt="Hotel room with panoramic view"
                width={800}
                height={500}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            {/* Top right image */}
            <div className="hidden lg:block col-span-4 rounded-2xl overflow-hidden">
              <Image
                src="/assets/banner2.png"
                alt="Hotel exterior view"
                width={400}
                height={245}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Bottom right image */}
            <div className="hidden lg:block col-span-4 rounded-2xl overflow-hidden">
              <Image
                src="/assets/banner3.png"
                alt="Pool area"
                width={400}
                height={245}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Bottom row of smaller images */}
          <div className="hidden lg:grid grid-cols-6 gap-2 mt-2">
            {['banner4', 'banner5', 'banner6', 'banner7', 'banner8', 'banner9'].map((img, i) => (
              <div key={img} className="rounded-2xl overflow-hidden aspect-square">
                <Image
                  src={`/assets/${img}.png`}
                  alt={`Hotel detail ${i + 1}`}
                  width={180}
                  height={180}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Mobile additional images */}
          <div className="lg:hidden grid grid-cols-2 gap-2 mt-2">
            <div className="rounded-2xl overflow-hidden aspect-video">
              <Image
                src="/assets/banner2.png"
                alt="Hotel exterior view"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video">
              <Image
                src="/assets/banner3.png"
                alt="Pool area"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Left Content */}
          <div className="flex-1">
            {/* Navigation Tabs */}
            <div className="flex flex-wrap items-center justify-between mb-8 border-b border-gray-200">
              <div className="flex gap-8">
                <button className="pb-4 text-[#007DD0] border-b-2 border-[#007DD0] font-medium text-base">
                  Over View
                </button>
                <button className="pb-4 text-gray-600 hover:text-gray-900 font-medium text-base">
                  Features
                </button>
                <button className="pb-4 text-gray-600 hover:text-gray-900 font-medium text-base">
                  Reviews
                </button>
              </div>
              <Button 
                className="bg-[#007DD0] hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Message
              </Button>
            </div>

            {/* Property Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-base">Property Type</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Resorts</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-base">Property Type</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                  <span className="text-gray-700 font-medium">12000 sqft</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-6 text-base">Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Wifi className="h-4 w-4 text-gray-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Wifi</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <X className="h-4 w-4 text-gray-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Dining</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Waves className="h-4 w-4 text-gray-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Swimming Pool</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Snowflake className="h-4 w-4 text-gray-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Air Conditioning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Dumbbell className="h-4 w-4 text-gray-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Gym</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Booking Card */}
          <div className="w-full xl:w-80 xl:shrink-0">
            <Card className="border border-gray-200 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">1 week, 2 adults, 1 child</p>
                  <p className="text-3xl font-bold text-gray-900">USD $6,112</p>
                </div>

                <Button className="w-full bg-[#007DD0] hover:bg-blue-700 text-white py-4 rounded-2xl text-base font-medium">
                  Reserve
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBanner;