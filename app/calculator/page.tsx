'use client';

import { Suspense } from 'react';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import AuroraCalculator from '@/components/aurora-calculator';
import Loading from '@/components/loading';

export default function CalculatorPage() {
  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Calculator' },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} className="mb-8" />
      
      <h1 className="text-4xl font-bold text-center mb-8">Aurora Borealis Viewing Calculator</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Use our advanced calculator to determine your chances of seeing the Northern Lights based on your location, date, and current solar activity.
      </p>
      <Suspense fallback={<Loading />}>
        <AuroraCalculator />
      </Suspense>
    </main>
  );
}