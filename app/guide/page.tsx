'use client';

import { Card } from '@/components/ui/card';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { MoonStar, Sun, Cloud, ThermometerSun, MapPin, Calendar } from 'lucide-react';

export default function GuidePage() {
  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Viewing Guide' },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <Breadcrumb items={breadcrumbItems} className="mb-8" />
      
      <h1 className="text-4xl font-bold text-center mb-8">Aurora Borealis Viewing Guide</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold">Best Time to Visit</h2>
          </div>
          <p className="text-muted-foreground">
            The prime viewing season in Greenland is from September to March, when the nights are longest. 
            December and January offer nearly 24-hour darkness, maximizing viewing opportunities.
          </p>
        </Card>

        {/* Rest of the cards remain the same */}
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ready to plan your aurora viewing adventure? Use our Aurora Calculator to find the best times 
          and locations for your trip, then browse our curated selection of aurora-viewing hotels.
        </p>
      </div>
    </main>
  );
}