import React from 'react';
import useRoom from '../../hooks/useRoom';
import './FamilyRoomBook.css'
const FamilyRoomBook = () => {
    const [rooms]=useRoom()

    return (
        <div>
            <div>
                {
                    rooms.map(room=><div className='choose-room' key={room.id}>
                        <div>
                            <img src={room.img} alt="" />
                        </div>
                        <button>Choose Room</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FamilyRoomBook;
