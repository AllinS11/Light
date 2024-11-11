'use client';

import { Activity, Sun, Moon } from 'lucide-react';

export default function ForecastStats() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Activity className="h-5 w-5 text-green-500" />
        <div>
          <p className="text-sm font-medium">Kp Index</p>
          <p className="text-2xl font-bold">4.2</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Sun className="h-5 w-5 text-yellow-500" />
        <div>
          <p className="text-sm font-medium">Solar Wind</p>
          <p className="text-2xl font-bold">420 km/s</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Moon className="h-5 w-5 text-blue-500" />
        <div>
          <p className="text-sm font-medium">Moon Phase</p>
          <p className="text-2xl font-bold">12%</p>
        </div>
      </div>
    </div>
  );
}