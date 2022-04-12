import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useRoom from '../../hooks/useRoom';
import icon from '../../images/icon-accmod.png'
import About from '../About/About';
import './Room.css'
const Room = () => {
    const [rooms,setRoom]=useRoom()

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
                            rooms.map(room => <Col key={room.id} md={4}>
                                <div className='room'>
                                    <img className='room-img' src={room.img} alt="room images" />
                                    <div>
                                        <button className='room-btn'>{room.room} <span className='price'>$320<small className='room-price'>/days</small></span></button>
                                    </div>
                                </div>
                            </Col>)
                        }
                    </Row>
                </div>
                <section>
                    <About/>
                </section>
            </Container>
        </div>
    );
};

export default Room;