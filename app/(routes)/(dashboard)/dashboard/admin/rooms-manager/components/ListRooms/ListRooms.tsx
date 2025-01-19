import CardRoom from "./CardRoom/CardRoom";
import { ListRoomsProps } from "./ListRooms.types";

export default  function ListRooms(props: ListRoomsProps) {

    const { rooms } = props;

  

    return (
        <div className="grid  gap-6 my-4 lg:grid-cols-3">
            {rooms.map((room) => (
                <CardRoom key={room.id} room={room} />
            ))}
        </div>
    )
}
