import { Navbar } from '@/components/shared/Navbar'
import SkeletonRooms from '@/components/shared/SkeletonRooms/SkeletonRooms';
import { db } from '@/lib/db'
import { Suspense } from "react";
import HeaderRoom from './components/HeaderRoom/HeaderRoom';
import FiltersAndListRoom from './components/FiltersAndListRoom/FiltersAndListRoom';
import Footer from '@/components/shared/Footer/Footer';



export default async function PageRooms() {

  const rooms = await db.room.findMany({
    where: {
        isPublished: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });  

  return (
    <div>
        <Navbar/>
        <div className='p-6 mx-auto max-w-7xl'>
          <HeaderRoom/>
        </div>
        <div>
          <FiltersAndListRoom rooms={rooms} />
        </div>
        <div className='mt-12'>
        <Footer/>
        </div>
        
    </div>
  )
}
