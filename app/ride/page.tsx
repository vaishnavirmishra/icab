import Map, { RideOption } from "@/components/custom/Map";
import { DashboardNavbar } from "@/components/custom/Navbar";

const RidePage = () => {
  const rideOptions: RideOption[] = [
    {
      name: 'iCab Auto',
      price: 71.66,
      estimatedTime: '3 mins',
      isFaster: true,
      Img:"https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/TukTuk_Green_v1.png"
    },
    {
      name: 'iCab Moto',
      price: 50.0,
      estimatedTime: '5 mins',
      Img: "https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/Uber_Moto_India1.png"
    },
    {
      name: 'iCab Go ',
      price: 50.0,
      estimatedTime: '5 mins',
      Img:"https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberGo_v1.png"
    },
    {
      name: 'Premier',
      price: 100,
      estimatedTime: '5 mins',
      Img:"https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/package_UberComfort_new_2022.png"
    },
    {
      name: 'Go Sedan',
      price: 75,
      estimatedTime: '5 mins',
      Img:"https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/Select_v1.png"
    },
    {
      name: 'iCab XL',
      price: 210,
      estimatedTime: '5 mins',
      Img:"https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/package_UberXL_new_2022.png"
    },
    {
      name: 'Package',
      price: 38,
      estimatedTime: '1 mins',
      Img:"https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/uber_connect_1.png"
    },
  ];

  return (
    <>
      <DashboardNavbar />
      <div className="flex h-screen">
        <Map rideOptions={rideOptions} />
      </div>
    </>
  );
};

export default RidePage;
