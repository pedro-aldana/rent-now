import { Navbar } from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button"
import FirtsBlock from "./components/FirtsBlock/FirtsBlock";
import { SliderBrands } from "./components/SliderBrands";
import {Features} from "./components/Features/Features";
import OurRoom from "./components/OurRoom/OurRoom";
import RentToday from "./components/RentToday/RentToday";
import Footer from "@/components/shared/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <FirtsBlock/>
      <SliderBrands/>
      <Features/>
      <OurRoom/>
      <RentToday/>
      <Footer/>
    </div>
  );
}
