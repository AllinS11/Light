'use client';

import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function ForecastAlert() {
  return (
    <Alert>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>High Activity Alert</AlertTitle>
      <AlertDescription>
        Strong aurora activity expected tonight! Kp index forecast to reach 5+ between 22:00 - 02:00 UTC.
        Best viewing conditions in Northern regions.
      </AlertDescription>
    </Alert>
  );
}