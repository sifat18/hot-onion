import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Display from '../FoodDisplay/Display';
import pic1 from '../../hot-onion-restaurent-master/Image/adult-blur-blurred-background-687824.png'
import pic2 from '../../hot-onion-restaurent-master/Image/architecture-building-city-2047397.png'
import pic3 from '../../hot-onion-restaurent-master/Image/chef-cook-food-33614.png'
import './Home.css';
const Home = () => {
    const [foodData, setfoodData] = useState([])
    const [foodDisplay, setfoodDisplay] = useState([])

    useEffect(() => {
        fetch('./food.json').then(res => res.json()).then(data => {
            setfoodData(data);
            setfoodDisplay(data.slice(0, 6));
        })
    }, [])

    const handleCategory = foodtype => {
        const foodDisplay = foodData.filter(food => food.category === foodtype)
        setfoodDisplay(foodDisplay)
    }
    return (
        <Container className='my-5 '>
            {/* categorys */}
            <Row className="justify-content-center mb-5">
                <Col xs='auto' lg="auto"><span className='spanSlide pe-3' onClick={() => handleCategory('breakfast')}>BreakFast</span></Col>
                <Col xs='auto' md="auto"><span className='spanSlide px-2' onClick={() => handleCategory('lunch')}>Lunch</span>  </Col>
                <Col xs='auto' lg="auto"> <span className='spanSlide px-2' onClick={() => handleCategory('dinner')} >Dinner</span> </Col>
            </Row>
            {/* display */}
            <Row xs={1} md={2} lg={3} className="g-5">
                {foodDisplay?.map(foods => <Display key={foods.key} food={foods} />)}
            </Row>
            {/* choose */}
            <Row className='text-start'>
                <h2>Why you choose us</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
                    Consequatur similique, autem ipsum corporis soluta tempore debitis </p>
            </Row>
            <Row xs={1} md={2} lg={3} className="g-5">
                <Col>
                    <Card className='border-0 card info'>
                        <Card.Img variant="top" className='p-2' src={pic1} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className=' border-0 card info'>
                        <Card.Img variant="top" className='p-2' src={pic2} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className=' border-0 card info'>
                        <Card.Img variant="top" className='p-2' src={pic3} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;