
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

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
      roomsLeft: 4,
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
      roomsLeft: 4,
      amenities: ['Room', 'Air condition', 'TV', 'Bathroom', 'WIFI']
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'Room': return <Home className="w-4 h-4 text-gray-600" />;
      case 'Air condition': return <Snowflake className="w-4 h-4 text-gray-600" />;
      case 'TV': return <Tv className="w-4 h-4 text-gray-600" />;
      case 'Bathroom': return <Bath className="w-4 h-4 text-gray-600" />;
      case 'WIFI': return <Wifi className="w-4 h-4 text-gray-600" />;
      default: return null;
    }
  };

  const handleRoomSelection = (roomId: string, count: number) => {
    setSelectedRooms((prev) => ({
      ...prev,
      [roomId]: count,
    }));
  };

  return (
    <section className="px-4 md:px-6 lg:px-[100px] py-8 bg-white">
      <h2 className="text-xl md:text-2xl font-bold text-black mb-6">Availability</h2>

      {/* Search Bar */}
      <Card className="p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Check-in */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Check-In</label>
            <div className="flex items-center gap-2 p-3 rounded-md border bg-gray-50">
              <Calendar className="w-5 h-5 text-[#007DD0]" />
              <span className="text-sm font-medium">Tue, 23 June 2024</span>
            </div>
          </div>

          {/* Check-out */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Check-Out</label>
            <div className="flex items-center gap-2 p-3 rounded-md border bg-gray-50">
              <Calendar className="w-5 h-5 text-[#007DD0]" />
              <span className="text-sm font-medium">Sat, 29 June 2024</span>
            </div>
          </div>

          {/* Guest */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Room & Guest</label>
            <div className="flex items-center gap-2 p-3 rounded-md border bg-gray-50">
              <Users className="w-5 h-5 text-[#007DD0]" />
              <span className="text-sm font-medium">2 Adults – 0 Children – 1 Room</span>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <Button className="w-full bg-[#007DD0] hover:bg-blue-700 text-white">
              Search
            </Button>
          </div>
        </div>
      </Card>

      {/* Room List */}
      <div className="space-y-6">
        {roomTypes.map((room) => (
          <Card key={room.id} className="p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              {/* Room Info */}
              <div className="md:col-span-3 space-y-2">
                <h3 className="text-base font-semibold text-[#007DD0]">{room.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  {room.beds} {room.bedType}
                  <Bed className="w-4 h-4 text-gray-500 ml-2" />
                </div>
                <div className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                  {room.amenities.map((a, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {getAmenityIcon(a)}
                      <span>
                        {a}
                        {a === 'Room' && ` - ${room.size} sqft`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guests */}
              <div className="md:col-span-2 flex items-center gap-1 justify-center">
                <User className="w-5 h-5 text-gray-600" />
                <User className="w-5 h-5 text-gray-600" />
              </div>

              {/* Price */}
              <div className="md:col-span-2 text-center md:text-left">
                <p className="text-lg font-bold text-gray-800">${room.price}</p>
                <p className="text-xs text-gray-500">for 1 week</p>
              </div>

              {/* Breakfast + Left Rooms */}
              <div className="md:col-span-2 text-sm text-gray-700 space-y-1">
                <p className="font-medium">Breakfast included</p>
                <p className="text-red-600">Only {room.roomsLeft} rooms left</p>
              </div>

              {/* Room Select */}
              <div className="md:col-span-2">
                <Select
                  value={selectedRooms[room.id]?.toString() || '0'}
                  onValueChange={(value) => handleRoomSelection(room.id, parseInt(value))}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="0" />
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
              <div className="md:col-span-1">
                <Button
                  className="w-full bg-[#007DD0] hover:bg-blue-700 text-white"
                  disabled={selectedRooms[room.id] === 0}
                >
                  Reserve
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AvailabilitySection;
