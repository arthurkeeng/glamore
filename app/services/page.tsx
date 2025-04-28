import Link from "next/link"
import { Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our range of professional beauty and wellness services tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="hair" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="hair" id="haircuts">
                Hair
              </TabsTrigger>
              <TabsTrigger value="color" id="coloring">
                Color
              </TabsTrigger>
              <TabsTrigger value="treatments" id="treatments">
                Treatments
              </TabsTrigger>
              <TabsTrigger value="nails" id="nails">
                Nails
              </TabsTrigger>
              <TabsTrigger value="facials" id="facials">
                Facials
              </TabsTrigger>
            </TabsList>
            <TabsContent value="hair" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {hairServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="color" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {colorServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="treatments" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {treatmentServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="nails" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {nailServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="facials" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {facialServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-pink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Book?</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Schedule your appointment today and experience our professional services.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/booking">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                  Book Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

interface Service {
  id: number
  name: string
  description: string
  price: number
  duration: number
  image: string
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
      <div className="aspect-video overflow-hidden">
        <img
          src={service.image || "/placeholder.svg"}
          alt={service.name}
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{service.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{service.description}</p>
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
          <Clock className="h-4 w-4" />
          <span>{service.duration} min</span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="font-semibold text-pink-600">${service.price}</span>
          <Link href="/booking">
            <Button size="sm">Book Now</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

const hairServices: Service[] = [
  {
    id: 1,
    name: "Women's Haircut",
    description: "Professional haircut tailored to your face shape and preferences.",
    price: 45,
    duration: 60,
    image: "/makeup3.jpg",
  },
  {
    id: 2,
    name: "Men's Haircut",
    description: "Precision cut with attention to detail and style.",
    price: 35,
    duration: 45,
    image: "/makeup2.jpg",
  },
  {
    id: 3,
    name: "Blowout & Styling",
    description: "Professional blow dry and styling for any occasion.",
    price: 40,
    duration: 45,
    image: "/makeup2.jpg",
  },
  {
    id: 4,
    name: "Children's Haircut",
    description: "Gentle and fun haircuts for kids under 12.",
    price: 25,
    duration: 30,
    image: "/makeup2.jpg",
  },
  {
    id: 5,
    name: "Special Occasion Styling",
    description: "Elegant updo or styling for weddings, proms, or special events.",
    price: 75,
    duration: 90,
    image: "/makeup1.jpg",
  },
  {
    id: 6,
    name: "Beard Trim",
    description: "Precision beard trimming and shaping.",
    price: 20,
    duration: 20,
    image: "/makeup2.jpg",
  },
]

const colorServices: Service[] = [
  {
    id: 7,
    name: "Full Color",
    description: "Complete hair coloring using premium products for vibrant, long-lasting results.",
    price: 85,
    duration: 120,
    image: "/makeup1.jpg",
  },
  {
    id: 8,
    name: "Highlights",
    description: "Partial or full highlights to add dimension and texture to your hair.",
    price: 95,
    duration: 150,
    image: "/makeup2.jpg",
  },
  {
    id: 9,
    name: "Balayage",
    description: "Hand-painted highlights creating a natural, sun-kissed look.",
    price: 120,
    duration: 180,
    image: "/makeup3.jpg",
  },
  {
    id: 10,
    name: "Ombre",
    description: "Gradual color transition from dark to light for a modern, trendy look.",
    price: 130,
    duration: 180,
    image: "/makeup4.jpg",
  },
  {
    id: 11,
    name: "Root Touch-Up",
    description: "Color application to the roots to maintain your current color.",
    price: 55,
    duration: 90,
    image: "/makeup5.jpg",
  },
  {
    id: 12,
    name: "Color Correction",
    description: "Professional correction of color issues or uneven tones.",
    price: 150,
    duration: 240,
    image: "/makeup1.jpg",
  },
]

const treatmentServices: Service[] = [
  {
    id: 13,
    name: "Deep Conditioning",
    description: "Intensive moisture treatment to restore dry or damaged hair.",
    price: 35,
    duration: 30,
    image: "/makeup1.jpg",
  },
  {
    id: 14,
    name: "Keratin Treatment",
    description: "Smoothing treatment that reduces frizz and adds shine.",
    price: 200,
    duration: 180,
    image: "/makeup2.jpg",
  },
  {
    id: 15,
    name: "Scalp Treatment",
    description: "Therapeutic treatment for scalp conditions and hair health.",
    price: 45,
    duration: 45,
    image: "/makeup3.jpg",
  },
  {
    id: 16,
    name: "Hair Mask",
    description: "Nourishing mask to improve hair texture and appearance.",
    price: 40,
    duration: 30,
    image: "/makeup4.jpg",
  },
  {
    id: 17,
    name: "Split End Treatment",
    description: "Specialized treatment to repair and prevent split ends.",
    price: 50,
    duration: 45,
    image: "/makeup5.jpg",
  },
  {
    id: 18,
    name: "Olaplex Treatment",
    description: "Bond-building treatment that strengthens and repairs damaged hair.",
    price: 60,
    duration: 60,
    image: "/makeup2.jpg",
  },
]

const nailServices: Service[] = [
  {
    id: 19,
    name: "Classic Manicure",
    description: "Nail shaping, cuticle care, hand massage, and polish application.",
    price: 30,
    duration: 45,
    image: "/makeup5.jpg",
  },
  {
    id: 20,
    name: "Gel Manicure",
    description: "Long-lasting gel polish application with nail preparation.",
    price: 45,
    duration: 60,
    image: "/makeup4.jpg",
  },
  {
    id: 21,
    name: "Classic Pedicure",
    description: "Foot soak, exfoliation, nail care, and polish application.",
    price: 40,
    duration: 60,
    image: "/makeup3.jpg",
  },
  {
    id: 22,
    name: "Spa Pedicure",
    description: "Deluxe pedicure with extended massage and premium products.",
    price: 55,
    duration: 75,
    image: "/makeup2.jpg",
  },
  {
    id: 23,
    name: "Nail Art",
    description: "Custom nail designs and artwork per nail.",
    price: 5,
    duration: 15,
    image: "/makeup1.jpg",
  },
  {
    id: 24,
    name: "Mani-Pedi Combo",
    description: "Classic manicure and pedicure package.",
    price: 65,
    duration: 105,
    image: "/makeup2.jpg",
  },
]

const facialServices: Service[] = [
  {
    id: 25,
    name: "Classic Facial",
    description: "Deep cleansing, exfoliation, mask, and moisturizing treatment.",
    price: 70,
    duration: 60,
    image: "/makeup1.jpg",
  },
  {
    id: 26,
    name: "Anti-Aging Facial",
    description: "Specialized treatment to reduce fine lines and improve skin elasticity.",
    price: 90,
    duration: 75,
    image: "/makeup2.jpg",
  },
  {
    id: 27,
    name: "Acne Treatment",
    description: "Targeted facial for acne-prone skin with extraction and specialized products.",
    price: 80,
    duration: 75,
    image: "/makeup3.jpg",
  },
  {
    id: 28,
    name: "Hydrating Facial",
    description: "Intensive moisture treatment for dry or dehydrated skin.",
    price: 75,
    duration: 60,
    image: "/makeup5.jpg",
  },
  {
    id: 29,
    name: "Chemical Peel",
    description: "Exfoliating treatment to improve skin texture and tone.",
    price: 100,
    duration: 45,
    image: "/makeup1.jpg",
  },
  {
    id: 30,
    name: "Microdermabrasion",
    description: "Mechanical exfoliation to remove dead skin cells and promote renewal.",
    price: 110,
    duration: 60,
    image: "/makeup3.jpg",
  },
]
