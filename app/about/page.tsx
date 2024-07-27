import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import hero from "@/public/Hero.jpg"
import Navbar from "@/components/custom/Navbar";
import Link from "next/link";
import Footer from "@/components/custom/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col min-h-[100dvh] font-raleway">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-yellow-500">
                  Reliable and Affordable Cab Service
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  At iCab, we&apos;re dedicated to providing our customers with the best possible cab service. Our
                  mission is to make transportation easy, convenient, and accessible to everyone.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-yellow-100 dark:text-white dark:bg-yellow-400 px-3 py-1 text-sm ">
                  About iCab
                </div>
                <div className="space-x-4">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-700 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Download App
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-yellow-500 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-yellow-100 hover:text-yellow-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-yellow-400"
                  >
                    Book a Ride
                  </Link>
                </div>
              </div>
            </div>
            <Image
              src={hero}
              alt="Hero"
              width="1270"
              className="mx-auto overflow-hidden h-[60rem] rounded-t-xl object-cover"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm dark:bg-yellow-400">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-yellow-500">
                  Why Choose iCab?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  At iCab, we pride ourselves on providing reliable, affordable, and convenient transportation
                  services to our customers. Here are some of the key features that set us apart:
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-yellow-500">24/7 Availability</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our cabs are available 24 hours a day, 7 days a week, so you can get a ride whenever you need it.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-yellow-500">Competitive Pricing</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We offer competitive and transparent pricing, so you can trust that you&apos;re getting the best value for
                  your money.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-yellow-500">Reliable Drivers</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our drivers are experienced, professional, and committed to providing you with a safe and comfortable
                  ride.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-yellow-500">Easy Booking</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Book your ride with just a few taps on our user-friendly app or website.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-yellow-500">Cashless Payments</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Pay for your ride securely and conveniently through our mobile app or website.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-yellow-500">Customer Support</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our friendly and knowledgeable customer support team is available to assist you with any questions or
                  concerns.
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-700 disabled:pointer-events-none disabled:opacity-50"
              >
                Download App
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-yellow-500 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-yellow-100 hover:text-yellow-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-yellow-400"
              >
                Book a Ride
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-yellow-400 via-orange-400 to-yellow-300">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-yellow-800">
                What Our Customers Say
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-600">
                Hear from our satisfied customers about their experience with iCab.
              </p>
            </div>
            <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 mt-4">
                    <Avatar className="border">
                      <AvatarImage src="/placeholder.svg" alt="@username" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">John Doe</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">San Francisco, CA</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <div className="flex items-center gap-px">
                      <StarIcon className="w-2.5 h-2.5 fill-yellow-500" />
                      <StarIcon className="w-2.5 h-2.5 fill-yellow-500" />
                      <StarIcon className="w-2.5 h-2.5 fill-yellow-500" />
                      <StarIcon className="w-2.5 h-2.5 fill-yellow-500" />
                      <StarIcon className="w-2.5 h-2.5 fill-yellow-500" />
                    </div>
                  </div>
                  <p>
                  &quot;I&apos;ve been using iCab for over a year now and I&apos;m consistently impressed by their reliable
                    service and friendly drivers. The app is easy to use and the pricing is very competitive.&quot;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 mt-4">
                    <Avatar className="border">
                      <AvatarImage src="/placeholder.svg" alt="@username" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Sarah Miller</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Los Angeles, CA</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <div className="flex items-center gap-px">
                      <StarIcon className="w-2.5 h-2.5 fill-yellow-500" />
                      <StarIcon className="w-2.5 h-2.5 fill-yellow-500" />
                      <StarIcon className="w-2.5 h-2.5 fill-yellow-500" />
                      <StarIcon className="w-2.5 h-2.5 fill-yellow-500" />
                      <StarIcon className="w-2.5 h-2.5" />
                    </div>
                  </div>
                  <p>
                  &quot;I&apos;ve used several cab services in the past, but iCab has been the most reliable and
                    affordable. The drivers are always courteous and the cars are well-maintained. I highly recommend
                    them.&quot;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 mt-4">
                    <Avatar className="border">
                      <AvatarImage src="/placeholder.svg" alt="@username" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Michael Johnson</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Chicago, IL</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <div className="flex items-center gap-px">
                      <StarIcon className="w-2.5 h-2.5 fill-yellow-500" />
                      <StarIcon className="w-2.5 h-2.5 fill-yellow-500" />
                      <StarIcon className="w-2.5 h-2.5 fill-yellow-500" />
                      <StarIcon className="w-2.5 h-2.5 fill-yellow-500" />
                      <StarIcon className="w-2.5 h-2.5" />
                    </div>
                  </div>
                  <p>
                  &quot;I&apos;ve been using iCab for the past few months and I&apos;m really impressed with their service. The
                    drivers are always on time and the app makes booking a ride a breeze. I definitely recommend them to
                    anyone looking for a reliable cab service.&quot;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
    <Footer/>
    </>
  );
}

function StarIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
