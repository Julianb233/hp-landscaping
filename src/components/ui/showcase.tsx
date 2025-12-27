/**
 * UI Component Showcase
 *
 * This file demonstrates all UI components from the HP Landscaping design system.
 * Use this as a reference for component usage and variants.
 */

import * as React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Textarea,
  Badge,
} from "./index";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

export function UIShowcase() {
  return (
    <div className="container mx-auto max-w-6xl space-y-12 p-8">
      {/* Buttons Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Buttons</h2>

        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Forest</Button>
          <Button variant="accent">Lime Accent</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
          <Button size="icon">
            <Leaf />
          </Button>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button disabled>Disabled</Button>
          <Button variant="primary">
            <Mail />
            With Icon
          </Button>
        </div>
      </section>

      {/* Badges Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Badges</h2>

        <div className="flex flex-wrap gap-4">
          <Badge>Default</Badge>
          <Badge variant="primary">Forest Green</Badge>
          <Badge variant="accent">Lime Accent</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>

      {/* Cards Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Cards</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Landscape Design</CardTitle>
              <CardDescription>
                Transform your outdoor space with professional design
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Our expert team creates custom landscape designs tailored to
                your property and vision.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="primary" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Irrigation Systems</CardTitle>
              <CardDescription>
                Efficient watering solutions for your lawn
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="primary">Water Efficient</Badge>
                <Badge variant="accent">Smart Technology</Badge>
                <p className="text-slate-600">
                  Save water and money with our modern irrigation systems.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Get Quote
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Maintenance Plans</CardTitle>
              <CardDescription>Year-round care for your landscape</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✓ Weekly mowing</li>
                <li>✓ Seasonal cleanup</li>
                <li>✓ Fertilization</li>
                <li>✓ Pest control</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="accent" className="w-full">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Form Inputs Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Form Inputs</h2>

        <Card>
          <CardHeader>
            <CardTitle>Contact Form Example</CardTitle>
            <CardDescription>
              All form components with labels, validation, and accessibility
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              label="Full Name"
              placeholder="John Smith"
              required
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="john@example.com"
              helperText="We'll never share your email with anyone else."
              required
            />

            <Input
              label="Phone Number"
              type="tel"
              placeholder="(619) 555-0123"
              error="Please enter a valid phone number"
            />

            <Input
              label="Service Area"
              placeholder="San Diego, CA"
              disabled
            />

            <Textarea
              label="Project Details"
              placeholder="Tell us about your landscaping project..."
              helperText="Please include any specific requirements or preferences."
              required
            />

            <Textarea
              label="Additional Notes"
              placeholder="Any other information..."
              error="This field has an error for demonstration"
            />
          </CardContent>
          <CardFooter className="flex gap-4">
            <Button variant="primary" className="flex-1">
              <Mail />
              Submit Request
            </Button>
            <Button variant="ghost">Cancel</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Standalone Inputs */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Standalone Inputs</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Input placeholder="Search services..." />
          <Input type="email" placeholder="newsletter@example.com" />
          <Input type="search" placeholder="Search..." />
          <Textarea placeholder="Quick message..." className="min-h-[80px]" />
        </div>
      </section>

      {/* Combined Examples */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Real-World Examples</h2>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>Premium Landscape Package</CardTitle>
                <CardDescription>Complete outdoor transformation</CardDescription>
              </div>
              <Badge variant="accent">Popular</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="primary">Design</Badge>
              <Badge variant="primary">Installation</Badge>
              <Badge variant="primary">Irrigation</Badge>
              <Badge variant="primary">Lighting</Badge>
            </div>
            <p className="text-slate-600">
              Our most comprehensive package includes everything you need for a
              stunning outdoor space.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <MapPin className="h-4 w-4" />
                Available in San Diego County
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Phone className="h-4 w-4" />
                Free consultation included
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-4">
            <Button variant="primary" size="lg" className="flex-1">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}

export default UIShowcase;
