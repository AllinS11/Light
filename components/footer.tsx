import { MoonStar } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <MoonStar className="h-6 w-6" />
              <span className="font-bold">Aurora Forecast</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your trusted source for aurora borealis forecasts and viewing guides.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/calculator" className="text-sm text-muted-foreground hover:text-primary">
                  Aurora Calculator
                </Link>
              </li>
              <li>
                <Link href="/forecast" className="text-sm text-muted-foreground hover:text-primary">
                  Live Forecast
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="text-sm text-muted-foreground hover:text-primary">
                  Hotels
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guide" className="text-sm text-muted-foreground hover:text-primary">
                  Viewing Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aurora Borealis Forecast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}