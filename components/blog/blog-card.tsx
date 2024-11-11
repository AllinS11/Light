'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  slug: string;
}

export default function BlogCard({ title, description, date, imageUrl, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <CardTitle className="line-clamp-2">{title}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}