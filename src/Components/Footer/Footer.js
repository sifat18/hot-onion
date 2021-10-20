import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import img from '../../hot-onion-restaurent-master/logo2.png'
const Footer = () => {
    return (
        <Container fluid className='bg-dark footer '>
            <Row >
                <Col xs={6}>
                    <img src={img} className='img-fluid ps-5 mt-5' alt="" height='250' width='250' />
                </Col >
                <Col xs={3} className='d-flex flex-column text-start ps-5 pt-5 text-white'>
                    <div className='foodiv'>About Online Food</div>
                    <div className='foodiv'>Read Blog</div>
                    <div className='foodiv'>sign up to deliver</div>
                    <div className='foodiv'>Add your restaurant</div>
                </Col>
                <Col xs={3} className='d-flex flex-column text-start ps-5 pt-5 text-white'>
                    <div className='foodiv'>Get Help</div>
                    <div className='foodiv'>Read FAQ's</div>
                    <div className='foodiv'>View cities</div>
                    <div className='foodiv'>Restaurants near me</div>
                </Col>
            </Row >
        </Container >
    );
}

export default Footer;