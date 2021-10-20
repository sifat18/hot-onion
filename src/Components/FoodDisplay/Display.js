import React from 'react';
import { Card, Col, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Display.css';
const Display = ({ food }) => {
    const { key, name, price, img, descript, category } = food;
    return (
        <Col >
            <NavLink to={`category/${key}`}>
                <Card className="text-center border-0 info">
                    <Card.Img variant="top" className='img-fluid text-center px-5 pb-2 pt-2' src={img} alt={category - key} height='100' width='100' />
                    <Card.Body>
                        <Card.Title className='fs-2 fw-bold'>{name}</Card.Title>
                        <Card.Text className='fw-light'>{descript.slice(0, 100)}</Card.Text>
                        <Card.Text className='fs-2 fw-bold'>${price}</Card.Text>
                        {/* <Button variant="primary">View Details</Button> */}
                    </Card.Body>
                </Card>
            </NavLink>
        </Col>
    );
};

export default Display;