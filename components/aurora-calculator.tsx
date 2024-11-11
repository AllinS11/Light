'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function AuroraCalculator() {
  const [location, setLocation] = useState('');
  const [month, setMonth] = useState('');
  const [score, setScore] = useState<number | null>(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const locations = [
    'Ilulissat',
    'Nuuk',
    'Qaqortoq',
    'Sisimiut',
    'Tasiilaq',
    'Uummannaq',
    'Aasiaat',
    'Qeqertarsuaq',
    'Kulusuk',
    'Narsaq',
    'Kangerlussuaq',
    'Ittoqqortoormiit'
  ];

  const calculateScore = () => {
    const monthIndex = months.findIndex(m => m.toLowerCase() === month.toLowerCase());

    // Base score calculation
    let baseScore = 60;
    
    // Month adjustment (winter months get higher scores)
    const winterBonus = [0, 1, 2, 8, 9, 10, 11].includes(monthIndex) ? 20 : 0;
    
    // Location adjustment (northern locations get higher scores)
    const northernLocations = ['Ilulissat', 'Uummannaq', 'Qeqertarsuaq', 'Aasiaat'];
    const locationBonus = northernLocations.includes(location) ? 15 : 0;
    
    // Calculate final score
    const finalScore = Math.min(100, baseScore + winterBonus + locationBonus);
    
    setScore(finalScore);
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Aurora Viewing Calculator</h2>
      <Card className="max-w-2xl mx-auto p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Location in Greenland</Label>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((loc) => (
                  <SelectItem key={loc} value={loc}>
                    {loc}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Month</Label>
            <Select value={month} onValueChange={setMonth}>
              <SelectTrigger>
                <SelectValue placeholder="Select month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((m) => (
                  <SelectItem key={m.toLowerCase()} value={m.toLowerCase()}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={calculateScore} 
            className="w-full"
            disabled={!location || !month}
          >
            Calculate Viewing Score
          </Button>

          {score !== null && (
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Your Aurora Viewing Score</h3>
              <div className="text-4xl font-bold text-primary">{score}%</div>
              <p className="mt-4 text-muted-foreground">
                {score > 80 ? (
                  "Excellent viewing conditions! This is an ideal time to visit."
                ) : score > 60 ? (
                  "Good viewing conditions. Consider booking your trip during this period."
                ) : (
                  "Consider planning your trip during peak viewing seasons (September to March) for the best experience."
                )}
              </p>
              <Button className="mt-4" variant="outline" asChild>
                <a href="/hotels">View Available Hotels</a>
              </Button>
            </div>
          )}
        </div>
      </Card>
    </section>
  );
}