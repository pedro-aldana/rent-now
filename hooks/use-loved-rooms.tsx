import {create} from 'zustand'
import { persist, createJSONStorage } from "zustand/middleware";
import { Room } from '@prisma/client';
import { toast } from './use-toast';


interface UseLovedRoomsType {
    lovedItems: Room[];
    addLoveItem: (data: Room) => void;
    removeLovedItem: (id: string) => void;
}

export const useLovedRooms = create(
    persist<UseLovedRoomsType>(
        (set,get) => ({
            lovedItems: [],
            addLoveItem: (data: Room) => {
                const currentLovedItems = get().lovedItems;
                const existingItem = currentLovedItems.find(item => item.id === data.id);
                if (existingItem) {
                    return toast({
                        title: "The room already exists in your favorites list 💔",
                    })
                }

                set({
                    lovedItems: [...get().lovedItems, data],
                });

                toast({
                    title: "Room added to your favorites list 💖",
                })

            },

            removeLovedItem: (id: string) => {
                set({
                    lovedItems: [...get().lovedItems.filter((item) => item.id !== id)]
                });

                toast({
                    title: "Room removed from your favorites list 💔",
                })
            }
        }),

        {
            name: 'loved-room-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)