import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ListLovedRooms from "./components/ListLovedRooms/ListLovedRooms";

export default async function LovedRoomPage() {

  const { userId } = await auth()

  if (!userId) {
    return redirect('/')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Rooms you liked</h1>

      <ListLovedRooms/>
    </div>
  )
}
