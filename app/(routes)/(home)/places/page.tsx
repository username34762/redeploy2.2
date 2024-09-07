
import { NavBar } from "@/components/Shared/NavBar";
import { db } from "@/lib/db";
import HeaderPlaces from "./components/HeaderPlaces/HeaderPlaces";
import { FilterPlacesAndListPlaces } from "./components/FiltersAndListPlaces";


export default async function pagePlaces(){
    const places = await db.place.findMany({
        where: {
            isPublish: true
        },
        orderBy:{
            rating: "desc"
        }
    })
    
    
    return(
        <div>
        <NavBar/>
        
        <div className="p-6 mx-auto max-w-7xl">
            <HeaderPlaces/>
            <div>
            <FilterPlacesAndListPlaces places={places}/>
            </div>
        </div>
        </div>
    )
}