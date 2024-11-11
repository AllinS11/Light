import { notFound } from "next/navigation";
import Image from "next/image";
import { marked } from 'marked';
import { Breadcrumb } from "@/components/ui/breadcrumb";

const blogPosts = {
  "best-time-aurora-borealis-greenland": {
    title: "Best Time to See Aurora Borealis in Greenland",
    date: "April 15, 2024",
    content: `The Aurora Borealis, or Northern Lights, is one of nature's most spectacular displays, and Greenland offers some of the best viewing opportunities in the world. The key to successful Aurora viewing is understanding when to visit.

## Prime Viewing Season

The best time to see the Northern Lights in Greenland is during the winter months, from September to early April. This period offers:

- Longer nights
- Clearer skies
- Optimal solar activity conditions

## Monthly Breakdown

### September-October
- Beginning of the Aurora season
- Milder temperatures
- Some daylight hours for other activities

### November-February
- Peak viewing season
- Longest dark hours
- Coldest temperatures
- Best chance of clear skies

### March-April
- End of Aurora season
- Warming temperatures
- Increasing daylight

## Tips for Viewing

1. Plan stays of at least 3-4 nights
2. Check weather forecasts regularly
3. Choose locations away from city lights
4. Be prepared for cold weather
5. Consider guided tours for optimal experiences`,
    imageUrl: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=2070&auto=format&fit=crop"
  },
  "top-aurora-viewing-locations": {
    title: "Top 5 Aurora Viewing Locations in Greenland",
    date: "April 12, 2024",
    content: `Discover the most spectacular locations in Greenland for witnessing the mesmerizing Northern Lights.

## 1. Ilulissat
- UNESCO World Heritage site
- Clear skies and minimal light pollution
- Stunning icefjord backdrop
- Professional guide services available

## 2. Nuuk
- Accessible capital city
- Modern amenities
- Surrounding mountains offer perfect viewing spots
- Regular aurora forecasts

## 3. Kangerlussuaq
- Former military base
- Stable weather conditions
- 300+ clear nights annually
- Professional observatory

## 4. Sisimiut
- Second-largest Greenlandic city
- Mountain wilderness access
- Dog sledding tours available
- Traditional Inuit culture

## 5. Kulusuk
- East Greenland gem
- Remote location ensures darkness
- Traditional hunting community
- Unique cultural experience`,
    imageUrl: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?q=80&w=2064&auto=format&fit=crop"
  },
  "aurora-photography-tips": {
    title: "Photography Tips for Aurora Borealis",
    date: "April 10, 2024",
    content: `Master the art of capturing the Northern Lights with these essential photography tips.

## Essential Equipment
- DSLR or mirrorless camera
- Wide-angle lens
- Sturdy tripod
- Extra batteries
- Remote shutter release

## Camera Settings
1. Manual mode (M)
2. ISO 1600-3200
3. Aperture f/2.8 or wider
4. Shutter speed 15-30 seconds
5. Manual focus set to infinity

## Composition Tips
- Include foreground elements
- Use the rule of thirds
- Check your histogram
- Shoot in RAW format
- Consider time-lapse sequences

## Post-Processing
- Adjust white balance
- Reduce noise
- Enhance contrast
- Fine-tune exposure
- Maintain natural colors`,
    imageUrl: "https://images.unsplash.com/photo-1494243762909-b498c7e440a9?q=80&w=2067&auto=format&fit=crop"
  },
  "understanding-aurora-forecasts": {
    title: "Understanding Aurora Forecasts",
    date: "April 8, 2024",
    content: `Learn to interpret aurora forecasts and maximize your chances of seeing the Northern Lights.

## Key Forecast Elements
1. Kp Index (0-9 scale)
2. Solar wind speed
3. Cloud cover
4. Moon phase
5. Local light pollution

## Reading the Kp Index
- 0-2: Low activity
- 3-4: Moderate activity
- 5+: Strong activity
- 7+: Exceptional displays

## Best Viewing Conditions
- Clear, dark skies
- New moon period
- Away from city lights
- High Kp index
- Fast solar wind speed

## Reliable Forecast Sources
- Space Weather Prediction Center
- Aurora Service
- Local weather services
- Mobile aurora apps`,
    imageUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop"
  },
  "cultural-significance-northern-lights": {
    title: "Cultural Significance of Northern Lights",
    date: "April 5, 2024",
    content: `Explore the rich cultural heritage and mythology surrounding the Aurora Borealis in Greenland.

## Inuit Mythology
- Dancing spirits
- Ancestral connections
- Celestial messages
- Traditional stories

## Historical Significance
- Navigation aid
- Weather prediction
- Spiritual ceremonies
- Cultural celebrations

## Modern Cultural Impact
- Tourism development
- Scientific research
- Art inspiration
- Photography

## Local Traditions
- Storytelling events
- Community gatherings
- Seasonal celebrations
- Educational programs`,
    imageUrl: "https://images.unsplash.com/photo-1512757776214-26d36777b513?q=80&w=2070&auto=format&fit=crop"
  },
  "planning-aurora-adventure": {
    title: "Planning Your Aurora Adventure",
    date: "April 3, 2024",
    content: `Essential tips and guidelines for planning a successful Northern Lights viewing trip to Greenland.

## Trip Planning
1. Choose the right season
2. Book aurora-friendly accommodation
3. Plan multiple viewing nights
4. Arrange guided tours
5. Pack appropriate gear

## Essential Equipment
- Warm clothing layers
- Hand/foot warmers
- Camera equipment
- Headlamp
- Emergency supplies

## Activities to Consider
- Dog sledding
- Ice fishing
- Snowmobiling
- Cultural tours
- Photography workshops

## Travel Tips
- Book early
- Check weather patterns
- Consider travel insurance
- Learn basic phrases
- Respect local customs`,
    imageUrl: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?q=80&w=2070&auto=format&fit=crop"
  }
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  const htmlContent = marked(post.content);

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'Blog', href: '/blog' },
    { title: post.title },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <Breadcrumb items={breadcrumbItems} className="mb-8" />
      
      <article className="max-w-3xl mx-auto">
        <div className="relative h-[400px] w-full mb-8">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-muted-foreground mb-8">{post.date}</div>
        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    </main>
  );
}