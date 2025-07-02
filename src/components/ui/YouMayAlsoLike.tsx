
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  ChevronLeft,
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
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const renderStars = (rating: number) => (
    <div className="flex items-center gap-1">
      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      <span className="text-sm font-medium text-white">{rating}</span>
    </div>
  );

  const renderPropertyCard = (property: Property) => (
    <Card
      key={property.id}
      className="w-[326px] h-[455px] sm:px-2 p-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0"
    >
      <CardContent className="p-0 pb-3 flex flex-col h-full">
        <div className="relative w-full h-[243px] overflow-hidden rounded-t-lg">
          <Image
            src="/assets/card.png"
            alt={property.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-black/70 text-white border-0 backdrop-blur-sm">
              {renderStars(property.rating)}
            </Badge>
          </div>
          {property.badge && (
            <div className="absolute top-3 right-3">
              <Badge
                className={`text-white border-0 backdrop-blur-sm ${
                  property.badge === "Popular"
                    ? "bg-blue-600"
                    : property.badge === "Premium"
                    ? "bg-purple-600"
                    : property.badge === "Featured"
                    ? "bg-green-600"
                    : "bg-orange-600"
                }`}
              >
                {property.badge}
              </Badge>
            </div>
          )}
        </div>

        <div className="w-full h-[141.5px] px-4 py-3 flex-1 flex flex-col justify-between">
          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight line-clamp-2">
              {property.title}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
              {property.description}
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-lg sm:text-xl font-bold text-gray-900">
                ${property.price}
              </span>
              <span className="text-sm text-gray-600">{property.period}</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600 flex-wrap">
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4" />
                <span className="text-sm">
                  {property.bedrooms} Bed{property.bedrooms > 1 ? "s" : ""}
                </span>
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
        </div>

        <div className="w-full h-[46px] flex items-center justify-between px-4">
          <Button className="w-[70%] sm:w-[245px] h-full bg-[#007DD0] hover:bg-blue-700 text-white">
            Book Now
          </Button>
          <Button variant="outline" size="icon" className="h-full w-[46px] hover:bg-gray-50">
            <Info className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const topRow = properties.filter((_, i) => i % 2 === 0);
  const bottomRow = properties.filter((_, i) => i % 2 === 1);

  const scrollForward = () => {
    if (isMobile) {
      const maxScroll = properties.length - 1;
      setStartIndex((prev) => (prev < maxScroll ? prev + 1 : prev));
    } else {
      const maxScroll = Math.max(topRow.length, bottomRow.length) - 3;
      setStartIndex((prev) => (prev < maxScroll ? prev + 1 : prev));
    }
  };

  const scrollBackward = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="w-full px-4 md:px-[100px] py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[21px] sm:text-3xl font-bold text-[#252525]">
          You may also like
        </h2>
        <div className="flex gap-2">
          <Button onClick={scrollBackward} variant="outline">
            <ChevronLeft className="w-4 h-4 mr-2" /> Prev
          </Button>
          <Button onClick={scrollForward} variant="outline">
            Next <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {isMobile ? (
        <div className="flex flex-col gap-6 items-center">
          {properties.slice(startIndex, startIndex + 1).map(renderPropertyCard)}
        </div>
      ) : (
        <div className="flex flex-col gap-10 overflow-hidden">
          {[topRow, bottomRow].map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-[30px] overflow-hidden">
              {row.slice(startIndex, startIndex + 4).map(renderPropertyCard)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YouMayAlsoLike;