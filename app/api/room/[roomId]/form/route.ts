import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function PATCH(req: Request,
    { params }: { params: { roomId: string } }) {

        try {
            const { userId } = await auth();
            const { roomId } = params;
            const values = await req.json();

            if (!userId) {
                return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
            }

            const room = await db.room.update({
                where: {
                    id: roomId,
                    userId
                },
                data:{
                    ...values
                },
            });

            return NextResponse.json(room);
            
        } catch (error) {
            console.log("[ROOM FORM ID]", error);
            return new NextResponse("Internal Error", { status: 500 });
        }
    
}