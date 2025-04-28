import Link from "next/link"
import { CalendarDays, Clock, MapPin, Scissors } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Beauty & Relaxation at Your Fingertips
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Book your next salon appointment in seconds. Experience professional services tailored just for you.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/booking">
                  <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                    Book Now
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px] aspect-video overflow-hidden rounded-xl">
              <img
                src="/makeup1.jpg"
                alt="Salon interior"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experience the best in beauty and wellness services with our team of professionals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100 text-pink-600">
                <Scissors className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Expert Stylists</h3>
                <p className="text-gray-500">
                  Our team of professional stylists are trained in the latest techniques and trends.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100 text-pink-600">
                <CalendarDays className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Easy Booking</h3>
                <p className="text-gray-500">
                  Book your appointments online anytime, anywhere with our easy-to-use booking system.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100 text-pink-600">
                <Clock className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Flexible Hours</h3>
                <p className="text-gray-500">We offer flexible appointment times to accommodate your busy schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our range of professional beauty and wellness services.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{service.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mt-1">{service.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-semibold text-pink-600">${service.price}</span>
                    <span className="text-sm text-gray-500">{service.duration} min</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mx-auto w-full max-w-[500px] overflow-hidden rounded-xl">
              <img
                src="/salon.jpg"
                alt="Salon location"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Visit Our Salon</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                  We're conveniently located in the heart of the city. Come visit us today!
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-pink-600" />
                  <span>123 Beauty Street, Salon City, SC 12345</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-pink-600" />
                  <span>Mon-Fri: 9am-7pm | Sat: 10am-6pm | Sun: Closed</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
                <a href="tel:+11234567890">
                  <Button size="lg" variant="ghost">
                    Call: (123) 456-7890
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    id: 1,
    name: "Haircare & Styling",
    description: "Professional hair treatment and styling tailored to your preferences and face shape.",
    price: 45,
    duration: 60,
    image: "/makeup1.jpg",
  },
  {
    id: 2,
    name: "Hair Coloring",
    description: "Full hair coloring service using premium products for vibrant, long-lasting results.",
    price: 85,
    duration: 120,
    image: "/makeup4.jpg",
  },
  {
    id: 3,
    name: "Manicure & Pedicure",
    description: "Relaxing and rejuvenating nail care treatment for hands and feet.",
    price: 65,
    duration: 90,
    image: "/makeup5.jpg",
  },
]
