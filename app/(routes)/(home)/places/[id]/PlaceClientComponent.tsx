"use client";
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { Button } from '@nextui-org/button';
import { MapPin, Heart, Tag , CalendarX, Car, Flag, AlarmCheck, Citrus, Cross, Check} from 'lucide-react';
import { NavBar } from '@/components/Shared/NavBar';

import { useLovedPlaces } from "@/hooks/use-loved-places";
import { useAuth } from "@clerk/nextjs";
import { Place } from "@prisma/client";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Home from '@/app/page';
import {Link} from "@nextui-org/react";
import Rating from './rainting';


export default function PlaceClientComponent({ place }: { place: Place }) {
  const { addLovedItem, lovedItems, removeLovedItem } = useLovedPlaces();
  const likedPlace = lovedItems.some((item) => item.id === place.id);
  
  
  const availability = [
    "Public Restrooms",
    "Shops or Kiosks",
    "Trash Cans or Waste Containers",
    "Picnic Areas",
    "Camping Zones",
    "Hiking Trails",
    "Viewpoints",
    "Parking Lots",
    "Information Booths",
    "Fishing Areas",
    "Swimming Areas",
  ];

  const hours = {
    Monday: "8:00 AM - 5:00 PM",
    Tuesday: "8:00 AM - 6:00 PM",
    Wednesday: "Closed",
    Thursday: "8:00 AM - 6:00 PM",
    Friday: "8:00 AM - 6:00 PM",
    Saturday: "8:00 AM - 4:00 PM",
    Sunday: "8:00 AM - 6:00 PM",
  };

  const handleGoClick = () => {
    const encodedPlace = encodeURIComponent(place.name);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedPlace}`;
    window.open(mapsUrl, '_blank');
  };

  // Función para manejar las clases de los tabs
  const getTabClassName = (isSelected: boolean, activeColor: string) => {
    return isSelected ? `text-bold ${activeColor}` : 'text-gray-500';
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="relative col-span-2 h-[300px] md:h-[400px]">
            <Image
              src={place.photo}
              alt={place.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute top-4 right-4">
              <button className="bg-white text-black py-1 px-3 rounded-lg shadow-md">ALL PHOTOS</button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative h-[145px] md:h-[195px]">
              <Image
                src={place.photo}
                alt="Secondary Image 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative h-[145px] md:h-[195px]">
              <Image
                src={place.photo}
                alt="Secondary Image 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-semibold mb-4">{place.name}</h1>
            <div className="flex items-center mb-6">
              <FaStar className="text-yellow-500 mr-2" />
              <span className="text-xl font-semibold">{place.rating}</span>
              <span className="text-gray-500 ml-2">(18 Reviews)</span>
            </div>

            <Tabs
  aria-label="Options"
 variant='light'
>
  <Tab
    key="about"
    title="About"
    className="text-green-500 text-center"
  >
    <Card className='no-shadow'>
      <CardBody>
        <p className="text-gray-700 leading-relaxed mb-10">
          {place.description}
        </p>
        <h3 className="text-xl font-semibold mb-4">Amenities</h3>
        <ul className="list-disc ml-4 text-gray-700 space-y-2">
          {availability.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardBody>
    </Card>
  </Tab>
  
  <Tab
    key="tours"
    title="Tours"
    className="text-purple-700 text-center"
  >
    <Card className='no-shadow'>
      <CardBody>
      
      <p className="flex items-center  ">
      <CalendarX className="h-4 w-4 mr-2" strokeWidth={1} />
      <p className='font-semibold'>Cancelation</p>
      </p>
      <p className="text-sm ml-6">Cancel your participation 24h before</p>

      <p className="flex items-center mt-5  ">
      <Flag className="h-4 w-4 mr-2" strokeWidth={1} />
      <p className='font-semibold'>Languages</p>
      </p>
      <p className="text-sm ml-6">Spanish and English are aveilables</p>

      <p className="flex items-center  mt-5 ">
      <AlarmCheck className="h-4 w-4 mr-2" strokeWidth={1} />
      <p className='font-semibold'>Departure time</p>
      </p>
      <p className="text-sm ml-6">Departure time will be provided by the organizer.</p>

      <p className="flex items-center mt-5  ">
      <Citrus className="h-4 w-4 mr-2" strokeWidth={1} />
      <p className='font-semibold'>Food</p>
      </p>
      <p className="text-sm ml-6">Food is allowed </p>

      <p className="flex items-center  mt-5 ">
      <Cross className="h-4 w-4 mr-2" strokeWidth={1} />
      <p className='font-semibold'>Medical services</p>
      </p>
      <p className="text-sm ml-6">Hospital nearby if you need it</p>

      <p className="flex items-center  mt-5 ">
      <Check className="h-4 w-4 mr-2" strokeWidth={1} />
      <p className='font-semibold'>Enjoy it!</p>
      </p>
      <p className="text-sm ml-6">Now all that remains is to enjoy our country</p>
      
      
      
      </CardBody>
    </Card>
  </Tab>
</Tabs>

          </div>
          <div className="border rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Location</h3>
              <Heart
                className={`cursor-pointer ${likedPlace && "fill-black"}`}
                onClick={likedPlace ? () => removeLovedItem(place.id) : () => addLovedItem(place)}
              />
            </div>
            <p className="flex items-center mb-2">
              <MapPin className="h-4 w-4 mr-2" strokeWidth={1} />
              {place.ubication}
            </p>
            <p className="flex items-center mb-6">
              <Tag className="h-4 w-4 mr-2" strokeWidth={1} />
              {place.category}
            </p>
  
            <Button
              className="w-full py-2 rounded-xl mt-3 bg-[#4fb350]"
              variant="ghost"
              onClick={handleGoClick}
            >
              GO
            </Button>
  
            <h3 className="text-xl font-semibold mt-10 mb-4">Hours</h3>
            <ul className="text-gray-700 space-y-2">
              {Object.entries(hours).map(([day, hours], index) => (
                <li key={index}>
                  <span className="font-semibold">{day}:</span> {hours}
                </li>
              ))}
            </ul>
  
            
            <div className="flex flex-col items-center"> 
      <Link href="../home">
        <Button className='rounded-xl w-[350px] bg-slate-900 mt-3 text-white' variant='ghost'>
          Drivers available
          <Car className='ml-2' />
        </Button>
      </Link>
      
      <Link
        href="https://github.com/nextui-org/nextui"
        isExternal
        showAnchorIcon
        className="mt-6 text-center text-blue-500 hover:underline" 
      >
        Add your tour now!
      </Link>
    </div>
    
          </div>
        </div>
      </div>
    </>
  );
}
