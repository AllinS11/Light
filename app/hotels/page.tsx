'use client';

import { useState } from 'react';
import { Suspense } from 'react';
import { Card } from '@/components/ui/card';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import HotelList from '@/components/hotels/hotel-list';
import HotelFilters from '@/components/hotels/hotel-filters';
import Loading from '@/components/loading';
import type { FilterState } from '@/components/hotels/hotel-list';

export default function HotelsPage() {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 1000],
    amenities: [],
    cities: [],
  });

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Hotels' },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} className="mb-8" />
      
      <h1 className="text-4xl font-bold text-center mb-8">Aurora Viewing Hotels</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Discover the perfect accommodation for your northern lights adventure
      </p>

      <div className="grid gap-6 lg:grid-cols-4">
        <Card className="p-6 lg:col-span-1">
          <h2 className="text-2xl font-semibold mb-4">Filters</h2>
          <Suspense fallback={<Loading />}>
            <HotelFilters 
              filters={filters}
              onChange={setFilters} 
            />
          </Suspense>
        </Card>

        <div className="lg:col-span-3">
          <Suspense fallback={<Loading />}>
            <HotelList filters={filters} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}