import { Navbar } from '@/components/shared/Navbar'
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OrderConfirmationPage() {
  return (
    <div>
        <Navbar/>
        <div className="p-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl">Thank you very much for trusting us!</h1>
          <p>
          In a few moments you will receive all the information through your email
          </p>
          <p>
          You can view all your reservations within your Customer Area
          </p>
          <Link href="/">
            <Button>See the rooms again</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
