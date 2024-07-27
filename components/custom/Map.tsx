"use client"

import React, { useState, useEffect, useRef, Suspense } from 'react';
import mapboxgl, { LngLatLike } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from 'axios';
import { SelectDemo } from '../Select';
import { Button } from '../ui/button';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const Fallback = () => <div>Loading...</div>;

mapboxgl.accessToken = 'pk.eyJ1IjoidGVzdHVzcnIiLCJhIjoiY2x3ejhiaHcxMDRtZzJpc2VtaXFpc3lpeCJ9.8TIx8H5Jdc8-QOtaR9fH_Q';

export interface RideOption {
  name: string;
  price: number;
  estimatedTime: string;
  isFaster?: boolean;
  Img: string;
}

interface MapProps {
  rideOptions: RideOption[];
}

const Map: React.FC<MapProps> = ({ rideOptions }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [startLocation, setStartLocation] = useState<[number, number] | null>(null);
  const [endLocation, setEndLocation] = useState<[number, number] | null>(null);
  const [selectedRide, setSelectedRide] = useState<RideOption | null>(null);

  const searchParams = useSearchParams();
  const pickup = searchParams.get('pickup');
  const drop = searchParams.get('drop');

  useEffect(() => {
    const fetchCoordinates = async (address: string): Promise<[number, number]> => {
      try {
        const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json`, {
          params: {
            access_token: mapboxgl.accessToken,
          },
        });
        const coordinates = response.data.features[0]?.geometry.coordinates;
        if (!coordinates || coordinates.length < 2) {
          throw new Error("Invalid coordinates");
        }
        return [coordinates[0], coordinates[1]] as [number, number];
      } catch (error) {
        console.error("Error fetching coordinates:", error);
        return [0, 0];
      }
    };

    const initializeMap = async () => {
      if (pickup && drop) {
        const startCoords = await fetchCoordinates(pickup);
        const endCoords = await fetchCoordinates(drop);
        setStartLocation(startCoords);
        setEndLocation(endCoords);

        const mapInstance = new mapboxgl.Map({
          container: mapContainerRef.current!,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: startCoords,
          zoom: 12,
        });

        new mapboxgl.Marker().setLngLat(startCoords as LngLatLike).addTo(mapInstance);
        new mapboxgl.Marker().setLngLat(endCoords as LngLatLike).addTo(mapInstance);

        mapInstance.on('load', () => {
          mapInstance.addSource('route', {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates: [startCoords, endCoords],
              },
            },
          });

          mapInstance.addLayer({
            id: 'route',
            type: 'line',
            source: 'route',
            layout: {
              'line-join': 'round',
              'line-cap': 'round',
            },
            paint: {
              'line-color': '#888',
              'line-width': 6,
            },
          });
        });

        setMap(mapInstance);
      }
    };

    initializeMap();
  }, [pickup, drop]);

  return (
    <div className="flex max-lg:flex-col-reverse h-full w-full">
      <div className="w-1/2 max-lg:w-full h-full p-4 overflow-y-auto">
        <div className="choose-ride bg-gray-100 p-4 rounded-md mb-4">
          <h2 className="text-2xl font-bold">Choose a ride</h2>
          <Suspense fallback={<Fallback />}>
            <p>{pickup} → {drop}</p>
          </Suspense>
          <p>Leave Now</p>
        </div>
        <div className="recommended">
          <h3 className="text-xl font-semibold">Recommended</h3>
          {rideOptions.map((option, index) => (
            <div
              key={index}
              className={`ride-option cursor-pointer flex items-center justify-between bg-white p-4 rounded-md shadow-md mb-4 ${selectedRide?.name === option.name ? 'border-2 border-black' : ''
                }`}
              onClick={() => setSelectedRide(option)}
            >
              <div className="ride-option-details flex items-center">
                <img src={option.Img} alt="vehicle icon" className="w-24 h-24 mr-4" />
                <div>
                  <h4 className="text-lg font-bold">{option.name}</h4>
                  <p>{option.estimatedTime} away</p>
                  <p>₹{option.price.toFixed(2)}</p>
                  {option.isFaster && <span className="text-sm text-blue-500">Faster</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='fixed  bottom-0 m-4 rounded-xl bg-gray-100 shadow-lg shadow-gray-400 w-[26rem] max-lg:w-[20rem]'>
          <div className='p-8 h-18 flex max-lg:flex-col gap-8 max-lg:gap-4'>
            <div>
              <SelectDemo />
            </div>
            <Button><Link href="/booking-confirm">{selectedRide ? `Request ${selectedRide.name}` : 'Request iCab'}</Link></Button>
          </div>
        </div>
      </div>
      <div ref={mapContainerRef} className="w-1/2 max-lg:w-full h-full" />
    </div>
  );
};

export default Map;
