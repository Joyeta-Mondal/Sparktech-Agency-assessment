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
        { name: "Café Le Jardin", distance: "1.2 km", icon: <MapPin className="h-3 w-3" /> },
        { name: "Bistro Del Mar", distance: "2.0 km", icon: <MapPin className="h-3 w-3" /> },
      ]
    },
    {
      title: "Shops & Markets",
      icon: <ShoppingBag className="h-4 w-4" />,
      items: [
        { name: "Central Mall", distance: "1.4 km", icon: <MapPin className="h-3 w-3" /> },
        { name: "City Supermarket", distance: "1.6 km", icon: <MapPin className="h-3 w-3" /> },
        { name: "Sunday Bazaar", distance: "2.2 km", icon: <MapPin className="h-3 w-3" /> },
      ]
    },
    {
      title: "Beaches",
      icon: <Waves className="h-4 w-4" />,
      items: [
        { name: "Les Dunes Beach", distance: "1.4 km", icon: <MapPin className="h-3 w-3" /> },
        { name: "Palm Coast", distance: "1.9 km", icon: <MapPin className="h-3 w-3" /> },
        { name: "Sunrise Bay", distance: "2.5 km", icon: <MapPin className="h-3 w-3" /> },
      ]
    },
    {
      title: "Public transport",
      icon: <Train className="h-4 w-4" />,
      items: [
        { name: "Riverdale Central Station", distance: "1.4 km", icon: <MapPin className="h-3 w-3" /> },
        { name: "Cityline Metro Hub", distance: "1.6 km", icon: <MapPin className="h-3 w-3" /> },
        { name: "North Express", distance: "2.0 km", icon: <MapPin className="h-3 w-3" /> },
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white">
      {/* About Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About this property</h2>
        <p className="text-gray-600 leading-relaxed text-base sm:text-sm">
          The Executive Suite at El Aurassi Hotel in Algiers offers a luxurious and spacious experience tailored for both business and leisure travelers. With its modern design and panoramic views of the Mediterranean Sea, the suite combines comfort, elegance, and functionality.
        </p>
      </div>

      {/* Explore the Area Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore the Area</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Categories */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {locationData.map((category, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2 mb-3">
                    {category.icon}
                    <h3 className="font-semibold text-gray-800">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.items.map((item, j) => (
                      <div
                        key={j}
                        className="flex justify-between items-center text-sm text-gray-600"
                      >
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <span>{item.name}</span>
                        </div>
                        <span className="text-gray-500">{item.distance}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-1">
            <Card className="h-64 sm:h-72 md:h-80 overflow-hidden">
              <CardContent className="p-0 h-full relative">
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

                {/* Overlay Labels */}
                <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-2 space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
                    Hotel Saint Eugène
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
                    CHU Lamine Debaghine
                  </div>
                </div>

                {/* Explore Button */}
                <div className="absolute bottom-4 right-4">
                  <Badge
                    variant="secondary"
                    className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-1 cursor-pointer"
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
