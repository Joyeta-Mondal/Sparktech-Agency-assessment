"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

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
      content: "The Executive Suite at El Aurassi Hotel was an unforgettable experience. The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, immaculately clean, and the modern decor made me feel right at home. The bathroom was luxurious, and the amenities provided were top-notch. Perfect for both work and relaxation!",
      author: "Sofia B.",
      location: "France",
      date: "23.10.2024",
      rating: 5,
      flag: "🇫🇷"
    },
    {
      id: 2,
      title: "Exceptional Stay with Excellent Amenities",
      content: "The Executive Suite provided an exceptional experience. The room was endless equipped with everything you could need. The marble bathroom with its bathtub port luxury. The location is perfect for exploring the city, and the staff truly make you feel welcome and comfortable throughout your stay.",
      author: "Youssef R.",
      location: "Morocco",
      date: "15.10.2024",
      rating: 5,
      flag: "🇲🇦"
    },
    {
      id: 3,
      title: "Outstanding Service and Beautiful Location",
      content: "From the moment we arrived, the service was impeccable. The suite exceeded our expectations with its elegant design and stunning sea views. The hotel's location makes it easy to explore Algiers, and the amenities are world-class. Highly recommended for anyone seeking luxury and comfort.",
      author: "Ahmed K.",
      location: "Algeria",
      date: "08.10.2024",
      rating: 5,
      flag: "🇩🇿"
    }
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

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h2 className="text-2xl font-bold text-gray-900">What Our Guests Say</h2>
        
        <div className="flex items-center gap-4">
          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevReview}
              className="rounded-full w-10 h-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextReview}
              className="rounded-full w-10 h-10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          {/* See All Button */}
          <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0">
            See All →
          </Button>
        </div>
      </div>

      {/* Reviews Carousel */}
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Current Review */}
          <Card className="h-fit">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                "{reviews[currentReview].title}"
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {reviews[currentReview].content}
              </p>
              
              {/* Rating */}
              <div className="mb-4">
                {renderStars(reviews[currentReview].rating)}
              </div>
              
              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">{reviews[currentReview].flag}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      — {reviews[currentReview].author}, {reviews[currentReview].location}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  {reviews[currentReview].date}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Next Review Preview */}
          <Card className="h-fit opacity-60 hidden lg:block">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                "{reviews[(currentReview + 1) % reviews.length].title}"
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 line-clamp-4">
                {reviews[(currentReview + 1) % reviews.length].content}
              </p>
              
              {/* Rating */}
              <div className="mb-4">
                {renderStars(reviews[(currentReview + 1) % reviews.length].rating)}
              </div>
              
              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">{reviews[(currentReview + 1) % reviews.length].flag}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      — {reviews[(currentReview + 1) % reviews.length].author}, {reviews[(currentReview + 1) % reviews.length].location}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  {reviews[(currentReview + 1) % reviews.length].date}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentReview ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatOurGuestsSay;