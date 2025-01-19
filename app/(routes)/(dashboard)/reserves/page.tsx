import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import {redirect} from "next/navigation";
import TableReserves from "./components/TableReserves/TableReserves";


export default async function ReservesPage() {

  const { userId } = await auth();

    if (!userId) {
      return redirect("/");
    }

    const orders = await db.order.findMany({
        where: {
            userId: userId
        },
        orderBy: {
            orderDate: "desc"
        },
    });

  return (
    <div>
      <h1 className="mb-4 text-3xl">Reserves</h1>
      {orders.length === 0 ? (
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-xl">You dont have any reservation</h2>
          <p>Make your reservations through the rooms page</p>
          <Link href="/rooms">
            <Button>Room List</Button>
          </Link>
        </div>
      ) : (
        <TableReserves orders={orders} />
      )}
    </div>
  )
}
