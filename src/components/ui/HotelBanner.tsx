import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Bookmark,
  Users,
  ArrowRight,
  MessageCircle,
  Wifi,
  UtensilsCrossed,
  Waves,
  Snowflake,
  Dumbbell
} from 'lucide-react';

const HotelBanner: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2">
            El Aurassi Hotel
          </h1>
          <p className="text-gray-600 text-base lg:text-lg max-w-md">
            Spacious, modern rooms with panoramic views of the Mediterranean Sea.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full bg-blue-50 hover:bg-blue-100">
            <Bookmark className="h-5 w-5 text-[#007DD0]" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-blue-50 hover:bg-blue-100">
            <Users className="h-5 w-5 text-[#007DD0]" />
          </Button>
          <Button className="bg-[#007DD0] hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm">
            Reserve <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Image Gallery Grid */}
      <div className="mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-2">
          {/* Main large image */}
          <div className="sm:col-span-4 sm:row-span-2 rounded-lg overflow-hidden">
            <Image
              src="/assets/banner1.png"
              alt="Hotel room with panoramic view"
              width={800}
              height={600}
              className="object-cover w-full h-full rounded-lg"
              priority
            />
          </div>

          {/* Right-side top and bottom images */}
          <div className="sm:col-span-2 sm:row-span-1 rounded-lg overflow-hidden">
            <Image
              src="/assets/banner2.png"
              alt="Hotel exterior"
              width={400}
              height={295}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          <div className="sm:col-span-2 sm:row-span-1 rounded-lg overflow-hidden">
            <Image
              src="/assets/banner3.png"
              alt="Pool area"
              width={400}
              height={295}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          {/* Third row images */}
          {['banner4', 'banner5', 'banner6', 'banner7', 'banner8', 'banner9'].map((img, i) => (
            <div key={img} className="rounded-lg overflow-hidden sm:col-span-1">
              <Image
                src={`/assets/${img}.png`}
                alt={`Hotel image ${i + 4}`}
                width={200}
                height={200}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Tabs and Details */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side */}
        <div className="flex-1">
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 items-center mb-6 border-b pb-2">
            <button className="pb-2 text-[#007DD0] border-b-2 border-[#007DD0] font-medium">
              Over View
            </button>
            <button className="pb-2 text-gray-600 hover:text-gray-900">
              Features
            </button>
            <button className="pb-2 text-gray-600 hover:text-gray-900">
              Reviews
            </button>
            <div className="ml-auto">
              <Button variant="outline" size="sm" className="bg-[#007DD0] text-white">
                <MessageCircle className="h-4 w-4 mr-1" />
                Message
              </Button>
            </div>
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Property Type</h3>
              <Badge variant="secondary" className="bg-gray-100">Resorts</Badge>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Area</h3>
              <Badge variant="secondary" className="bg-gray-100">12000 sqft</Badge>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Features</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: Wifi, label: 'Wifi' },
                { icon: UtensilsCrossed, label: 'Dining' },
                { icon: Waves, label: 'Swimming Pool' },
                { icon: Snowflake, label: 'Air Conditioning' },
                { icon: Dumbbell, label: 'Gym' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-gray-700">
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Booking Card */}
        <div className="w-full lg:w-80">
          <Card className="p-6 w-full">
            <CardContent className="p-0">
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-1">1 week, 2 adults, 1 child</p>
                <p className="text-2xl font-bold text-gray-900">USD $6,112</p>
              </div>

              <Button className="w-full bg-[#007DD0] hover:bg-blue-700 text-white py-3 rounded-lg">
                Reserve
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HotelBanner;
