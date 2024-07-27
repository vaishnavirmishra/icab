import { AlignLeft, CarFront, EarthIcon, Headphones, Package, Settings, Share2Icon, SlidersHorizontal, User, Wallet } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { FaFileInvoice, FaMoneyBill } from "react-icons/fa";
import { DropdownMenuDemo } from "../ui/Dropdownt";
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Josefin_Sans, Libre_Franklin, Rubik } from "next/font/google";
import { IoLocationSharp } from "react-icons/io5";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Josefin = Josefin_Sans({subsets:["latin"]});
const rubik = Rubik({subsets:["latin"]});


const Navbar = () => {
  return (
    <div>
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
};

export const DashboardNavbar = ()=>{
  return(
    <>
    <MobDash/>
    <DeskDash/>
    </>
  )
}

const MobDash = ()=>{
  return(
    <div className="lg:hidden p-4">
      <div className="flex justify-between">
        <div>
          <Link href="/" className="font-bold text-3xl font-raleway">iCab</Link>
        </div>
        <div className="flex gap-4 items-center">
          <SignedIn>
            <UserButton/>
          </SignedIn>
        <Sheet>
      <SheetTrigger asChild>
        <SlidersHorizontal className="dark:text-white text-black" />
      </SheetTrigger>
      <SheetContent className="w-full mt-16">
        <div>
          <h1 className="text-blue-500 font-bold font-manrope text-3xl">
            Hello USER!
          </h1>
        </div>
        <div className="p-2 font-bold text-4xl  gap-2  mt-10 flex items-center">
          <Button className="p-2 text-lg font-manrope" variant={"ghost"}><FaFileInvoice className="mr-1"/>My Trips</Button>

          <Button className="p-2 text-lg font-manrope" variant={"ghost"}><Wallet className="mr-1"/>Wallet</Button>

          <Button className="p-2 text-lg font-manrope" variant={"ghost"}><FaMoneyBill className="mr-1"/>Promos</Button>

        </div>
        <div className="flex flex-col gap-4 font-manrope">
          <div className="flex items-center mt-6 text-lg">
            <Headphones className="mr-1" /> Support
          </div>
          <div className="flex items-center mt-2 text-lg">
            <User className="mr-1" />Manage account
          </div>
          <div className="flex items-center mt-2 text-lg">
            <Settings/> Settings
          </div>
        </div>
        <div className="mt-8 flex gap-2">
          <EarthIcon />
          <h1 className="font-medium">EN</h1>
        </div>
      </SheetContent>
    </Sheet>
        </div>
      </div>
    </div>
  )
}

export const DeskDash = ()=>{
  return(
    <div className="max-lg:hidden w-full border-b shadow-sm border-gray-200">
      <div className="flex justify-between p-1">
        <div className="flex items-center gap-6">
          <Link href="/" className={`${rubik.className} text-xl p-2`}>iCab</Link>
          <Link
            href="/ride"
            className={`${rubik.className} p-4 dark:text-white group  transition-all duration-300 ease-in-out text-xl  font-semibold`}
          >
            <span className="bg-left-bottom bg-gradient-to-r dark:from-white dark:to-white from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] flex transition-all duration-500 ease-out">
              <CarFront className="mr-2 items-center"/>Ride
            </span>
          </Link>
          <Link
            href="/ride"
            className="p-4 dark:text-white font-manrope group  transition-all duration-300 ease-in-out text-xl  font-bold"
          >
            <span className="bg-left-bottom bg-gradient-to-r dark:from-white dark:to-white from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] flex transition-all duration-500 ease-out">
              <Package className="mr-2 items-center"/>Packages
            </span>
          </Link>
        </div>

        <div className="flex gap-2 font-raleway items-center">
          <Button variant={"ghost"}><Share2Icon/></Button>
          <Button variant={"ghost"} className="font-bold text-lg"><FaFileInvoice className="mr-2"/>My Trips</Button>
          <DropdownMenuDemo/>
        </div>
      </div>
    </div>
  )
}

const DesktopNavbar = async () => {
    const { isAuthenticated } = getKindeServerSession();
    const authStatus = await isAuthenticated();
    return (
      <div className="max-lg:hidden w-full h-20 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/" className="p-4 text-2xl font-bold">
          <div className="flex items-center">
            <IoLocationSharp className=" mb-2 mr-1" />
            <h1 className="text-lg font-bold">iCab</h1>
          </div>
        </Link>
        <div className="items-center flex gap-4 text-sm">
          <Link href="/about" className="p-4 text-black font-semibold group transition-all duration-300 ease-in-out">
            <span className="bg-left-bottom bg-gradient-to-r dark:from-white dark:to-white from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              About us
            </span>
          </Link>
          <Link href="/about-us" className="font-semibold font-manrope group transition-all duration-300 ease-in-out">
            <span className="bg-left-bottom bg-gradient-to-r dark:from-white dark:to-white from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Download our App
            </span>
          </Link>
          <Link href="/services" className="p-4 font-semibold font-manrope group transition-all duration-300 ease-in-out">
            <span className="bg-left-bottom bg-gradient-to-r dark:from-white dark:to-white from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Services
            </span>
          </Link>
          <Link href="/contact" className="font-semibold font-manrope group transition-all duration-300 ease-in-out">
            <span className="bg-left-bottom bg-gradient-to-r dark:from-white dark:to-white from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Contact
            </span>
          </Link>
        </div>
      </div>
      <div className="flex items-center p-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex gap-4 items-center">
              <button><Link href="/sign-in">Sign in</Link></button>
              <button><Link href="/sign-up">Get started</Link></button>
            </div>
          </div>
        </SignedOut>
      </div>
    </div>
    );
  };

const MobileNavbar = async() => {

  return (
    <div className="hidden max-lg:block  w-full  h-16 ">
      <div className="flex justify-between">
        <Link href="/" className="text-black font-manrope font-bold p-4 items-center flex text-xl">
        <IoLocationSharp className=" mb-2 mr-1" />
          iCab
        </Link>
        <div className="flex items-center font-poppins gap-4 px-2">
        <div className="flex items-center p-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex gap-4 items-center">
              <button><Link href="/sign-in">Sign in</Link></button>
              <button><Link href="/sign-up">Get started</Link></button>
            </div>
          </div>
        </SignedOut>
      </div>
          <SheetDemo />
        </div>
      </div>
    </div>
  );
};

function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignLeft className="text-black" />
      </SheetTrigger>
      <SheetContent className="w-full mt-16">
        <div className="p-2 font-bold text-4xl space-y-8 mt-10 flex flex-col">
          <Link href="/ride" className="font-poppins">
            Ride
          </Link>
          <Link href="/ride" className="font-poppins">
            Drive
          </Link>
          <Link href="/services" className="font-poppins">
            Services
          </Link>
          <Link href="/about-us" className="font-poppins">
            About
          </Link>
          <Link href="/contact" className="font-poppins">
            Contact
          </Link>
        </div>
        <div className="mt-8 flex gap-2">
          <EarthIcon />
          <h1 className="font-medium">EN</h1>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Navbar;