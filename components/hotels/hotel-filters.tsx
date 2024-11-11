'use client';

import { useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import type { FilterState } from './hotel-list';
import { hotels } from '@/lib/hotels-data';

interface HotelFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

export default function HotelFilters({ filters, onChange }: HotelFiltersProps) {
  const amenities = ['Aurora Viewing Deck', 'Photography Service', 'Northern Lights Tour', 'Hot Tub'];
  
  // Get unique cities from hotels data
  const cities = Array.from(new Set(hotels.map(hotel => hotel.city))).sort();

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    const updatedAmenities = checked 
      ? [...filters.amenities, amenity]
      : filters.amenities.filter(a => a !== amenity);
    
    onChange({
      ...filters,
      amenities: updatedAmenities
    });
  };

  const handleCityChange = (city: string, checked: boolean) => {
    const updatedCities = checked
      ? [...filters.cities, city]
      : filters.cities.filter(c => c !== city);
    
    onChange({
      ...filters,
      cities: updatedCities
    });
  };

  const handlePriceChange = (value: number[]) => {
    onChange({
      ...filters,
      priceRange: [value[0], value[1]]
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-medium">Price Range</h3>
        <Slider
          value={[filters.priceRange[0], filters.priceRange[1]]}
          max={1000}
          step={50}
          onValueChange={handlePriceChange}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}+</span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Amenities</h3>
        <div className="space-y-2">
          {amenities.map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox 
                id={amenity}
                checked={filters.amenities.includes(amenity)}
                onCheckedChange={(checked) => handleAmenityChange(amenity, checked as boolean)}
              />
              <Label htmlFor={amenity}>{amenity}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Cities</h3>
        <div className="space-y-2">
          {cities.map((city) => (
            <div key={city} className="flex items-center space-x-2">
              <Checkbox 
                id={city}
                checked={filters.cities.includes(city)}
                onCheckedChange={(checked) => handleCityChange(city, checked as boolean)}
              />
              <Label htmlFor={city}>{city}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}