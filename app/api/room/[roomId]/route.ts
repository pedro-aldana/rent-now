import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function PATCH(req: Request, { params }: { params: { roomId: string } }) {

    try {
        const {userId} = await auth()
        const {roomId} = params
        const {isPublished} = await req.json()

        if (!userId) {
            return new NextResponse("Unauthorized", {
                status: 401,
            })
        
        }
            
        const room = await db.room.update({
            where: {
                id: roomId,
                userId
            },
            data: {
                isPublished
            }
        });

        return NextResponse.json(room)

    } catch (error) {
        console.log("[ROOM ID PATCH]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}


export async function DELETE(req: Request, { params }: { params: { roomId: string } }) {

    try {
        const {userId} = await auth()
        const {roomId} = params

        if (!userId) {
            return new NextResponse("Unauthorized", {
                status: 401,
            })
        
        }

        const deletedRoom = await db.room.delete({
            where: {
                id: roomId
            }
        })

        return NextResponse.json(deletedRoom)
    } catch (error) {
        console.log("[DELETE ROOM ID]", error)
        return new NextResponse("Internal Server Error", {
            status: 500,
        })
    }
}