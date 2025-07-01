"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Calendar, 
  Users, 
  User, 
  Bed, 
  Home, 
  Snowflake, 
  Bath, 
  Tv, 
  Wifi,
  ChevronDown 
} from 'lucide-react';

interface RoomType {
  id: string;
  name: string;
  beds: number;
  bedType: string;
  size: number;
  price: number;
  roomsLeft: number;
  amenities: string[];
}

const AvailabilitySection: React.FC = () => {
  const [selectedRooms, setSelectedRooms] = useState<{ [key: string]: number }>({
    twin: 0,
    deluxe1: 0,
    deluxe2: 0,
  });

  const roomTypes: RoomType[] = [
    {
      id: 'twin',
      name: 'Twin Room',
      beds: 2,
      bedType: 'single beds',
      size: 1200,
      price: 282,
      roomsLeft: 10,
      amenities: ['Room', 'Air condition', 'TV', 'Bathroom', 'WIFI']
    },
    {
      id: 'deluxe1',
      name: 'Deluxe Double Room',
      beds: 2,
      bedType: 'single beds',
      size: 1200,
      price: 282,
      roomsLeft: 4,
      amenities: ['Room', 'Air condition', 'TV', 'Bathroom', 'WIFI']
    },
    {
      id: 'deluxe2',
      name: 'Deluxe Double Room',
      beds: 2,
      bedType: 'single beds',
      size: 1200,
      price: 282,
      roomsLeft: 7,
      amenities: ['Room', 'Air condition', 'TV', 'Bathroom', 'WIFI']
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'Room':
        return <Home className="h-4 w-4" />;
      case 'Air condition':
        return <Snowflake className="h-4 w-4" />;
      case 'TV':
        return <Tv className="h-4 w-4" />;
      case 'Bathroom':
        return <Bath className="h-4 w-4" />;
      case 'WIFI':
        return <Wifi className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const handleRoomSelection = (roomId: string, count: number) => {
    setSelectedRooms(prev => ({
      ...prev,
      [roomId]: count
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white">
      {/* Availability Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Availability</h2>
        
        {/* Search Form */}
        <Card className="p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Check-In */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check-In
              </label>
              <div className="flex items-center gap-2 p-3 border rounded-lg bg-gray-50">
                <Calendar className="h-5 w-5 text-[#007DD0]" />
                <span className="text-sm font-medium">Tue,23 June 2024</span>
              </div>
            </div>
            
            {/* Check-Out */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check-Out
              </label>
              <div className="flex items-center gap-2 p-3 border rounded-lg bg-gray-50">
                <Calendar className="h-5 w-5 text-[#007DD0]" />
                <span className="text-sm font-medium">Sat,29 June 2024</span>
              </div>
            </div>
            
            {/* Room & Guest */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Room & Guest
              </label>
              <div className="flex items-center gap-2 p-3 border rounded-lg bg-gray-50">
                <Users className="h-5 w-5 text-[#007DD0]" />
                <span className="text-sm font-medium">2 Adults - 0 Children - 1 Room</span>
              </div>
            </div>
            
            {/* Search Button */}
            <div className="flex items-end">
              <Button className="w-full bg-[#007DD0] hover:bg-blue-700 text-white py-3">
                Search
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Room Types Table */}
      <div className="overflow-x-auto">
        <div className="min-w-full">
          {/* Table Header */}
          <div className="bg-[#007DD0] text-white p-4 rounded-t-lg">
            <div className="grid grid-cols-12 gap-4 font-medium">
              <div className="col-span-3">Room type</div>
              <div className="col-span-2">Number of guests</div>
              <div className="col-span-2">Price for 1 week</div>
              <div className="col-span-2">Your choices</div>
              <div className="col-span-2">Select rooms</div>
              <div className="col-span-1">Your choices</div>
            </div>
          </div>

          {/* Room Rows */}
          <div className="bg-white border border-t-0 rounded-b-lg">
            {roomTypes.map((room, index) => (
              <div key={room.id} className={`grid grid-cols-12 gap-4 p-4 ${index !== roomTypes.length - 1 ? 'border-b' : ''}`}>
                {/* Room Type */}
                <div className="col-span-12 md:col-span-3">
                  <h3 className="font-semibold text-[#007DD0] mb-2">{room.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium">{room.beds} {room.bedType}</span>
                    <Bed className="h-4 w-4 text-gray-500" />
                    <Bed className="h-4 w-4 text-gray-500" />
                  </div>
                  
                  {/* Amenities */}
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    {room.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        {getAmenityIcon(amenity)}
                        <span>{amenity}</span>
                        {amenity === 'Room' && <span className="ml-1">{room.size} sq ft</span>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Number of Guests */}
                <div className="col-span-6 md:col-span-2 flex items-start pt-2">
                  <div className="flex gap-1">
                    <User className="h-5 w-5 text-gray-600" />
                    <User className="h-5 w-5 text-gray-600" />
                  </div>
                </div>

                {/* Price */}
                <div className="col-span-6 md:col-span-2 flex items-start pt-2">
                  <span className="text-xl font-bold">${room.price}</span>
                </div>

                {/* Your Choices */}
                <div className="col-span-12 md:col-span-2">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Brekfast included</p>
                    <p className="text-sm text-red-600 font-medium">
                      Only {room.roomsLeft} rooms left
                    </p>
                  </div>
                </div>

                {/* Select Rooms */}
                <div className="col-span-6 md:col-span-2">
                  <Select
                    value={selectedRooms[room.id]?.toString() || "0"}
                    onValueChange={(value) => handleRoomSelection(room.id, parseInt(value))}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 1, 2, 3, 4].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Reserve Button */}
                <div className="col-span-6 md:col-span-1 flex items-start pt-2">
                  <Button 
                    className="w-full bg-[#007DD0] hover:bg-blue-700 text-white"
                    disabled={selectedRooms[room.id] === 0}
                  >
                    Reserve
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilitySection;