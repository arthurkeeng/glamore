import { MapPin, Phone, Mail, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We'd love to hear from you. Get in touch with our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Get in Touch</h2>
                <p className="mt-2 text-gray-500">
                  Have questions about our services or want to schedule an appointment? Fill out the form and we'll get
                  back to you as soon as possible.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-pink-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <p className="text-sm text-gray-500">123 Beauty Street, Salon City, SC 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-pink-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-gray-500">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-pink-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-gray-500">info@glamoursalon.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-pink-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Hours</h3>
                    <p className="text-sm text-gray-500">Monday - Friday: 9am - 7pm</p>
                    <p className="text-sm text-gray-500">Saturday: 10am - 6pm</p>
                    <p className="text-sm text-gray-500">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="/salon2.jpg"
                  alt="Salon location"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="name@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(123) 456-7890" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help you?" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about your inquiry..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-pink-600 hover:bg-pink-700">Send Message</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our salon and services.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 pt-12 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do I need to make an appointment?</h3>
              <p className="text-gray-500">
                Yes, we recommend booking appointments in advance to ensure availability. You can book online or call us
                directly.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What if I need to cancel my appointment?</h3>
              <p className="text-gray-500">
                We request at least 24 hours notice for cancellations. Late cancellations may incur a fee.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you offer gift cards?</h3>
              <p className="text-gray-500">
                Yes, we offer gift cards in various denominations. They can be purchased in-store or online.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What payment methods do you accept?</h3>
              <p className="text-gray-500">
                We accept all major credit cards, cash, and digital payment methods like Apple Pay and Google Pay.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you offer any loyalty programs?</h3>
              <p className="text-gray-500">
                Yes, we have a rewards program where you earn points for each service that can be redeemed for
                discounts.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What brands do you use?</h3>
              <p className="text-gray-500">
                We use premium, professional-grade products from brands like Oribe, Kerastase, OPI, and Dermalogica.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
