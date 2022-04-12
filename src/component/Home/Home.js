import React from 'react';
import './Home.css'
import hotel1 from '../../images/hotel1.jpg'
import hotel2 from '../../images/hotel2.jpg'
import hotel3 from '../../images/hotel3.jpg'
import { Carousel } from 'react-bootstrap';
import Room from '../Room/Room';
const Home = () => {

    return (
        <div>
            <div className='home'>
            <Carousel fade>
                <Carousel.Item className='slider'>
                    <img
                        className="d-block w-100 img"
                        src={hotel1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div  data-aos="fade-down" className="caption1">
                            <h3 className='display-6'>Each Hotel Is</h3>
                            <h1 className='display-3 fw-bold'>Unique 60%</h1>
                            <h1 className='display-6'>Just Like You</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  className='slider'>
                    <img
                        className="d-block w-100 img"
                        src={hotel2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <div  data-aos="fade-down" className="caption2">
                            <h3 className='display-6'>Each Hotel Is</h3>
                            <h1 className='display-3 fw-bold'>Unique 60%</h1>
                            <h1 className='display-6'>Just Like You</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='slider'>
                    <img
                        className="d-block w-100 img"
                        src={hotel3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <div  data-aos="fade-down" className="caption3">
                            <h3 className='display-6'>Each Hotel Is</h3>
                            <h1 className='display-3 fw-bold'>Unique 60%</h1>
                            <h1 className='display-6'>Just Like You</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        <section>
            <Room/>
        </section>
        </div>
    );
};

export default Home;