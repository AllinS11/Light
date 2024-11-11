import { Suspense } from 'react';
import Hero from '@/components/hero';
import AuroraCalculator from '@/components/aurora-calculator';
import FeaturedHotels from '@/components/featured-hotels';
import Reviews from '@/components/reviews';
import Loading from '@/components/loading';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      <Hero />
      <Suspense fallback={<Loading />}>
        <AuroraCalculator />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <FeaturedHotels />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Reviews />
      </Suspense>
    </div>
  );
}