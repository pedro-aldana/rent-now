import { Calendar, BedDouble,Heart,FileSliders,Notebook } from "lucide-react"

export const dataGeneralSidebar = [
    {
        icon: BedDouble,
        label: "Rooms",
        href: "/dashboard"
    },
    {
        icon: Calendar,
        label: "room Reserves",
        href: "/reserves"
    },
    {
        icon: Heart,
        label: "Loved Room",
        href: "/loved-room"
    },
]

export const dataAdminSidebar = [
    {
        icon: FileSliders,
        label: "Manage your rooms",
        href: "/dashboard/admin/rooms-manager"
    },
    {
        icon: Notebook,
        label: "All Reserves",
        href: "/dashboard/admin/reserves-admin"
    }
]

