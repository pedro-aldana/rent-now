"use client";
import { Button } from "@/components/ui/button";
import { ButtonEditRoomProps } from "./ButtonEditRoom.types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { useState } from "react";
import FormEditRoom from "../FormEditRoom/FormEditRoom";

export default function ButtonEditRoom(props: ButtonEditRoomProps) {
  const { roomData } = props;
  const [openDialog, setOpenDialog] = useState(false);

  const handleClose = () => {
    setOpenDialog(false);
  };


  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
    <DialogTrigger asChild>
      <Button variant="outline" onClick={() => setOpenDialog(true)}>
        Edit
        <Pencil className="w-4 h-4 ml-2" />
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogDescription>
          <FormEditRoom roomData={roomData} onClose={handleClose} />
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}
