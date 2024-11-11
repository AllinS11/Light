'use client';

import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://source.unsplash.com/100x100/?portrait,woman',
    rating: 5,
    comment: 'Absolutely magical experience! The aurora prediction was spot on, and we saw the most beautiful display of northern lights.',
    location: 'Visited from Canada',
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://source.unsplash.com/100x100/?portrait,man',
    rating: 5,
    comment: 'The calculator helped us pick the perfect time for our trip. We stayed at one of the recommended hotels and it was perfect.',
    location: 'Visited from USA',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    avatar: 'https://source.unsplash.com/100x100/?portrait,girl',
    rating: 5,
    comment: 'Thanks to this website, we were able to plan our dream aurora viewing trip. The forecasts were accurate and helpful.',
    location: 'Visited from UK',
  },
];

export default function Reviews() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Visitors Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={review.avatar} alt={review.name} />
                  <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}