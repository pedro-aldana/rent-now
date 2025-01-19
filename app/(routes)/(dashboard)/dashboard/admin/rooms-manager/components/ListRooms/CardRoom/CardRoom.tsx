"use client";
import { Button } from "@/components/ui/button";
import { Toilet, MapPin, CircleDollarSign, Trash, Upload, Users, BedDouble } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";


import { CardRoomProps } from './CardRoom.types'
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import ButtonEditRoom from "./ButtonEditRoom/ButtonEditRoom";

export default function CardRoom(props: CardRoomProps) {

  const { room } = props;

  const router = useRouter();


  const deleteRoom = async () => {
    try {
      await axios.delete(`/api/room/${room.id}`)
      toast({
        title: "Room deleted ❌",
        
      })
      router.refresh()
    } catch (error) {
      toast({
        title: "Something went wrong ",
        variant: "destructive",
      })
    }
  }

  const handlerPublishRoom = async (isPublished: boolean) => {
      try {
        await axios.patch(`/api/room/${room.id}`, {
          isPublished
        });
        if (isPublished) {
          toast({
            title: "Room published ✅",
          })
        }else {
          toast({
            title: "Room unpublished ⚠️",
          })
        }
        router.refresh()
      } catch (error) {
        toast({
          title: "Something went wrong ",
          variant: "destructive",
        })
      }
  }

  return (
    <div className="relative p-1 bg-white rounded-lg shadow-sm hover:shadow-md">
      <Image
        src={room.photo}
        alt={room.name}
        width={400}
        height={600}
        className="rounded-lg"
      />
      {room.isPublished? (
        <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-green-700 rounded-t-lg">Published</p>
      ) : (
        <p className="absolute top-0 left-0 right-0 w-full p-1 text-center text-white bg-red-300 rounded-t-lg">
          Not Published
        </p>
      )}

      <div className="relative p-3">
          <div className="flex flex-col mb-3 gap-x-4">
            <p className="text-xl min-h-16 lg:min-h-fit">{room.name}</p>
            <p className="text-sm text-gray-600">{room.location}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-4">
            <p className="flex items-center">
              <CircleDollarSign className="h-4 w-4 mr-2" strokeWidth={1} />
              {room.pricePerNight}€ /day
            </p>

            <p className="flex items-center">
            <BedDouble className="h-4 w-4 mr-2" strokeWidth={1} />
            
              {room.beds}
            </p>

            <p className="flex items-center">
              <Toilet className="h-4 w-4 mr-2" strokeWidth={1} />
              {room.baths}
            </p>

            <p className="flex items-center">
              <Users className="h-4 w-4 mr-2" strokeWidth={1} />
              {room.capacity}
            </p>
           
          </div>

          <div className="flex justify-between mt-3 gap-x-4">
            <Button variant="destructive" onClick={deleteRoom}>
              Delete
              <Trash className="h-4 w-4 ml-2" />
            </Button>

            <ButtonEditRoom roomData={room} />
          </div>

          {room.isPublished ? (
            <Button
            className="w-full mt-3"
            variant="outline"
            onClick={() => handlerPublishRoom(false)}
          >
            Unpublish
            <Upload className="w-4 h-4 ml-2" />
          </Button>
          ): (
            <Button
            className="w-full mt-3"
            onClick={() => handlerPublishRoom(true)}
          >
            Publish
            <Upload className="w-4 h-4 ml-2" />
          </Button>
          )}

      </div>

    </div>
  )
}
