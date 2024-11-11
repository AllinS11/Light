'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MapPin } from 'lucide-react';
import { hotels } from '@/lib/hotels-data';

const auroraImages = [
  'https://images.unsplash.com/photo-1483347756197-71ef80e95f73',
  'https://images.unsplash.com/photo-1579033461380-adb47c3eb938',
  'https://images.unsplash.com/photo-1494243762909-b498c7e440a9',
  'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43',
  'https://images.unsplash.com/photo-1531366936337-7c912a4589a7',
  'https://images.unsplash.com/photo-1510798831971-661eb04b3739',
];

export interface FilterState {
  priceRange: [number, number];
  amenities: string[];
  cities: string[];
}

interface HotelListProps {
  filters: FilterState;
}

export default function HotelList({ filters }: HotelListProps) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  // Reset page to 1 when filters change
  useEffect(() => {
    setPage(1);
  }, [filters]);

  const filteredHotels = hotels.filter(hotel => {
    if (filters.cities.length > 0 && !filters.cities.includes(hotel.city)) {
      return false;
    }
    return true;
  });

  const totalPages = Math.ceil(filteredHotels.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const displayedHotels = filteredHotels.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {displayedHotels.map((hotel, index) => (
          <Card key={hotel.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src={auroraImages[index % auroraImages.length]}
                alt={`Aurora view near ${hotel.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-semibold text-lg">{hotel.name}</h3>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>{hotel.city}</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <a 
                href={hotel.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                View Details
              </a>
            </div>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          <Button
            variant="outline"
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Previous
          </Button>
          <span className="flex items-center px-4 text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}