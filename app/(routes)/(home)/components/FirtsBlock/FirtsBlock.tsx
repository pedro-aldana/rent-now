import { Reveal } from "@/components/shared/Reveal"
import Image from "next/image";

export default function FirtsBlock() {
  return (
    <div className="relative w-full h-[320px] mt-4" id="home">
    <div className="absolute inset-0 opacity-70">
        <img src="https://misiondelosangeles.com/wp-content/uploads/2020/03/banner_head_habitaciones.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />

    </div>
    <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">Find a Room</h1>
            <p className="font-regular text-xl mb-8 mt-4">In Rent Now you will find the room where you will spend your next vacation</p>
            <a href="#contactUs"
                className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200">Contact
                Us</a>
        </div>
    </div>
</div>
  )
}
