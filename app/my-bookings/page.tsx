"use client"

import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import { format } from "date-fns"
import { Calendar, Clock, Scissors } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data - in a real app, this would come from your database
const mockUpcomingBookings = [
  {
    id: 1,
    service: "Women's Haircut",
    stylist: "Catherine Williams",
    date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    time: "10:00 AM",
    price: 45,
  },
  {
    id: 2,
    service: "Manicure",
    stylist: "Sophia Martinez",
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    time: "2:30 PM",
    price: 30,
  },
]

const mockPastBookings = [
  {
    id: 3,
    service: "Hair Coloring",
    stylist: "Jennifer Lee",
    date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
    time: "11:00 AM",
    price: 85,
  },
  {
    id: 4,
    service: "Men's Haircut",
    stylist: "David Chen",
    date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
    time: "4:00 PM",
    price: 35,
  },
]

export default function MyBookingsPage() {
  const { user } = useUser()
  const [upcomingBookings] = useState(mockUpcomingBookings)
  const [pastBookings] = useState(mockPastBookings)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Bookings</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Manage your appointments and view your booking history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bookings Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle>Hello, {user?.firstName || user?.emailAddresses[0]?.emailAddress}</CardTitle>
                <CardDescription>View and manage your salon appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="upcoming" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="past">Past</TabsTrigger>
                  </TabsList>
                  <TabsContent value="upcoming" className="pt-6">
                    {upcomingBookings.length > 0 ? (
                      <div className="space-y-4">
                        {upcomingBookings.map((booking) => (
                          <BookingCard key={booking.id} booking={booking} isUpcoming={true} />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500">You don't have any upcoming appointments.</p>
                        <Button className="mt-4 bg-pink-600 hover:bg-pink-700" asChild>
                          <a href="/booking">Book Now</a>
                        </Button>
                      </div>
                    )}
                  </TabsContent>
                  <TabsContent value="past" className="pt-6">
                    {pastBookings.length > 0 ? (
                      <div className="space-y-4">
                        {pastBookings.map((booking) => (
                          <BookingCard key={booking.id} booking={booking} isUpcoming={false} />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500">You don't have any past appointments.</p>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button className="bg-pink-600 hover:bg-pink-700" asChild>
                  <a href="/booking">Book New Appointment</a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

interface Booking {
  id: number
  service: string
  stylist: string
  date: Date
  time: string
  price: number
}

function BookingCard({ booking, isUpcoming }: { booking: Booking; isUpcoming: boolean }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600">
              <Scissors className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">{booking.service}</h3>
              <p className="text-sm text-gray-500">with {booking.stylist}</p>
              <div className="flex items-center gap-2 mt-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{format(booking.date, "MMMM d, yyyy")}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{booking.time}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="font-semibold text-pink-600">${booking.price}</span>
            {isUpcoming && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Reschedule
                </Button>
                <Button variant="destructive" size="sm">
                  Cancel
                </Button>
              </div>
            )}
            {!isUpcoming && (
              <Button variant="outline" size="sm">
                Book Again
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
