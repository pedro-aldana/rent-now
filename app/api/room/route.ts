import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {

        const {userId} = await auth();
        const data = await req.json();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const room = await db.room.create({
            data: {
                userId,
                ...data
            }
        })

        return NextResponse.json(room);
        
    } catch (error) {
        console.log("[ROOM]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}