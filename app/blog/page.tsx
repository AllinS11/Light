import { Breadcrumb } from "@/components/ui/breadcrumb";
import BlogCard from "@/components/blog/blog-card";

const blogPosts = [
  {
    title: "Best Time to See Aurora Borealis in Greenland",
    description: "A comprehensive guide to planning your Northern Lights viewing experience in Greenland throughout the year.",
    date: "April 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=2070&auto=format&fit=crop",
    slug: "best-time-aurora-borealis-greenland"
  },
  {
    title: "Top 5 Aurora Viewing Locations in Greenland",
    description: "Discover the most spectacular spots to witness the Northern Lights in Greenland, from Ilulissat to Nuuk.",
    date: "April 12, 2024",
    imageUrl: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?q=80&w=2064&auto=format&fit=crop",
    slug: "top-aurora-viewing-locations"
  },
  {
    title: "Photography Tips for Aurora Borealis",
    description: "Expert advice on capturing the magical Northern Lights with both professional cameras and smartphones.",
    date: "April 10, 2024",
    imageUrl: "https://images.unsplash.com/photo-1494243762909-b498c7e440a9?q=80&w=2067&auto=format&fit=crop",
    slug: "aurora-photography-tips"
  },
  {
    title: "Understanding Aurora Forecasts",
    description: "Learn how to interpret Aurora forecasts and maximize your chances of seeing the Northern Lights.",
    date: "April 8, 2024",
    imageUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop",
    slug: "understanding-aurora-forecasts"
  },
  {
    title: "Cultural Significance of Northern Lights",
    description: "Explore the rich mythology and cultural importance of Aurora Borealis in Greenlandic traditions.",
    date: "April 5, 2024",
    imageUrl: "https://images.unsplash.com/photo-1512757776214-26d36777b513?q=80&w=2070&auto=format&fit=crop",
    slug: "cultural-significance-northern-lights"
  },
  {
    title: "Planning Your Aurora Adventure",
    description: "Essential tips for planning a successful Northern Lights viewing trip to Greenland.",
    date: "April 3, 2024",
    imageUrl: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?q=80&w=2070&auto=format&fit=crop",
    slug: "planning-aurora-adventure"
  }
];

export default function BlogPage() {
  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Blog' },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <Breadcrumb items={breadcrumbItems} className="mb-8" />
      
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Aurora Borealis Blog</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Discover expert insights, travel tips, and fascinating stories about the Northern Lights in Greenland.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </main>
  );
}