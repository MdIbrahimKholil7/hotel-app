import React from 'react';
import { Container } from 'react-bootstrap';
import aboutImg from '../../images/img-1.jpg'
import './About.css'
const About = () => {
    return (
        <div className='my-5 pt-5'>
            <Container>

                <div className='d-md-flex justify-content-between align-items-center'>
                    <div className='about-img'>
                        <img className='img-fluid' src={aboutImg} alt="" />
                    </div>
                    <div className='about-details'>
                        <h1>About Us</h1>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source

                        </p>
                        <button>
                            Read More
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;