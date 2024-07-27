"use client";
import { Montserrat } from "next/font/google";
import { IoLocationOutline, IoNavigateCircle } from "react-icons/io5";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const mons = Montserrat({ subsets: ["latin"] });

const AddressAutofill = dynamic(() => import('@mapbox/search-js-react').then((mod) => mod.AddressAutofill), {
  ssr: false,
});

const Hero = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const handlePickupSelect = (event:any) => {
    const { feature } = event.detail;
    setPickup(feature.properties.address);
  };

  const handleDestinationSelect = (event:any) => {
    const { feature } = event.detail;
    setDestination(feature.properties.address);
  };

  return (
    <div className="w-full p-8">
      <div className="flex max-lg:flex-col justify-between">
        <div>
          <h1 className={`${mons.className} font-bold text-5xl`}>We&apos;ll take you</h1>
          <h1 className={`${mons.className} flex mt-2 items-center font-bold text-4xl`}>
            Place <IoLocationOutline className="ml-1" />
          </h1>
          <p className={`${mons.className} mt-4 font-normal text-4xl`}>
            Where <span className="ml-3">ever,</span>
          </p>
          <p className={`${mons.className} flex mt-2 font-normal text-4xl`}>
            When <span className="ml-3">ever</span>
          </p>
          <div className="mt-6 max-w-md">
            <p className={`${mons.className} whitespace-normal leading-relaxed text-justify text-gray-400`}>
              We have Car Rentals, an Online cab booking, providing customers with reliable Local taxi booking services
            </p>
            <form className="flex lg:items-center max-lg:flex-col">
              <div className="p-2">
                <Label>From</Label>
                <AddressAutofill 
                  accessToken="pk.eyJ1IjoidGVzdHVzcnIiLCJhIjoiY2x3ejhiaHcxMDRtZzJpc2VtaXFpc3lpeCJ9.8TIx8H5Jdc8-QOtaR9fH_Q"
                  onRetrieve={handlePickupSelect}
                >
                  <Input
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Enter Pickup Location"
                    autoComplete="shipping address-line1"
                    className="mt-2 bg-gray-300 text-xsm max-lg:w-full"
                  />
                </AddressAutofill>
              </div>
              <div className="flex max-lg:hidden items-center">
                <IoNavigateCircle size={30} className="items-center mt-6 ml-2 flex justify-center" />
              </div>
              <div className="p-3">
                <Label>To</Label>
                <AddressAutofill 
                  accessToken="pk.eyJ1IjoidGVzdHVzcnIiLCJhIjoiY2x3ejhiaHcxMDRtZzJpc2VtaXFpc3lpeCJ9.8TIx8H5Jdc8-QOtaR9fH_Q"
                  onRetrieve={handleDestinationSelect}
                >
                  <Input
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Enter Destination"
                    autoComplete="shipping address-line1"
                    className="mt-2 bg-gray-300 text-xsm"
                  />
                </AddressAutofill>
              </div>
            </form>
            <div className="p-2">
              <Button className="">
                <Link href={`/ride/?pickup=${pickup}&drop=${destination}`}>Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <img
            src="https://media.gettyimages.com/id/97463895/video/couple-hailing-cab-in-times-square-at-night-new-york-city-new-york-state-usa.jpg?s=640x640&k=20&c=P0pM7zexVuLFC0otKxhnWoqPEPFGb__QN3vbUXCeYV0="
            width={500}
            height={500}
            alt="hero"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
