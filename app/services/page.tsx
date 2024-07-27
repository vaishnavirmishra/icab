import Footer from "@/components/custom/Footer"
import Navbar from "@/components/custom/Navbar"
import Link from "next/link"

export default function Services() {
  return (
    <>
    <Navbar/>
    <div className="w-full font-manrope">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FFC107] dark:bg-[#333]">
        <div className="container px-4 md:px-6 text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-[#333] dark:text-[#FFC107]">
              Reliable Transportation Solutions
            </h1>
            <p className="mx-auto max-w-[700px] text-[#555] md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed dark:text-[#aaa]">
              Experience the convenience of our comprehensive transportation services, tailored to your needs.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-md bg-[#333] px-8 text-sm font-medium text-[#FFC107] shadow-md transition-colors hover:bg-[#333]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#333] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#FFC107] dark:text-[#333] dark:hover:bg-[#FFC107]/90 dark:focus-visible:ring-[#FFC107]"
          >
            Book Now
          </Link>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center space-y-4 p-6 rounded-lg bg-[#FFC107] dark:bg-[#333] shadow-lg">
            <PlaneIcon className="w-12 h-12 text-[#333] dark:text-[#FFC107]" />
            <h3 className="text-xl font-semibold text-[#333] dark:text-[#FFC107]">Airport Transfers</h3>
            <p className="text-[#555] dark:text-[#aaa] text-center">
              Reliable and efficient airport transportation services.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 p-6 rounded-lg bg-[#FFC107] dark:bg-[#333] shadow-lg">
            <MapIcon className="w-12 h-12 text-[#333] dark:text-[#FFC107]" />
            <h3 className="text-xl font-semibold text-[#333] dark:text-[#FFC107]">City Tours</h3>
            <p className="text-[#555] dark:text-[#aaa] text-center">Explore the city in style with our guided tours.</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 p-6 rounded-lg bg-[#FFC107] dark:bg-[#333] shadow-lg">
            <ClockIcon className="w-12 h-12 text-[#333] dark:text-[#FFC107]" />
            <h3 className="text-xl font-semibold text-[#333] dark:text-[#FFC107]">Hourly Rentals</h3>
            <p className="text-[#555] dark:text-[#aaa] text-center">Rent a vehicle by the hour for your convenience.</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 p-6 rounded-lg bg-[#FFC107] dark:bg-[#333] shadow-lg">
            <BriefcaseIcon className="w-12 h-12 text-[#333] dark:text-[#FFC107]" />
            <h3 className="text-xl font-semibold text-[#333] dark:text-[#FFC107]">Corporate Transportation</h3>
            <p className="text-[#555] dark:text-[#aaa] text-center">
              Reliable and professional transportation for your business.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#333] dark:bg-[#FFC107]">
        <div className="container  px-4 md:px-6 flex items-center justify-center hover:scale-105 duration-200">
          <div className="flex flex-col items-center justify-center  p-4 rounded-lg bg-[#FFC107] dark:bg-[#333] shadow-lg">
            <CarIcon className="w-12 h-12 text-[#333] dark:text-[#FFC107]" />
            <h3 className="text-xl font-semibold text-[#333] dark:text-[#FFC107]">Cab Services</h3>
            <p className="text-[#555] dark:text-[#aaa] text-center">Hail a cab with a tap, 24/7 availability.</p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FFC107] dark:bg-[#333]">
        <div className="container px-4 md:px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center space-y-4 p-6 rounded-lg bg-[#333] dark:bg-[#FFC107] shadow-lg">
            <UsersIcon className="w-12 h-12 text-[#FFC107] dark:text-[#333]" />
            <h3 className="text-xl font-semibold text-[#FFC107] dark:text-[#333]">Ride Sharing</h3>
            <p className="text-[#aaa] dark:text-[#555] text-center">Connect with others and share the ride.</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 p-6 rounded-lg bg-[#333] dark:bg-[#FFC107] shadow-lg">
            <HeadphonesIcon className="w-12 h-12 text-[#FFC107] dark:text-[#333]" />
            <h3 className="text-xl font-semibold text-[#FFC107] dark:text-[#333]">Customer Support</h3>
            <p className="text-[#aaa] dark:text-[#555] text-center">24/7 support for all your transportation needs.</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 p-6 rounded-lg bg-[#333] dark:bg-[#FFC107] shadow-lg">
            <ShieldIcon className="w-12 h-12 text-[#FFC107] dark:text-[#333]" />
            <h3 className="text-xl font-semibold text-[#FFC107] dark:text-[#333]">Safety First</h3>
            <p className="text-[#aaa] dark:text-[#555] text-center">Prioritizing your safety in every ride.</p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#333] dark:bg-[#FFC107]">
        <div className="container px-4 md:px-6 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-[#FFC107] dark:text-[#333]">
              Download Our App
            </h2>
            <p className="mx-auto max-w-[700px] text-[#aaa] md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed dark:text-[#555]">
              Get the best transportation services at your fingertips.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#FFC107] px-8 text-sm font-medium text-[#333] shadow-md transition-colors hover:bg-[#FFC107]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC107] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#333] dark:text-[#FFC107] dark:hover:bg-[#333]/90 dark:focus-visible:ring-[#333]"
            >
              <AppleIcon className="w-4 h-4 mr-2" /> iOS
            </Link>
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#FFC107] px-8 text-sm font-medium text-[#333] shadow-md transition-colors hover:bg-[#FFC107]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC107] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#333] dark:text-[#FFC107] dark:hover:bg-[#333]/90 dark:focus-visible:ring-[#333]"
            >
              <SmartphoneIcon className="w-4 h-4 mr-2" /> Android
            </Link>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  )
}

function AppleIcon(props:any) {
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
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  )
}


function BikeIcon(props:any) {
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
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>
  )
}


function BriefcaseIcon(props:any) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CarIcon(props:any) {
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
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}


function ClockIcon(props:any) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function HeadphonesIcon(props:any) {
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
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
}


function MapIcon(props:any) {
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
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>
  )
}


function PlaneIcon(props:any) {
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
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  )
}


function ShieldIcon(props:any) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function SmartphoneIcon(props:any) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}


function TruckIcon(props:any) {
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
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}


function UsersIcon(props:any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}