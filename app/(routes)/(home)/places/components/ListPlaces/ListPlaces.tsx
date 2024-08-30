import { Button } from "@/components/ui/button";
import { Place } from "@prisma/client";
import Image from "next/image";
import { FaStar, FaSuitcase } from 'react-icons/fa';
import { MapPin, Heart } from "lucide-react";
import { ListPlacesProps } from "./ListPlaces.types";
import Link from "next/link";
import { useLovedPlaces } from "@/hooks/use-loved-places";
import { useAuth } from "@clerk/nextjs";
import { SkeletonPlaces } from "@/components/Shared/SkeletonPlaces";

export function ListPlaces(props: ListPlacesProps) {
  const { places } = props;
  const { userId } = useAuth();
  const { addLovedItem, lovedItems, removeLovedItem } = useLovedPlaces();

  if (!places) {
    return <SkeletonPlaces />;
  }

  return (
    <>
      {places.length === 0 && <p>Places not found</p>}
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
        {places.map((place: Place) => {
          const { photo, id, name, description, rating, ubication } = place;
          const likedPlace = lovedItems.some((item) => item.id === place.id);

          return (
            <div key={id} className="p-1 rounded-3xl shadow-md hover:shadow-lg">
              <Link href={`/places/${id}`}>
                <Image src={photo} alt={name} width={400} height={500} className="rounded-3xl" />
                <div className="p-3">
                  <div className="flex flex-col mb-3 gap-x-4">
                    <p className="text-xl min-h-16 lg:min-h-fit">{name}</p>
                  </div>
                  <p className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" strokeWidth={1} />
                    {ubication}
                  </p>
                </div>
              </Link>
              <div className="flex flex-col px-3">
                <div className="flex items-center justify-between">
                 
                  <div className="flex items-center text-yellow-500">
                    <span className="text-lg font-semibold">{rating}</span>
                    <FaStar className="ml-1" />
                  </div>

                
                  <div className="flex-1 flex justify-center">
                    <Link href={`/places/${id}`}>
                      <button
                        className="flex items-center justify-center bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold"
                      >
                        GO <FaSuitcase className="ml-1" />
                      </button>
                    </Link>
                  </div>

                  
                  {userId && (
                    <Heart
                      className={`cursor-pointer ${likedPlace && "fill-black"}`}
                      onClick={likedPlace ? () => removeLovedItem(place.id) : () => addLovedItem(place)}
                    />
                  )}
                </div>

                {!userId && (
                  <div className="mt-4 text-center">
                    <Link href="/sign-up">
                      <Button variant="outline" className="w-full rounded-3xl">Sign Up</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
