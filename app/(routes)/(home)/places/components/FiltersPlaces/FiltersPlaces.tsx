import * as React from 'react'
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from '@/components/ui/select'
import { FilterPlacesProps } from './FiltersPlaces.types'
import { Trash } from 'lucide-react'
import { Button } from '@nextui-org/button'

export function FiltersPlaces(props:FilterPlacesProps){
 const {clearFilters,setFilters}=props;
 const handleFilter = (filter:string, value:string)=>{
    setFilters(filter,value);
 }
 
 
    return(
    <div className='mt-5 mb-8 gap-x-4 flex'>
        <Select onValueChange={(value)=>handleFilter("ubication",value)}>
            <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder="Department"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>All departments</SelectLabel>
                    <SelectItem value='Chalatenango'>Chalatenango</SelectItem>
                    <SelectItem value='La Libertad'>La Libertad</SelectItem>
                    <SelectItem value='Sonsonate'>Sonsonate</SelectItem>
                    <SelectItem value='Ahuachapán'>Ahuachapán</SelectItem>
                    <SelectItem value='Santa Ana'>Santa Ana</SelectItem>
                    <SelectItem value='Cuscatlán'>Cuscatlán</SelectItem>
                    <SelectItem value='San Salvador'>San Salvador</SelectItem>
                    <SelectItem value='San Vicente'>San Vicente</SelectItem>
                    <SelectItem value='Usulután'>Usulután</SelectItem>
                    <SelectItem value='Morazán'>Morazán</SelectItem>
                    <SelectItem value='San Miguel'>San Miguel</SelectItem>
                    <SelectItem value='Cabañas'>Cabañas</SelectItem>
                    <SelectItem value='Morazán'>Morazán</SelectItem>
                    <SelectItem value='La Unión'>La Unión</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
        <Select onValueChange={(value)=>handleFilter("category",value)}>
            <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder="Category"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>All departments</SelectLabel>
                    <SelectItem value='River'>River</SelectItem>
                    <SelectItem value='Mountain'>Mountain</SelectItem>
                    <SelectItem value='Lake'>Lake</SelectItem>
                    <SelectItem value='Lagoon'>Lagoon</SelectItem>
                    <SelectItem value='Beach'>Beach</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
        <Select onValueChange={(value)=>handleFilter("rating",value)}>
            <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder="Rating"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>The best </SelectLabel>
                    <SelectItem value='4.1'>4.1</SelectItem>
                    <SelectItem value='4.2'>4.2</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
        <Button onClick={clearFilters}>
        Remove filters <Trash className='w-4 h-4 ml-2'/>
        </Button>
    </div>
 )
}