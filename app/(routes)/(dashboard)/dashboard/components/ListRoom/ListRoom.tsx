"use client";
import { Room } from "@prisma/client";
import { ListRoomProps } from "./ListRoom.types";
import Image from "next/image";
import { 
  Bed, 
  Bath, 
  MapPin, 
  Mail, 
  Phone, 
  Euro, 
  Users, 
  Heart 
} from "lucide-react";
import { useLovedRooms } from "@/hooks/use-loved-rooms";
import ModalAddReservation from "@/components/shared/ModalAddReservation/ModalAddReservation";

export default function ListRoom(props: ListRoomProps) {
  const { rooms } = props;
  const { addLoveItem, removeLovedItem, lovedItems } = useLovedRooms();

  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
      {rooms.map((room: Room) => {
        const {
          id,
          photo,
          name,
          description,
          pricePerNight,
          beds,
          baths,
          capacity,
          location,
          contactEmail,
          contactPhone,
        } = room;

        const likedRoom = lovedItems.some((item) => item.id === room.id);

        return (
          <div key={id} className="p-1 rounded-lg shadow-md hover:shadow-lg">
            <Image
              src={photo}
              alt={name}
              width={400}
              height={600}
              className="rounded-lg"
            />
            <div className="p-3">
              <div className="flex flex-col mb-3 gap-x-4">
                <p className="text-xl font-bold">{name}</p>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
              <div className="mb-3">
                <p className="flex items-center">
                  <Euro className="h-4 w-4 mr-2" strokeWidth={1} />
                  {pricePerNight} / night
                </p>
                <p className="flex items-center">
                  <Bed className="h-4 w-4 mr-2" strokeWidth={1} />
                  {beds} beds
                </p>
                <p className="flex items-center">
                  <Bath className="h-4 w-4 mr-2" strokeWidth={1} />
                  {baths} bathrooms
                </p>
                <p className="flex items-center">
                  <Users className="h-4 w-4 mr-2" strokeWidth={1} />
                  capacity: {capacity} people
                </p>
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" strokeWidth={1} />
                  {location}
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" strokeWidth={1} />
                  {contactEmail}
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" strokeWidth={1} />
                  {contactPhone}
                </p>
              </div>
              <div className="flex items-center justify-center gap-x-3">
                <ModalAddReservation room={room} />
                <Heart
                  className={`mt-2 cursor-pointer ${likedRoom ? "fill-black" : "stroke-black"}`}
                  onClick={
                    likedRoom
                      ? () => removeLovedItem(room.id)
                      : () => addLoveItem(room)
                  }
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
