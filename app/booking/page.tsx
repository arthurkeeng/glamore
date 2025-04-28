"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Clock } from "lucide-react"
import { format } from "date-fns"

export default function BookingPage() {
  const { isSignedIn, user } = useUser()
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<string>("")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [bookingComplete, setBookingComplete] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  })

  // Pre-fill form data if user is signed in
  useEffect(() => {
    if (isSignedIn && user) {
      setFormData({
        ...formData,
        name: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
        email: user.emailAddresses[0]?.emailAddress || "",
        phone: user.phoneNumbers[0]?.phoneNumber || "",
      })
    }
  }, [isSignedIn, user])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value,
    })
  }

  const handleNextStep = () => {
    if (step === 1 && selectedService) {
      setStep(2)
    } else if (step === 2 && selectedDate) {
      setStep(3)
    } else if (step === 3 && selectedTime) {
      setStep(4)
    }
  }

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the booking data to your backend here
    // Include the user's Clerk ID if they're signed in
    const bookingData = {
      userId: isSignedIn ? user.id : null,
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      ...formData,
    }

    console.log("Booking data:", bookingData)
    setBookingComplete(true)
  }

  const availableTimes = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Book Your Appointment</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Schedule your salon visit in a few simple steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            {!bookingComplete ? (
              <Card>
                <CardHeader>
                  <CardTitle>Book Your Appointment</CardTitle>
                  <CardDescription>
                    {step === 1 && "Select a service to get started."}
                    {step === 2 && "Choose a date for your appointment."}
                    {step === 3 && "Select an available time slot."}
                    {step === 4 && "Complete your booking by providing your details."}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-8">
                    <div className={`flex flex-col items-center ${step >= 1 ? "text-pink-600" : "text-gray-400"}`}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? "border-pink-600 bg-pink-100" : "border-gray-300"}`}
                      >
                        1
                      </div>
                      <span className="text-xs mt-1">Service</span>
                    </div>
                    <div className="flex-1 flex items-center">
                      <div className={`h-1 w-full ${step > 1 ? "bg-pink-600" : "bg-gray-200"}`}></div>
                    </div>
                    <div className={`flex flex-col items-center ${step >= 2 ? "text-pink-600" : "text-gray-400"}`}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 2 ? "border-pink-600 bg-pink-100" : "border-gray-300"}`}
                      >
                        2
                      </div>
                      <span className="text-xs mt-1">Date</span>
                    </div>
                    <div className="flex-1 flex items-center">
                      <div className={`h-1 w-full ${step > 2 ? "bg-pink-600" : "bg-gray-200"}`}></div>
                    </div>
                    <div className={`flex flex-col items-center ${step >= 3 ? "text-pink-600" : "text-gray-400"}`}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 3 ? "border-pink-600 bg-pink-100" : "border-gray-300"}`}
                      >
                        3
                      </div>
                      <span className="text-xs mt-1">Time</span>
                    </div>
                    <div className="flex-1 flex items-center">
                      <div className={`h-1 w-full ${step > 3 ? "bg-pink-600" : "bg-gray-200"}`}></div>
                    </div>
                    <div className={`flex flex-col items-center ${step >= 4 ? "text-pink-600" : "text-gray-400"}`}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 4 ? "border-pink-600 bg-pink-100" : "border-gray-300"}`}
                      >
                        4
                      </div>
                      <span className="text-xs mt-1">Details</span>
                    </div>
                  </div>

                  {step === 1 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="service">Select Service</Label>
                        <Select value={selectedService} onValueChange={setSelectedService}>
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Choose a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="haircut">Women's Haircut - $45</SelectItem>
                            <SelectItem value="mens-haircut">Men's Haircut - $35</SelectItem>
                            <SelectItem value="color">Full Color - $85</SelectItem>
                            <SelectItem value="highlights">Highlights - $95</SelectItem>
                            <SelectItem value="manicure">Classic Manicure - $30</SelectItem>
                            <SelectItem value="pedicure">Classic Pedicure - $40</SelectItem>
                            <SelectItem value="facial">Classic Facial - $70</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      {selectedService && (
                        <div className="p-4 bg-pink-50 rounded-lg flex items-start gap-3">
                          <Clock className="h-5 w-5 text-pink-600 mt-0.5" />
                          <div>
                            <p className="font-medium">Estimated Duration</p>
                            <p className="text-sm text-gray-500">
                              {selectedService === "haircut" && "60 minutes"}
                              {selectedService === "mens-haircut" && "45 minutes"}
                              {selectedService === "color" && "120 minutes"}
                              {selectedService === "highlights" && "150 minutes"}
                              {selectedService === "manicure" && "45 minutes"}
                              {selectedService === "pedicure" && "60 minutes"}
                              {selectedService === "facial" && "60 minutes"}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <Label>Select Date</Label>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border mx-auto"
                        disabled={(date) => {
                          // Disable past dates and Sundays
                          return date < new Date() || date.getDay() === 0
                        }}
                      />
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4">
                      <Label>Select Time</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {availableTimes.map((time) => (
                          <Button
                            key={time}
                            type="button"
                            variant={selectedTime === time ? "default" : "outline"}
                            className={selectedTime === time ? "bg-pink-600 hover:bg-pink-700" : ""}
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="notes">Special Requests (Optional)</Label>
                        <Textarea
                          id="notes"
                          placeholder="Any special requests or notes for your stylist"
                          value={formData.notes}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg space-y-2">
                        <h3 className="font-semibold">Booking Summary</h3>
                        <div className="grid grid-cols-2 text-sm">
                          <span className="text-gray-500">Service:</span>
                          <span>
                            {selectedService === "haircut" && "Women's Haircut"}
                            {selectedService === "mens-haircut" && "Men's Haircut"}
                            {selectedService === "color" && "Full Color"}
                            {selectedService === "highlights" && "Highlights"}
                            {selectedService === "manicure" && "Classic Manicure"}
                            {selectedService === "pedicure" && "Classic Pedicure"}
                            {selectedService === "facial" && "Classic Facial"}
                          </span>
                          <span className="text-gray-500">Date:</span>
                          <span>{selectedDate ? format(selectedDate, "MMMM d, yyyy") : ""}</span>
                          <span className="text-gray-500">Time:</span>
                          <span>{selectedTime}</span>
                          <span className="text-gray-500">Price:</span>
                          <span>
                            {selectedService === "haircut" && "$45"}
                            {selectedService === "mens-haircut" && "$35"}
                            {selectedService === "color" && "$85"}
                            {selectedService === "highlights" && "$95"}
                            {selectedService === "manicure" && "$30"}
                            {selectedService === "pedicure" && "$40"}
                            {selectedService === "facial" && "$70"}
                          </span>
                        </div>
                      </div>
                    </form>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  {step > 1 ? (
                    <Button variant="outline" onClick={handlePrevStep}>
                      Back
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  {step < 4 ? (
                    <Button
                      onClick={handleNextStep}
                      disabled={
                        (step === 1 && !selectedService) ||
                        (step === 2 && !selectedDate) ||
                        (step === 3 && !selectedTime)
                      }
                      className="bg-pink-600 hover:bg-pink-700"
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button type="submit" onClick={handleSubmit} className="bg-pink-600 hover:bg-pink-700">
                      Confirm Booking
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold">Booking Confirmed!</h2>
                      <p className="text-gray-500">
                        Your appointment has been successfully booked. We've sent a confirmation email with all the
                        details.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg w-full max-w-md space-y-2 mt-4">
                      <h3 className="font-semibold">Booking Details</h3>
                      <div className="grid grid-cols-2 text-sm gap-y-2">
                        <span className="text-gray-500">Service:</span>
                        <span>
                          {selectedService === "haircut" && "Women's Haircut"}
                          {selectedService === "mens-haircut" && "Men's Haircut"}
                          {selectedService === "color" && "Full Color"}
                          {selectedService === "highlights" && "Highlights"}
                          {selectedService === "manicure" && "Classic Manicure"}
                          {selectedService === "pedicure" && "Classic Pedicure"}
                          {selectedService === "facial" && "Classic Facial"}
                        </span>
                        <span className="text-gray-500">Date:</span>
                        <span>{selectedDate ? format(selectedDate, "MMMM d, yyyy") : ""}</span>
                        <span className="text-gray-500">Time:</span>
                        <span>{selectedTime}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center gap-4">
                  <Button onClick={() => (window.location.href = "/")} variant="outline">
                    Return to Home
                  </Button>
                  <Button
                    onClick={() => (window.location.href = "/my-bookings")}
                    className="bg-pink-600 hover:bg-pink-700"
                  >
                    View My Bookings
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
