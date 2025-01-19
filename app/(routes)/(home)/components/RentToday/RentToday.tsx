import { Reveal } from "@/components/shared/Reveal"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function RentToday() {
  return (
    <div className="p-6 lg:my-32 max-w-7xl mx-auto lg:-mt-20">
      <div className="bg-[url('/images/background-2.jpg')] bg-center bg-no-repeat bg-cover rounded-xl p-6 lg:p-32 relative">
        <div className="lg:flex gap-x-6 ">
          <div>
            <h3 className="text-4xl text-white">Rent the room of your dreams today</h3>
            <p className="text-white text-xl my-5">
             Register and explore our rooms
            </p>
            <Link href="/sign-in">
              <Button variant="outline" size="lg">
                Register here
              </Button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}
