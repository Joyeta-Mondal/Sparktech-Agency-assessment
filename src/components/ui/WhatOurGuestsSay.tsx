
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Review {
  id: number;
  title: string;
  content: string;
  author: string;
  location: string;
  date: string;
  rating: number;
  flag: string;
}

const WhatOurGuestsSay: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews: Review[] = [
    {
      id: 1,
      title: "Breathtaking Views and Luxury Comfort!",
      content:
        "The Executive Suite at El Aurassi Hotel was an unforgettable experience. The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, immaculately clean, and the modern decor made me feel right at home. The bathroom was luxurious, and the amenities provided were top-notch. Perfect for both work and relaxation!",
      author: "Sofia B.",
      location: "France",
      date: "23.10.2024",
      rating: 5,
      flag: "🇫🇷",
    },
    {
      id: 2,
      title: "Exceptional Stay with Excellent Amenities",
      content:
        "The Executive Suite provided an exceptional experience. The room was equipped with everything you could need. The marble bathroom with its bathtub was pure luxury. The location is perfect for exploring the city, and the staff truly make you feel welcome and comfortable throughout your stay.",
      author: "Youssef R.",
      location: "Morocco",
      date: "15.10.2024",
      rating: 5,
      flag: "🇲🇦",
    },
    {
      id: 3,
      title: "Outstanding Service and Beautiful Location",
      content:
        "From the moment we arrived, the service was impeccable. The suite exceeded our expectations with its elegant design and stunning sea views. The hotel's location makes it easy to explore Algiers, and the amenities are world-class. Highly recommended for anyone seeking luxury and comfort.",
      author: "Ahmed K.",
      location: "Algeria",
      date: "08.10.2024",
      rating: 5,
      flag: "🇩🇿",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setCurrentReview(index);
  };

  const renderStars = (rating: number) => (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="w-full lg:px-[100px] mx-auto px-4 sm:px-6 xl:px-[100px] bg-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h2 className="text-[21px] sm:text-3xl font-bold text-[#252525] leading-tight">
          What Our Guests Say
        </h2>
        <div className="flex items-center gap-3 flex-wrap">
          {/* Navigation */}
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="icon"
              onClick={prevReview}
              className="rounded-full w-10 h-10 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextReview}
              className="rounded-full w-10 h-10 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
              aria-label="Next review"
            >
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </Button>
          </div>
          {/* See All */}
          <Button
            variant="link"
            className="text-blue-600 hover:text-blue-700 p-0 text-sm font-medium transition-colors duration-200"
          >
            See All →
          </Button>
        </div>
      </div>

      {/* Reviews */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Active Review */}
        <Card className="h-fit border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
          <CardContent className="p-6 lg:p-8">
            <h3 className="text-[20px] lg:text-xl font-semibold text-[#252525] mb-4 leading-tight">
              {reviews[currentReview].title}
            </h3>
            <p className="text-[#626262] leading-relaxed mb-6 text-[16px] lg:text-base">
              {reviews[currentReview].content}
            </p>

            <div className="mb-6">{renderStars(reviews[currentReview].rating)}</div>

            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-full flex items-center justify-center border border-yellow-200">
                  <span className="text-lg">{reviews[currentReview].flag}</span>
                </div>
                <p className="font-regular text-[#252525] text-[20px] lg:text-base">
                  — {reviews[currentReview].author}, {reviews[currentReview].location}
                </p>
              </div>
              <span className="text-sm text-gray-500 font-medium"> {" "}
                {reviews[currentReview].date}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Next Review (Preview for lg+ screens only) */}
        <Card className="h-fit opacity-50 hover:opacity-70 transition-opacity duration-300 hidden lg:block border border-gray-200 shadow-sm">
          <CardContent className="p-6 lg:p-8">
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 leading-tight">
              {reviews[(currentReview + 1) % reviews.length].title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base line-clamp-4"> {" "}
              {reviews[(currentReview + 1) % reviews.length].content}
            </p>

            <div className="mb-6">
              {renderStars(reviews[(currentReview + 1) % reviews.length].rating)}
            </div>

            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-full flex items-center justify-center border border-yellow-200">
                  <span className="text-lg">
                    {reviews[(currentReview + 1) % reviews.length].flag}
                  </span>
                </div>
                <p className="font-medium text-gray-900 text-sm lg:text-base">
                  — {reviews[(currentReview + 1) % reviews.length].author},{" "}
                  {reviews[(currentReview + 1) % reviews.length].location}
                </p>
              </div>
              <span className="text-sm text-gray-500 font-medium">
                {reviews[(currentReview + 1) % reviews.length].date}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToReview(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentReview 
                ? "bg-blue-600 scale-110" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile-only navigation hint */}
      <div className="lg:hidden mt-6 text-center">
        <p className="text-xs text-gray-500">
          Swipe or use arrows to navigate reviews
        </p>
      </div>
    </div>
  );
};

export default WhatOurGuestsSay;