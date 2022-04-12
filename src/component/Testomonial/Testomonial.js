import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Testomonial.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
const Testomonial = () => {
    const reviews = [
        {
            img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZXJvcGVuJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
            feedback: 'This is the only place to stay in Catalina! I have stayed in the cheaper hotels and they were fine, but this is just the icing on the cake! After spending the day bike riding and hiking to come back and enjoy a glass of wine while looking out your ocean view window and then to top it all off...',
            name: 'Seelentag',
            address: 'From Los Angeles, California', id: 1
        },
        {
            img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGVyb3BlbiUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
            feedback: 'This is the only place to stay in Catalina! I have stayed in the cheaper hotels and they were fine, but this is just the icing on the cake! After spending the day bike riding and hiking to come back and enjoy a glass of wine while looking out your ocean view window and then to top it all off...',
            name: 'Robert DJr',
            address: 'From Los Angeles, California', id: 2
        },
        {
            img: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGVyb3BlbiUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
            feedback: 'This is the only place to stay in Catalina! I have stayed in the cheaper hotels and they were fine, but this is just the icing on the cake! After spending the day bike riding and hiking to come back and enjoy a glass of wine while looking out your ocean view window and then to top it all off...',
            name: 'Chris Hemsworth',
            address: 'From Los Angeles, California', id: 3
        },
    ]


    return (
        <div className='review'>
            <Container>
                <section >
                    <div className='feedback'>
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {
                                reviews.map(review => <SwiperSlide key={review.id}>
                                    <div className='client-details'>
                                        <div className='details'>
                                            <img className='my-4' src={review.img} alt="" />
                                            <p className='fs-4 lh-base quotes'>{review.feedback}</p>
                                            <h1>{review.name}</h1>
                                            <p className='fs-3'> {review.address}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                )
                            }
                        </Swiper>
                    </div>

                </section>
            </Container>
        </div >
    );
};

export default Testomonial;