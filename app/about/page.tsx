import Link from "next/link"
import { Award, Heart, Star, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Glamour Salon</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our story, our mission, and our commitment to beauty and wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-600">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                A Passion for Beauty Since 2010
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                Glamour Salon was founded with a simple mission: to provide exceptional beauty services in a welcoming,
                relaxing environment. What started as a small studio with just two stylists has grown into a
                full-service salon with a team of talented professionals.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed">
                Our founder, Catherine Williams, brought over 15 years of industry experience when she opened our doors.
                Her vision was to create a space where clients could feel pampered and leave feeling confident and
                beautiful.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed">
                Today, we continue to uphold those values while embracing innovation and staying current with the latest
                trends and techniques in the beauty industry.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[500px] overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Salon founder"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide everything we do at Glamour Salon.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
                <Star className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold">Excellence</h3>
              <p className="text-gray-500">
                We strive for excellence in every service we provide, from the moment you walk in until you leave.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold">Passion</h3>
              <p className="text-gray-500">
                Our team is passionate about beauty and dedicated to helping you look and feel your best.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
                <Award className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold">Expertise</h3>
              <p className="text-gray-500">
                We invest in ongoing education to stay at the forefront of beauty trends and techniques.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
                <ThumbsUp className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold">Client Focus</h3>
              <p className="text-gray-500">
                Your satisfaction is our priority. We listen to your needs and tailor our services accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our talented professionals are dedicated to providing you with exceptional service.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-pink-600">{member.role}</p>
                  <p className="text-sm text-gray-500 mt-2">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-pink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Team</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Are you passionate about beauty and customer service? We're always looking for talented professionals to
                join our team.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/careers">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                  View Open Positions
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

const teamMembers = [
  {
    id: 1,
    name: "Catherine Williams",
    role: "Founder & Master Stylist",
    bio: "With over 20 years of experience, Catherine leads our team with passion and expertise in cutting-edge hair techniques.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Senior Hair Stylist",
    bio: "Michael specializes in precision cuts and creative color. His work has been featured in several fashion magazines.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Jennifer Lee",
    role: "Color Specialist",
    bio: "Jennifer is known for her exceptional balayage and color correction skills. She's been with us for 5 years.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    name: "David Chen",
    role: "Stylist & Barber",
    bio: "David excels in both modern and classic men's cuts, bringing precision and style to every client.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 5,
    name: "Sophia Martinez",
    role: "Nail Technician",
    bio: "Sophia creates stunning nail art and provides impeccable manicure and pedicure services.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 6,
    name: "Emma Johnson",
    role: "Esthetician",
    bio: "Emma is our skincare expert, specializing in facials and treatments that leave your skin glowing.",
    image: "/placeholder.svg?height=400&width=400",
  },
]
