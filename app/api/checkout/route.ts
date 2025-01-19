import Stripe from "stripe";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";


const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};


export async function POST(
    request: Request,
    {
        params,
    }: {
        params: { 
            roomId: string,
            pricePerNight: number,
            startDate: Date;
            endDate: Date;
            roomName: string;
        };
    }
){
    const {userId} = await auth();
    const {roomId,pricePerNight, startDate, endDate, roomName} = await request.json();

    if (!userId) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }

    if (!roomId) {
        return new NextResponse("Room id are required", { status: 400 });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    const numberOfNights = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

    const totalAmount = Number(pricePerNight) * numberOfNights;
    const totalAmountStripe = Number(pricePerNight) * 100 * numberOfNights;

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
        {
          quantity: 1,
          price_data: {
            currency: "USD",
            product_data: {
              name: roomName,
            },
            unit_amount: totalAmountStripe,
          },
        },
    ];

    const order = await db.order.create({
        data: {
          roomId,
          roomName: roomName,
          userId: userId,
          status: "confirmed",
          totalAmount: totalAmount.toString(),
          orderDate: startDate,
          orderEndDate: endDate,
        },
    });

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: "payment",
        billing_address_collection: "required",
        phone_number_collection: {
            enabled: true,
        },
        success_url: `${process.env.NEXT_PUBLIC_FRONTEND_STORE_URL}/order-confirmation`,
        cancel_url: `${process.env.NEXT_PUBLIC_FRONTEND_STORE_URL}/order-error`,
        metadata:{
            orderId: order.id,
            roomId: roomId,
            startDate,
            endDate,
            numberOfNights
        }
    })

    return NextResponse.json({url: session.url}, {
        headers: corsHeaders,
    });
}