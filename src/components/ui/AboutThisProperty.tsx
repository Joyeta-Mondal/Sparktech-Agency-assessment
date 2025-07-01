import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, UtensilsCrossed, ShoppingBag, Waves, Train } from 'lucide-react';

interface LocationItem {
  name: string;
  distance: string;
  icon: React.ReactNode;
}

interface LocationCategory {
  title: string;
  icon: React.ReactNode;
  items: LocationItem[];
}

const AboutThisProperty: React.FC = () => {
  const locationData: LocationCategory[] = [
    {
      title: "Restaurants & cafes",
      icon: <UtensilsCrossed className="h-4 w-4" />,
      items: [
        { name: "Blue Cafe", distance: "1.4 km", icon: <MapPin className="h-3 w-3" /> },
        { name: "Blue Cafe", distance: "1.4 km", icon: <MapPin className="h-3 w-3" /> },
        { name: "Blue Cafe", distance: "1.4 km", icon: <MapPin className="h-3 w-3" /> },
      ]
    },
    {
      title: "Shops & Markets",
      icon: <ShoppingBag className="h-4 w-4" />,
      items: [
        { name: "Central Mall", distance: "1.4 km", icon: <MapPin className="h-3 w-3" /> },
        { name: "Central Mall", distance: "1.4 km", icon: <MapPin className="h-3 w-3" /> },
        { name: "Central Mall", distance: "1.4 km", icon: <MapPin className="h-3 w-3" /> },
      ]
    },
    {
      title: "Beaches",
      icon: <Waves className="h-4 w-4" />,
      items: [
        { name: "Les Dunes Beach", distance: "1.4 km", icon: <MapPin className="h-3 w-3" /> },
        { name: "Les Dunes Beach", distance: "1.4 km", icon: <MapPin className="h-3 w-3" /> },
        { name: "Les Dunes Beach", distance: "1.4 km", icon: <MapPin className="h-3 w-3" /> },
      ]
    },
    {
      title: "Public transport",
      icon: <Train className="h-4 w-4" />,
      items: [
        { name: "Train - Riverdale Central Station", distance: "1.4 km", icon: <MapPin className="h-3 w-3" /> },
        { name: "Metro - Cityline Metro Hub", distance: "1.4 km", icon: <MapPin className="h-3 w-3" /> },
        { name: "Metro - Cityline Metro Hub", distance: "1.4 km", icon: <MapPin className="h-3 w-3" /> },
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white">
      {/* About This Property Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About this property</h2>
        <p className="text-gray-600 leading-relaxed">
          The Executive Suite at El Aurassi Hotel in Algiers offers a luxurious and spacious experience tailored for both business and leisure travelers. With its modern design and panoramic views of the Mediterranean Sea, the suite combines comfort, elegance, and functionality.
        </p>
      </div>

      {/* Explore the Area Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore the Area</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left side - Location Categories */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {locationData.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center gap-2 mb-4">
                    {category.icon}
                    <h3 className="font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <span className="text-gray-600 text-sm">{item.name}</span>
                        </div>
                        <span className="text-gray-500 text-sm">{item.distance}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Google Map */}
          <div className="lg:col-span-1">
            <Card className="h-64 lg:h-80 overflow-hidden">
              <CardContent className="p-0 h-full relative">
                {/* Google Map Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.0123456789!2d3.0588!3d36.7538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad05b7d296ab%3A0x8b5e9f4c6a8d9f1a!2sEl%20Aurassi%20Hotel!5e0!3m2!1sen!2sus!4v1635123456789!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
                
                {/* Map Overlay with Hotel Markers */}
                <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-xs font-medium">Hotel Saint Eugène</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-xs font-medium">CHU Lamine Debaghine</span>
                  </div>
                </div>

                {/* Explore the Area Button */}
                <div className="absolute bottom-4 right-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer px-3 py-1"
                  >
                    Explore the Area
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutThisProperty;