import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import ListRoom from "./components/ListRoom/ListRoom"

export default async function DashboardPage() {

  const { userId } = await auth()

  if (!userId) {
    return redirect('/')
  }

  const rooms = await db.room.findMany({
    where: {
      isPublished: true,
    },
    orderBy: {
      createdAt: 'desc',
    }
  })
  return (
    <div>
      <div className='flex justify-between'>
        <h2 className='text-2xl font-bold'>List of Rooms</h2>
      </div>
      <ListRoom rooms={rooms} />
    </div>
  )
}
