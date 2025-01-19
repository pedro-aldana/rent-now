import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'
import ButtonAddCart from './components/ButtonAddCart/ButtonAddCart'
import ListRooms from './components/ListRooms/ListRooms'

export default async function RoomsManagerPage() {
  const {userId} = await auth()

  if (!userId) {
    return redirect('/')
  }
  
  const room = await db.room.findMany({
    where: {
        userId
    },
    orderBy: {
        createdAt: 'desc',
    }
  })

  console.log(room)

  return (
    <div>
        <div className='flex justify-between'>
            <h2 className='text-2xl font-bold'>Manage your rooms</h2>
            <ButtonAddCart />
        </div>
        <ListRooms rooms={room}/>
    </div>
  )
}
