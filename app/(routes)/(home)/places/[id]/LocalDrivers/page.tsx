import { NavBar } from "@/components/Shared/NavBar";
import { AirVent, Music4, PersonStanding, User } from "lucide-react";
import Link from "next/link";

export default function LocalDrivers() {
  return (
    <div>
      <NavBar />
      <div className="ml-6 mt-4">
        <h3 className="text-2xl sm:text-3xl text-center font-bold">Vehicles available</h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 lg:mt-5 text-center max-w-3xl mx-auto mb-5 lg:mb-10">
          Here is a list of vehicles that are available to take you to the site
        </p>
      </div>
      <Link href="https://api.whatsapp.com/send?phone=71108867&text=Necesito%20un%20viaje%20hacia....">
        <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl mx-auto my-6 p-4 space-x-0 sm:space-x-4">
          {/* Imagen del vehículo */}
          <div className="sm:w-1/3 mb-4 sm:mb-0">
            <img 
              src="https://www.fmdt.info/vehicle/nissan/2018/altima-25-sv-32-white.png" 
              alt="Carro Gris" 
              className="h-48 sm:h-full w-full object-cover rounded-lg"
            />
          </div>

          {/* Información del vehículo */}
          <div className="sm:w-2/3 p-4">
            <h2 className="text-lg font-semibold">Nissan Altima 2018</h2>
            <ul className="mt-2 space-y-2">
              <p className="flex items-center">
                <AirVent className="h-4 w-4 mr-2" strokeWidth={1} />
                Good A/C
              </p>
              <p className="flex items-center">
                <PersonStanding className="h-4 w-4 mr-2" strokeWidth={1} />
                Enough space (4 persons)
              </p>
              <p className="flex items-center">
                <Music4 className="h-4 w-4 mr-2" strokeWidth={1} />
                Music during the trip
              </p>
              <p className="flex items-center">
                <User className="h-4 w-4 mr-2" strokeWidth={1} />
                Roberto Trejo
              </p>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
}
