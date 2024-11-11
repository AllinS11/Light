'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Star } from 'lucide-react';
import { hotels } from '@/lib/hotels-data';

const featuredHotelImages = [
  'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494243762909-b498c7e440a9?q=80&w=2070&auto=format&fit=crop',
];

export default function FeaturedHotels() {
  const featuredHotels = hotels.slice(0, 3);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Aurora Viewing Hotels</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredHotels.map((hotel, index) => (
          <Card key={hotel.id} className="overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src={featuredHotelImages[index]}
                alt={`Aurora view near ${hotel.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60" />
              <div className="absolute top-4 right-4 flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-1">{hotel.name}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {hotel.city}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                    Aurora Viewing Deck
                  </span>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                    Photography Service
                  </span>
                </div>
                <Button asChild className="w-full">
                  <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                    View Details
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}