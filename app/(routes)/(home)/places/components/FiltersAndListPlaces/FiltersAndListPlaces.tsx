"use client"
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { FilterPlacesProps } from "./FiltersAndListPlaces.types";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Place } from "@prisma/client";
import { ListPlaces } from "../ListPlaces";
import { FiltersPlaces } from "../FiltersPlaces";

export function FilterPlacesAndListPlaces(props: FilterPlacesProps) {
  const { places } = props;
  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>(places || []);
  const [filters, setFilters] = useState({
    ubication: "",
    category: "",
    rating: "",
    search: "",
  });

  useEffect(() => {
    let filtered = places;

    if (filters.search) {
      filtered = filtered.filter(place =>
        place.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        (place.description ?? '').toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.ubication) {
      filtered = filtered.filter((place) =>
        place.ubication.toLowerCase().includes(filters.ubication.toLowerCase())
      );
    }

    if (filters.category) {
      filtered = filtered.filter((place) =>
        (place.category ?? '').toLowerCase().includes(filters.category.toLowerCase())
      );
    }
    
    if (filters.rating) {
      filtered = filtered.filter(
        (place) => place.rating.toString() === filters.rating
      );
    }

    setFilteredPlaces(filtered);
  }, [filters, places]);

  const handleFilterChange = (filterName: string, filterValue: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue
    }));
  };

  const clearFilters = () => {
    setFilters({
      ubication: "",
      category: "",
      rating: "",
      search: "",
    });
  };

  return (
    <div>
      <FiltersPlaces
        setFilters={handleFilterChange}
        clearFilters={clearFilters}
      />
      <ListPlaces places={filteredPlaces} />
    </div>
  );
}
