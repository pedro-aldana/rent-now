import { Room } from "@prisma/client";
import { Dispatch,SetStateAction } from "react";

export type FormEditRoomProps = {
    roomData: Room;
    onClose: () => void
}