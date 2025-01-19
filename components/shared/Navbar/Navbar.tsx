"use client";

import { Button } from "@/components/ui/button";
import { useLovedRooms } from "@/hooks/use-loved-rooms";
import { toast } from "@/hooks/use-toast";
import { UserButton, useAuth } from "@clerk/nextjs";
import { Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Navbar() {
  const { userId } = useAuth();
  const { lovedItems } = useLovedRooms();
  const router = useRouter();

  // Manejar el clic en "Loved Rooms"
  const handleLovedRoomsClick = (e: React.MouseEvent) => {
    if (!userId) {
      e.preventDefault();
      toast({
        title: "You must be logged in to access your favorite rooms",
      })
    } else {
      router.push("/loved-room"); // Redirigir si está autenticado
    }
  };

  return (
    <div className="max-w-5xl py-5 mx-auto">
      <div className="justify-between lg:flex">
        <Link href="/" className="flex items-center justify-center gap-x-2">
          <Image src="/logo.svg" alt="TarreCars" width={50} height={50} />
          <span className="text-xl font-bold">Rent Now</span>
        </Link>

        <div className="flex items-center justify-center gap-x-7">
          <Link href="/rooms">List Room</Link>
          <button
            onClick={handleLovedRoomsClick}
            className="text-base font-medium hover:underline"
          >
            Loved Rooms
          </button>
          {userId ? (
            <>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/loved-room">
                <Heart
                  strokeWidth={1}
                  className={`cursor-pointer ${
                    lovedItems.length > 0 && "fill-black"
                  }`}
                />
              </Link>
              <UserButton />
            </>
          ) : (
            <Link href="/sign-in" className="flex gap-x-3">
              <Button>
                Login
                <User className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
