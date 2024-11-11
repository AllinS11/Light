'use client';

import { Card } from '@/components/ui/card';

export default function ForecastMap() {
  return (
    <Card className="aspect-video relative overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-purple-500/20 animate-pulse" />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Interactive aurora map loading...</p>
      </div>
    </Card>
  );
}