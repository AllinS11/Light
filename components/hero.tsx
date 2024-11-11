'use client';

import { MoonStar, Stars } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-primary/5 to-primary/10 p-8 md:p-12">
      <div className="absolute inset-0 bg-grid-white/5" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="flex items-center gap-2 mb-6">
          <MoonStar className="h-8 w-8 text-primary" />
          <Stars className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Experience the Magic of the Northern Lights
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
          Get real-time Aurora Borealis forecasts and find the perfect spot to witness nature's most spectacular light show.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Calculate Your Viewing Chances
        </Button>
      </motion.div>
    </section>
  );
}