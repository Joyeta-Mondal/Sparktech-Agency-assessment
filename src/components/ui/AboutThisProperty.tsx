
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, UtensilsCrossed, ShoppingBag, Waves, Train } from 'lucide-react';

interface LocationItem {
  name: string;
  distance: string;
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
      icon: <UtensilsCrossed className="h-[16px] w-[16px] text-[#6B7280]" />,
      items: [
        { name: "Blue Cafe", distance: "1.4 km" },
        { name: "Blue Cafe", distance: "1.4 km" },
        { name: "Blue Cafe", distance: "1.4 km" },
      ]
    },
    {
      title: "Shops & Markets",
      icon: <ShoppingBag className="h-[16px] w-[16px] text-[#6B7280]" />,
      items: [
        { name: "Central Mall", distance: "1.4 km" },
        { name: "Central Mall", distance: "1.4 km" },
        { name: "Central Mall", distance: "1.4 km" },
      ]
    },
    {
      title: "Beaches",
      icon: <Waves className="h-[16px] w-[16px] text-[#6B7280]" />,
      items: [
        { name: "Les Dunes Beach", distance: "1.4 km" },
        { name: "Les Dunes Beach", distance: "1.4 km" },
        { name: "Les Dunes Beach", distance: "1.4 km" },
      ]
    },
    {
      title: "Public transport",
      icon: <Train className="h-[16px] w-[16px] text-[#6B7280]" />,
      items: [
        { name: "Train - Riverdale Central Station", distance: "1.4 km" },
        { name: "Metro - Cityline Metro Hub", distance: "1.4 km" },
        { name: "Metro - Cityline Metro Hub", distance: "1.4 km" },
      ]
    }
  ];

  return (
    <div className="w-full bg-white">
      <div className="lg:px-[100px] mx-auto px-4 py-8">
        {/* About Section */}
        <div className="mb-12">
          <h2 className="text-[24px] font-bold text-[#252525] mb-4 leading-tight">
            About this property
          </h2>
          <p className="text-[#6B7280] text-[16px] leading-[1.6] max-w-[800px]">
            The Executive Suite at El Aurassi Hotel in Algiers offers a luxurious and spacious experience tailored for both business and leisure travelers. With its modern design and panoramic views of the Mediterranean Sea, the suite combines comfort, elegance, and functionality.
          </p>
        </div>

        {/* Explore the Area Section */}
        <div>
          <h2 className="text-[24px] font-bold text-[#252525] mb-4 leading-tight">
            Explore the Area
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Categories Section */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {locationData.map((category, i) => (
                  <div key={i} className="space-y-4">
                    {/* Category Header */}
                    <div className="flex items-center gap-2">
                      {category.icon}
                      <h3 className="text-[16px] font-medium text-[#000000]">
                        {category.title}
                      </h3>
                    </div>
                    
                    {/* Category Items */}
                    <div className="space-y-3">
                      {category.items.map((item, j) => (
                        <div key={j} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-[12px] w-[12px] text-[#9CA3AF] flex-shrink-0" />
                            <span className="text-[14px] text-[#374151] leading-[1.4]">
                              {item.name}
                            </span>
                          </div>
                          <span className="text-[14px] text-[#9CA3AF] ml-4">
                            {item.distance}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-[400px]">
                <Card className="h-[320px] w-full overflow-hidden border border-[#E5E7EB] rounded-[8px] shadow-sm">
                  <CardContent className="p-0 h-full relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.0123456789!2d3.0588!3d36.7538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad05b7d296ab%3A0x8b5e9f4c6a8d9f1a!2sEl%20Aurassi%20Hotel!5e0!3m2!1sen!2sus!4v1635123456789!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />

                    {/* Map Overlay Labels */}
                    <div className="absolute top-4 right-4 bg-white rounded-[6px] shadow-lg border border-[#E5E7EB] p-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-[8px] h-[8px] bg-[#EC4899] rounded-full flex-shrink-0"></div>
                        <span className="text-[12px] text-[#374151] font-medium whitespace-nowrap">
                          Hôtel Saint Eugène
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-[8px] h-[8px] bg-[#DC2626] rounded-full flex-shrink-0"></div>
                        <span className="text-[12px] text-[#374151] font-medium whitespace-nowrap">
                          CHU Lamine Debaghine
                        </span>
                      </div>
                    </div>

                    {/* Explore Button */}
                    <div className="absolute bottom-4 right-4">
                      <Badge className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white border-0 px-4 py-2 text-[12px] font-medium rounded-[6px] shadow-md cursor-pointer">
                        Explore the Area
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutThisProperty;