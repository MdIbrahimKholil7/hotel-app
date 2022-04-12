import React, { useRef, useState } from "react";
import { Carousal, Carousel } from '3d-react-carousal';
import FamilyRoomBook from "../FamilyRoomBook/FamilyRoomBook";
import useRoom from "../../hooks/useRoom";
import { NavLink } from "react-bootstrap";
const FamilyRoom = () => {

    const [chooseRoom,setChooseRoom]=useState([])

    const [rooms] = useRoom()
    const button = {
        position: 'absolute',
        bottom: '10%',
        left: '36%',
        margin: '0 auto',
        display: 'block',
        width: '30%',
        padding: '1rem 0',
        border: 'none',
        fontSize:'1.7rem',
        background:"#1f215aea",
        color:'#fff',
        borderRadius:'.5rem'
    }
    const callback = function (index) {
        console.log("callback", index);
    }

    // handle room 
    const handleRoom=room=>{
        let selectedRoom;
        selectedRoom=[...chooseRoom,room]
        setChooseRoom(selectedRoom)
        console.log(room)
    }

    return (
        <div className="my-5 family-container">
            <h1 className="text-center my-5 text-primary">Choose Your Family Room</h1>
            <div>
                {/* <Carousal.Carousel slides={slides} /> */}
                <Carousel className="family-container" slides={rooms.map(slide => <div>
                    <div style={{ position: 'relative' }} className="room-slider">
                        <img style={{ width: '100%', height: '45rem' }} src={slide.img} alt="" />
                        <button onClick={()=>handleRoom(slide)} style={button}>Choose Room</button>
                    </div>
                </div>)} autoplay={true} interval={4000} onSlideChange={callback} />
            </div>
            <div className="w-50 mx-auto my-5 text-center "> 
                <h1 className="my-3 text-primary ">Checkout Your Room</h1>
               <div>
                   <h1 className="my-2">Choose Room:{chooseRoom.length}</h1>
                   <NavLink to='/checkout' className="btn btn-primary text-white w-50 fs-4 mx-auto mt-5">Proceed Chekout</NavLink>
               </div>
            </div>
            {/* <FamilyRoomBook /> */}
        </div>
    )
};

export default FamilyRoom;