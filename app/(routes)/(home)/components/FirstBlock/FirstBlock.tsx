import { Reveal } from "@/components/Shared/Reveal";
import Image from "next/image";

export default function FirstBlock() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-0 lg:py-24 items-center overflow-hidden lg:mt-0 lg:pt-12 gap-6">
      <Reveal
        classname="p-4 lg:pl-16 flex flex-col justify-center"
        position="bottom"
      >
    
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold md:justify-center md:text-center md:mb-5">
          Places
          <span className="block text-xl md:text-2xl lg:text-3xl">
            in El Salvador
          </span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl mt-2 lg:mt-2 max-w-md lg:max-w-lg md:mb-20 md:justify-center md:text-center md:flex md:mx-auto ">
         El Salvador is more than just beaches. It`s a country full of hidden treasures waiting 
         to be explored. Discover unique places where nature and culture meet. Start your journey and see the real El Salvador
        </p>
      </Reveal>
      
        <div className="flex justify-center items-center w-full md:justify-center md:flex">
          <Image
            src="/images/elsalvador.jpeg"
            alt="Vista panorámica de un parque de diversiones en El Salvador al atardecer"
            height={400}
            width={600}
            priority
            className="rounded-3xl object-cover"
          />
        </div>
      
    </div>
  );
}
