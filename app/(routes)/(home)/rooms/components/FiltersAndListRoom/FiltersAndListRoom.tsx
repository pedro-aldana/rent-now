"use client";

import { Room } from "@prisma/client";
import { useState, useEffect } from "react";
import { FiltersAndListRoomProps } from "./FiltersAndListRoom.types";
import ListRoom from "../ListRoom/ListRoom";
import FiltersRooms from "../FiltersRooms/FiltersRooms";

export default function FiltersAndListRoom(props: FiltersAndListRoomProps) {
  const { rooms } = props;

  const [filteredRooms, setFilteredRooms] = useState<Room[]>(rooms);
  const [filters, setFilters] = useState({
    pricePerNight: "",
    beds: "",
    baths: "",
    capacity: "",
    location: "",
  });

  useEffect(() => {
    let filtered = rooms;

    if (filters.pricePerNight) {
      filtered = filtered.filter(
        (room) => room.pricePerNight <= parseInt(filters.pricePerNight, 10)
      );
    }
    if (filters.beds) {
      filtered = filtered.filter(
        (room) => room.beds === parseInt(filters.beds, 10)
      );
    }
    if (filters.baths) {
      filtered = filtered.filter(
        (room) => room.baths === parseInt(filters.baths, 10)
      );
    }
    if (filters.capacity) {
      filtered = filtered.filter(
        (room) => room.capacity >= parseInt(filters.capacity, 10)
      );
    }
    if (filters.location) {
      filtered = filtered.filter((room) =>
        room.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    setFilteredRooms(filtered);
  }, [filters, rooms]);

  const handleFilterChange = (filterName: string, filterValue: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  const clearFilters = () => {
    setFilters({
      pricePerNight: "",
      beds: "",
      baths: "",
      capacity: "",
      location: "",
    });
  };

  return (
    <div>
      <FiltersRooms
        setFilters={handleFilterChange}
        clearFilters={clearFilters}
        filters={filters}
      />
      <ListRoom rooms={filteredRooms} />
    </div>
  );
}
