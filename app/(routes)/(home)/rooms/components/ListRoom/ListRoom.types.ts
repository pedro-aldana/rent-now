import { Room } from "@prisma/client";

export type ListRoomProps = {
  rooms: Room[] | undefined;
};