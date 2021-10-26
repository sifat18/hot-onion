import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import useLoad from '../../hooks/hook';
import Slider from 'react-slick';
import './details.css';
import { addToDb } from '../../fakedb';
const Details = () => {
    const { key } = useParams();
    console.log(key)

    const [foodData] = useLoad();
    // console.log(foodData)

    const food = foodData.find(info => info.key === key);
    let count = 1;
    var settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    dots: false,
                }
            }
        ]
    };
    const handleNumber = bool => {

        if (count > 0) {
            const newNum = bool ? count + 1 : count - 1;
            count = newNum;
            console.log('after', count);
            return document.getElementById('number').value = count;

        } else if (count === 0) {
            const newNum = bool ? count + 1 : 0;
            count = newNum;
            console.log('after', count);
            return document.getElementById('number').value = count;
        }
    }
    const handleCart = () => {
        addToDb(key, count)
    }
    return (


        <Container className='my-5 pb-5'>
            {!food ?
                <Spinner className='text-center' animation="border" /> :
                <Container className='my-5 pb-5'>
                    <Row>
                        <Col xs={12} md={6} className='d-flex flex-column my-5  order-md-first order-last'>

                            <h2 className='text-start fs-1 fw-bold my-3'>{food?.name}</h2>
                            <p className='text-start my-2'>{food?.descript}</p>
                            <div className='d-flex justify-content-between'>
                                <p id='price' className='text-start mt-5 fs-4 fw-bold'>${food?.price}</p>
                                <div className="d-flex border bar rounded-pill mt-5 ms-3 me-auto pe-0 ps-3 w-25 py-0 my-0">
                                    <button id="phone-minus" onClick={() => handleNumber(false)} className="btn w-25 ps-0 ms-2 pe-0 py-0 "><i className="fas fa-minus"></i></button>
                                    <input id="number" type="number" min="0" className=" border-0 w-25 text-center " value={count} />
                                    <button id="phone-plus" onClick={() => handleNumber(true)} className="btn w-25 ps-0 pe-0 mx- py-0 "><i className="fas fa-plus"></i></button>
                                </div>
                            </div>
                            <Button variant='danger' onClick={handleCart} className='w-25 py-3 px-2 rounded-pill mt-5 me-auto ms-5'>
                                <i class="fas fa-shopping-cart w-25"></i>add to cart</Button>
                        </Col>
                        <Col xs={12} md={6} className='mt-5 pt-3 order-md-last order-first'>
                            <img src={food?.img} className='img-fluid' alt="" height='500' width='500' />

                        </Col>
                    </Row>

                    <Row className='w-75'>
                        <Container className='mt-5 mx-5 pt-5 w-50 text-start'>
                            <Slider {...settings}>

                                {foodData.map(g => (
                                    <div>
                                        <img src={g.img} alt="" className='img-fluid' height='200' width='200' />
                                    </div>
                                ))}

                            </Slider>
                        </Container>
                    </Row>
                </Container>
            }

        </Container>

    );
};

export default Details;