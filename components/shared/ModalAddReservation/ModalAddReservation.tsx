import { Button } from "@/components/ui/button"
import { ModalAddReservationProps } from "./ModalAddReservation.types"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Room } from "@prisma/client";

import { useState } from "react";
import {DateRange} from 'react-day-picker';
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import {CalendarSelector} from "./CalendarSelector/CalendarSelector";
import { addDays } from "date-fns";




export default function ModalAddReservation(props: ModalAddReservationProps) {

  const {room} = props;
  const [dateSelected, setDateSelected] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  const onReserveRoom = async (room: Room, dateSelected: DateRange) => {
    const response = await axios.post("/api/checkout", {
      roomId: room.id,
      pricePerNight: room.pricePerNight,
      startDate: dateSelected.from,
      endDate: dateSelected.to,
      roomName: room.name,
    });

    window.location = response.data.url;
    toast({
      title: "Room reserved",
    });
  }

  return (
    <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline" className="w-full mt-3">
      Reserve Room
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
        Select the dates you want to rent the room
        </AlertDialogTitle>
        <AlertDialogDescription>
          <CalendarSelector
            setDateSelected={setDateSelected}
            pricePerNight={room.pricePerNight}
          />
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={() => onReserveRoom(room, dateSelected)}>
        Reserve Room
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  )
}
