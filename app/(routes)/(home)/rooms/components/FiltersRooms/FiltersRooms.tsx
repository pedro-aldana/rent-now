import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FiltersRoomsProps } from "./FiltersRooms.types";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FiltersRooms(props: FiltersRoomsProps) {
  const { clearFilters, setFilters, filters } = props;

  const handleFilter = (filter: string, value: string) => {
    setFilters(filter, value);
  };

  const filterOptions = [
    {
      label: "Price per night",
      filterName: "pricePerNight",
      placeholder: "Price per night",
      options: [
        { value: "50", label: "Less than $50" },
        { value: "100", label: "Less than $100" },
        { value: "200", label: "Less than $200" },
      ],
    },
    {
      label: "Beds",
      filterName: "beds",
      placeholder: "Number of beds",
      options: [
        { value: "1", label: "1 bed" },
        { value: "2", label: "2 bed" },
        { value: "3", label: "3 bed" },
      ],
    },
    {
      label: "Bathrooms",
      filterName: "baths",
      placeholder: "Number of bathrooms",
      options: [
        { value: "1", label: "1 bathroom" },
        { value: "2", label: "2 bathroom" },
        { value: "3", label: "3 bathroom" },
      ],
    },
    {
      label: "Capacity",
      filterName: "capacity",
      placeholder: "Capacity",
      options: [
        { value: "2", label: "2 people" },
        { value: "4", label: "4 people" },
        { value: "6", label: "6 people" },
      ],
    },
    
  ];

  return (
    <div className="mt-5 mb-8 flex flex-col space-y-2 md:flex-row md:space-y-0 md:gap-5">
      {filterOptions.map((filter) => (
        <Select
          key={filter.filterName}
          onValueChange={(value) => handleFilter(filter.filterName, value)}
          
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={filter.placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{filter.label}</SelectLabel>
              {filter.options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      ))}

      <Button variant="destructive" onClick={clearFilters}>
      Clean filters <Trash className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
