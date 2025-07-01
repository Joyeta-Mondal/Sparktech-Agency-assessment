"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Bed,
  Bath,
  Square,
  Info,
} from "lucide-react";

interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  period: string;
  rating: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  areaUnit: string;
  image: string;
  badge?: string;
}

const YouMayAlsoLike: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const properties: Property[] = [
    {
      id: 1,
      title: "Sofitel Algiers Hamma Garden",
      description:
        "Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.",
      price: 699,
      currency: "USD",
      period: "Per Night",
      rating: 4.5,
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      areaUnit: "sq ft",
      image: "/api/placeholder/400/300",
      badge: "Popular",
    },
    {
      id: 2,
      title: "Luxury Downtown Apartment",
      description:
        "Modern apartment in the heart of the city with stunning skyline views and premium amenities.",
      price: 599,
      currency: "USD",
      period: "Per Night",
      rating: 4.8,
      bedrooms: 1,
      bathrooms: 1,
      area: 800,
      areaUnit: "sq ft",
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      title: "Beachfront Villa Resort",
      description:
        "Exclusive beachfront villa with private pool and direct access to pristine white sand beaches.",
      price: 899,
      currency: "USD",
      period: "Per Night",
      rating: 4.9,
      bedrooms: 3,
      bathrooms: 3,
      area: 2000,
      areaUnit: "sq ft",
      image: "/api/placeholder/400/300",
      badge: "Premium",
    },
    {
      id: 4,
      title: "Mountain Cabin Retreat",
      description:
        "Cozy mountain cabin surrounded by nature, perfect for a peaceful getaway with hiking trails nearby.",
      price: 449,
      currency: "USD",
      period: "Per Night",
      rating: 4.6,
      bedrooms: 2,
      bathrooms: 1,
      area: 950,
      areaUnit: "sq ft",
      image: "/api/placeholder/400/300",
    },
    {
      id: 5,
      title: "Historic City Center Hotel",
      description:
        "Charming boutique hotel in the historic district with traditional architecture and modern comfort.",
      price: 549,
      currency: "USD",
      period: "Per Night",
      rating: 4.4,
      bedrooms: 1,
      bathrooms: 1,
      area: 600,
      areaUnit: "sq ft",
      image: "/api/placeholder/400/300",
    },
    {
      id: 6,
      title: "Riverside Luxury Lodge",
      description:
        "Elegant riverside lodge offering tranquil views and world-class spa facilities for ultimate relaxation.",
      price: 759,
      currency: "USD",
      period: "Per Night",
      rating: 4.7,
      bedrooms: 2,
      bathrooms: 2,
      area: 1400,
      areaUnit: "sq ft",
      image: "/api/placeholder/400/300",
      badge: "Featured",
    },
    {
      id: 7,
      title: "Desert Oasis Resort",
      description:
        "Stunning desert resort with infinity pools and panoramic views of golden dunes and starlit skies.",
      price: 649,
      currency: "USD",
      period: "Per Night",
      rating: 4.5,
      bedrooms: 2,
      bathrooms: 2,
      area: 1100,
      areaUnit: "sq ft",
      image: "/api/placeholder/400/300",
    },
    {
      id: 8,
      title: "Countryside Manor House",
      description:
        "Elegant manor house set in beautiful countryside with gardens, perfect for a romantic escape.",
      price: 799,
      currency: "USD",
      period: "Per Night",
      rating: 4.8,
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      areaUnit: "sq ft",
      image: "/api/placeholder/400/300",
    },
  ];

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1); // Mobile: 1 item + peek
      } else if (width < 1024) {
        setItemsPerView(2); // Tablet: 2 items + peek
      } else {
        setItemsPerView(3); // Desktop: 3 items + 35px peek of 4th
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Split properties into two rows
  const topRowProperties = properties.filter((_, index) => index % 2 === 0);
  const bottomRowProperties = properties.filter((_, index) => index % 2 === 1);

  const maxSlides = Math.max(0, Math.ceil(topRowProperties.length) - itemsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const renderStars = (rating: number) => (
    <div className="flex items-center gap-1">
      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      <span className="text-sm font-medium text-white">{rating}</span>
    </div>
  );

  const renderPropertyCard = (property: Property) => (
    <div
      key={property.id}
      className="flex-shrink-0"
      style={{
        width: itemsPerView === 1 ? 'calc(100% - 35px)' :
               itemsPerView === 2 ? 'calc(50% - 17.5px)' :
               '326px' // Fixed width for desktop to show exactly 3 cards + peek
      }}
    >
      <Card className="h-[455px] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <CardContent className="p-0 h-full flex flex-col">
          {/* Image Container */}
          <div className="relative h-[180px] overflow-hidden rounded-t-lg">
            <Image
              src="/assets/card.png"
              alt={property.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />

            {/* Rating Badge */}
            <div className="absolute top-3 left-3">
              <Badge className="bg-black/70 text-white border-0 backdrop-blur-sm">
                {renderStars(property.rating)}
              </Badge>
            </div>

            {/* Popular Badge */}
            {property.badge && (
              <div className="absolute top-3 right-3">
                <Badge
                  className={`text-white border-0 backdrop-blur-sm ${
                    property.badge === 'Popular' ? 'bg-blue-600' :
                    property.badge === 'Premium' ? 'bg-purple-600' :
                    property.badge === 'Featured' ? 'bg-green-600' :
                    'bg-orange-600'
                  }`}
                >
                  {property.badge}
                </Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              {/* Title */}
              <h3 className="font-bold text-gray-900 text-lg leading-tight line-clamp-2">
                {property.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                {property.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-gray-900">
                  ${property.price}
                </span>
                <span className="text-sm text-gray-600">
                  {property.period}
                </span>
              </div>

              {/* Property Details */}
              <div className="flex items-center gap-4 text-gray-600 flex-wrap">
                <div className="flex items-center gap-1">
                  <Bed className="h-4 w-4" />
                  <span className="text-sm">{property.bedrooms} Bed{property.bedrooms > 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="h-4 w-4" />
                  <span className="text-sm">{property.bathrooms} Bath</span>
                </div>
                <div className="flex items-center gap-1">
                  <Square className="h-4 w-4" />
                  <span className="text-sm">
                    {property.area} {property.areaUnit}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-4">
              <Button className="flex-1 bg-[#007DD0] hover:bg-blue-700 text-white transition-colors duration-200">
                Book Now
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-gray-50 transition-colors duration-200">
                <Info className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderRow = (rowProperties: Property[]) => (
    <div 
      className="flex transition-transform duration-500 ease-out"
      style={{
        transform: `translateX(-${currentSlide * (itemsPerView === 3 ? 326 + 24 : (100 / itemsPerView))}${itemsPerView === 3 ? 'px' : '%'})`,
        gap: itemsPerView === 1 ? '16px' :
             itemsPerView === 2 ? '16px' :
             '24px' // Gap between cards
      }}
    >
      {rowProperties.map(renderPropertyCard)}
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">You may also like</h2>

        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="rounded-full w-10 h-10 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={currentSlide >= maxSlides}
            className="rounded-full w-10 h-10 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Slider Container with 35px Peek Effect */}
      <div className="relative max-w-[1108px]"> {/* Container width: 3 cards (326px) + 2 gaps (24px) + peek (35px) */}
        {/* Top Row */}
        <div className="overflow-hidden mb-8">
          <div className="relative">
            {renderRow(topRowProperties)}
            {/* Peek overlay gradient - only show on desktop */}
            {itemsPerView >= 3 && (
              <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white via-white/30 to-transparent pointer-events-none z-10" />
            )}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="overflow-hidden">
          <div className="relative">
            {renderRow(bottomRowProperties)}
            {/* Peek overlay gradient - only show on desktop */}
            {itemsPerView >= 3 && (
              <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white via-white/30 to-transparent pointer-events-none z-10" />
            )}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxSlides + 1 }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              currentSlide === index 
                ? 'bg-[#007DD0] w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default YouMayAlsoLike;