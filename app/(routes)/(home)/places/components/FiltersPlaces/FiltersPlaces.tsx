import * as React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trash } from 'lucide-react';
import { FilterPlacesProps } from './FiltersPlaces.types';
import { Button } from '@nextui-org/button';

export function FiltersPlaces({ clearFilters, setFilters }: FilterPlacesProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleFilter = (filter: string, value: string) => {
    setFilters(filter, value);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setFilters('search', e.target.value); // Enviar el texto de búsqueda a los filtros
  };
  const handleClearFilters = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
      clearFilters();
    }, 500);
  };

  return (
    <div className="flex flex-wrap mt-5 mb-8 gap-4">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search places..."
        className="border rounded-md p-2 w-[180px]"
      />
      <Select onValueChange={(value) => handleFilter('ubication', value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Department" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>All departments</SelectLabel>
            <SelectItem value="Chalatenango">Chalatenango</SelectItem>
            <SelectItem value="La Libertad">La Libertad</SelectItem>
            <SelectItem value="Sonsonate">Sonsonate</SelectItem>
            <SelectItem value="Ahuachapán">Ahuachapán</SelectItem>
            <SelectItem value="Santa Ana">Santa Ana</SelectItem>
            <SelectItem value="Cuscatlán">Cuscatlán</SelectItem>
            <SelectItem value="San Salvador">San Salvador</SelectItem>
            <SelectItem value="San Vicente">San Vicente</SelectItem>
            <SelectItem value="Usulután">Usulután</SelectItem>
            <SelectItem value="Morazán">Morazán</SelectItem>
            <SelectItem value="San Miguel">San Miguel</SelectItem>
            <SelectItem value="Cabañas">Cabañas</SelectItem>
            <SelectItem value="La Unión">La Unión</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilter('category', value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>The best Categories</SelectLabel>
            <SelectItem value="River">River</SelectItem>
            <SelectItem value="Mountain">Mountain</SelectItem>
            <SelectItem value="Lake">Lake</SelectItem>
            <SelectItem value="Lagoon">Lagoon</SelectItem>
            <SelectItem value="Beach">Beach</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilter('rating', value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Rating" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Best Ratings</SelectLabel>
            <SelectItem value="4.1">4.1</SelectItem>
            <SelectItem value="4.2">4.2</SelectItem>
            <SelectItem value="4.3">4.3</SelectItem>
            <SelectItem value="4.4">4.4</SelectItem>
            <SelectItem value="4.5">4.5</SelectItem>
            <SelectItem value="4.6">4.6</SelectItem>
            <SelectItem value="4.7">4.7</SelectItem>
            <SelectItem value="4.8">4.8</SelectItem>
            <SelectItem value="4.9">4.9</SelectItem>
            <SelectItem value="5">5</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button
        variant="ghost"
        className="bg-gradient-to-tr from-[#1a2e05] to-[#052e16] text-white shadow-lg"
        onClick={handleClearFilters}
      >
        Remove filters
        <div
          className={`ml-2 transform transition-transform duration-500 ${
            isOpen ? 'rotate-12 scale-125' : ''
          }`}
        >
          <Trash className="w-4 h-4" />
        </div>
      </Button>
    </div>
  );
}