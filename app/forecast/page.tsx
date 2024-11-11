'use client';

import { Suspense } from 'react';
import { Card } from '@/components/ui/card';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import ForecastMap from '@/components/forecast/map';
import ForecastStats from '@/components/forecast/stats';
import ForecastAlert from '@/components/forecast/alert';
import Loading from '@/components/loading';

export default function ForecastPage() {
  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Forecast' },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} className="mb-8" />
      
      <h1 className="text-4xl font-bold text-center mb-8">Aurora Borealis Forecast</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Real-time aurora activity forecast and predictions for the next 24 hours
      </p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Current Activity</h2>
          <Suspense fallback={<Loading />}>
            <ForecastStats />
          </Suspense>
        </Card>

        <Card className="p-6 md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Visibility Map</h2>
          <Suspense fallback={<Loading />}>
            <ForecastMap />
          </Suspense>
        </Card>

        <Card className="p-6 lg:col-span-3">
          <h2 className="text-2xl font-semibold mb-4">Alerts & Notifications</h2>
          <Suspense fallback={<Loading />}>
            <ForecastAlert />
          </Suspense>
        </Card>
      </div>
    </main>
  );
}