"use client";
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { Button } from '@nextui-org/button';
import { MapPin, Heart, Tag } from 'lucide-react';
import { NavBar } from '@/components/Shared/NavBar';
import Link from "next/link";
import { useLovedPlaces } from "@/hooks/use-loved-places";
import { useAuth } from "@clerk/nextjs";
import { Place } from "@prisma/client";

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

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 ">
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
            <h2 className="text-2xl font-semibold mb-6">About</h2>
            <p className="text-gray-700 leading-relaxed mb-10">{place.description}</p>
            <h3 className="text-xl font-semibold mb-4">Amenities</h3>
            <ul className="list-disc ml-4 text-gray-700 space-y-2">
              {availability.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
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
  
  <Button className="w-full py-2 rounded-3xl mt-6 bg-[#4fb350]" variant="ghost" onClick={handleGoClick}>
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
  
  <h3 className="text-bold text-3xl text-center mt-8 text-[#9747FF]">Tours coming soon!</h3>
</div>

        </div>
      </div>
    </>
  );
}
