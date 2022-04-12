import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import icon from '../../images/icon-accmod.png'
import './Room.css'
const Room = () => {
    const rooms = [
        {
            img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
            id: 1,
            room: 'Family Room '
        },
        {
            img: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            id: 2,
            room: 'Couple Room'
        },
        {
            img: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            id: 3,
            room: 'Standard Room',

        },
        {
            img: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            id: 4,
            room: 'Luxury Room'
        },
        {
            img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
            id: 5,
            room: 'Standard Room'
        },
        {
            img: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            id: 6,
            room: 'Standard Room'
        }
    ]
    return (
        <div>
            <Container>
                <div className='room-header'>
                    <h1 className='fw-bold'>Rooms & Rates</h1>
                    <div className='my-3'>
                        <img src={icon} alt="" />
                    </div>
                    <p className='fs-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate ex temporibus asperiores. Natus, esse libero! Eius, consequuntur. Facilis hic rerum doloribus odio, fugit ullam exercitationem pariatur voluptate deleniti necessitatibus eveniet.</p>
                </div>

                <div className='grid '>
                    <Row className='g-5'>
                        {
                            rooms.map(room => <Col md={4}>
                                <div key={room.id} className='room'>
                                    <img className='room-img' src={room.img} alt="room images" />
                                    <div>
                                        <button className='room-btn'>{room.room} <span className='price'>$320<small className='room-price'>/days</small></span></button>
                                    </div>
                                </div>
                            </Col>)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Room;