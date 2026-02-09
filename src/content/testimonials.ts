export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Jennifer Martinez",
    location: "La Jolla, CA",
    rating: 5,
    text: "HP Landscaping transformed our backyard into an absolute paradise. Their design incorporated drought-tolerant plants that look amazing year-round and cut our water bill in half. The team was professional, punctual, and cleaned up perfectly every day. We couldn't be happier with the results!",
    service: "Landscaping Design & Installation",
    date: "2024-11-15"
  },
  {
    id: "test-2",
    name: "Robert Chen",
    location: "Del Mar, CA",
    rating: 5,
    text: "We hired HP Landscaping to install a smart irrigation system and the difference has been remarkable. Our plants have never looked healthier, and we're saving hundreds on water bills each year. The WiFi controller lets me adjust everything from my phone. Excellent value and service!",
    service: "Smart Irrigation Systems",
    date: "2024-10-28"
  },
  {
    id: "test-3",
    name: "Amanda Sullivan",
    location: "Rancho Santa Fe, CA",
    rating: 5,
    text: "The custom water feature HP Landscaping built for us is absolutely stunning. The natural stone waterfall looks like it's always been there, and the sound is so peaceful. They handled everything from design to installation, and the quality is exceptional. Best investment we've made in our home!",
    service: "Water Features & Fountains",
    date: "2024-12-03"
  },
  {
    id: "test-4",
    name: "Michael Torres",
    location: "Carlsbad, CA",
    rating: 5,
    text: "After trying to maintain our landscape ourselves for years, switching to HP Landscaping's maintenance service was the best decision. Our property always looks immaculate, and they catch small issues before they become expensive problems. Their team is reliable, knowledgeable, and fairly priced.",
    service: "Landscape Maintenance",
    date: "2024-09-20"
  },
  {
    id: "test-5",
    name: "Sarah Davidson",
    location: "Encinitas, CA",
    rating: 5,
    text: "The outdoor lighting HP Landscaping installed has completely changed how we use our backyard. The pathway lighting makes evening walks safe, and the uplighting on our oak trees creates a magical atmosphere. We now host dinner parties outside year-round. The LED fixtures are energy-efficient too!",
    service: "Outdoor Landscape Lighting",
    date: "2024-11-02"
  },
  {
    id: "test-6",
    name: "David Kim",
    location: "Solana Beach, CA",
    rating: 5,
    text: "HP Landscaping built us an incredible outdoor kitchen and patio area. The craftsmanship on the stonework is top-notch, and they worked with us to stay within budget without sacrificing quality. We basically live outside now. Their attention to detail and professionalism sets them apart.",
    service: "Hardscaping & Outdoor Living",
    date: "2024-10-15"
  },
  {
    id: "test-7",
    name: "Lisa Anderson",
    location: "La Jolla, CA",
    rating: 5,
    text: "From the initial consultation to final walkthrough, HP Landscaping exceeded our expectations. They designed a low-maintenance garden that fits perfectly with our busy lifestyle and San Diego's water restrictions. Every plant they chose thrives in our yard. True professionals who stand behind their work.",
    service: "Landscaping Design & Installation",
    date: "2024-08-30"
  },
  {
    id: "test-8",
    name: "James Peterson",
    location: "Del Mar, CA",
    rating: 5,
    text: "Our irrigation system was outdated and wasting water. HP Landscaping upgraded everything with modern drip lines and a smart controller. The difference in our water bill was immediate, and our plants look better than ever. They also helped us get a rebate from the water district. Great experience!",
    service: "Smart Irrigation Systems",
    date: "2024-09-12"
  },
  {
    id: "test-9",
    name: "Patricia Nguyen",
    location: "Rancho Santa Fe, CA",
    rating: 5,
    text: "We wanted a koi pond that looked natural and elegant. HP Landscaping designed and built exactly what we envisioned. The filtration system keeps the water crystal clear, and they taught us everything about maintaining it. Our koi are thriving, and the pond is our favorite feature of our home.",
    service: "Water Features & Fountains",
    date: "2024-07-25"
  },
  {
    id: "test-10",
    name: "Thomas Wright",
    location: "Carlsbad, CA",
    rating: 5,
    text: "HP Landscaping has maintained our commercial property for over two years. Their consistency and reliability are outstanding. The grounds always look pristine for our clients, and they're proactive about seasonal needs. Their crew is courteous and efficient. Highly recommend for commercial properties.",
    service: "Landscape Maintenance",
    date: "2024-11-20"
  },
  {
    id: "test-11",
    name: "Rebecca Foster",
    location: "Encinitas, CA",
    rating: 5,
    text: "The landscape lighting design HP Landscaping created for our home is stunning. They highlighted our mature trees and architectural details beautifully. The system is on a smart timer, and the LED lights use minimal electricity. Guests always comment on how beautiful our home looks at night.",
    service: "Outdoor Landscape Lighting",
    date: "2024-10-05"
  },
  {
    id: "test-12",
    name: "Christopher Brown",
    location: "Solana Beach, CA",
    rating: 5,
    text: "HP Landscaping built retaining walls and terraced our sloped yard into usable space. The engineering was complex, but they handled it flawlessly. Now we have flat areas for the kids to play and beautiful planting beds. The quality of their stonework is impressive, and everything has held up perfectly.",
    service: "Hardscaping & Outdoor Living",
    date: "2024-08-18"
  },
  {
    id: "test-13",
    name: "Michelle Ramirez",
    location: "La Jolla, CA",
    rating: 5,
    text: "We worked with HP Landscaping on a complete front yard redesign. They removed our water-hungry lawn and created a gorgeous California native garden. The design is modern, colorful, and attracts hummingbirds and butterflies. Our neighbors have been asking for their contact information!",
    service: "Landscaping Design & Installation",
    date: "2024-09-28"
  },
  {
    id: "test-14",
    name: "Daniel Cooper",
    location: "Del Mar, CA",
    rating: 5,
    text: "HP Landscaping repaired and upgraded our failing irrigation system. They identified issues we didn't even know existed and fixed everything efficiently. The new system is zoned properly for our plant needs, and the smart controller has made watering completely hands-off. Excellent technical knowledge and service.",
    service: "Smart Irrigation Systems",
    date: "2024-11-08"
  },
  {
    id: "test-15",
    name: "Emily Watson",
    location: "Rancho Santa Fe, CA",
    rating: 5,
    text: "The contemporary fountain HP Landscaping installed in our courtyard is a work of art. The design is sleek and modern, perfectly matching our home's architecture. The sound is soothing without being overwhelming, and the LED lighting creates beautiful effects at night. Exceptional craftsmanship and design.",
    service: "Water Features & Fountains",
    date: "2024-10-22"
  }
];

export const getTestimonialsByService = (service: string): Testimonial[] => {
  return testimonials.filter(testimonial =>
    testimonial.service.toLowerCase().includes(service.toLowerCase())
  );
};

export const getFeaturedTestimonials = (count: number = 6): Testimonial[] => {
  return testimonials
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getTestimonialsByLocation = (location: string): Testimonial[] => {
  return testimonials.filter(testimonial =>
    testimonial.location.toLowerCase().includes(location.toLowerCase())
  );
};
