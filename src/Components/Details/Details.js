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
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
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
                <Row>
                    <Col xs={6} className='d-flex flex-column my-5'>

                        <h2 className='text-start fs-1 fw-bold my-3'>{food?.name}</h2>
                        <p className='text-start my-2'>{food?.descript}</p>
                        <div className='d-flex justify-content-between'>
                            <p id='price' className='text-start my-3 fs-4 fw-bold'>${food?.price}</p>
                            <div className="d-flex border bar rounded-pill ms-3 me-auto px-3 py-0 my-0">
                                <button id="phone-minus" onClick={() => handleNumber(false)} className="btn  pad py-0 "><i className="fas fa-minus"></i></button>
                                <input id="number" type="number" min="0" className=" border-0 pad text-center " value={count} />
                                <button id="phone-plus" onClick={() => handleNumber(true)} className="btn   pad py-0 "><i className="fas fa-plus"></i></button>
                            </div>
                        </div>
                        <Button variant='danger' onClick={handleCart} className='w-25 rounded-pill mt-5 me-auto ms-5'>
                            <i class="fas fa-shopping-cart"></i>add to cart</Button>
                        {/* slider */}
                        <Row className='mt-5 mx-5 pt-5 pe-5 text-start'>
                            <Slider {...settings}>

                                {foodData.map(g => (
                                    <div>
                                        <img src={g.img} alt="" height='200' width='200' />
                                    </div>
                                ))}

                            </Slider>

                        </Row>
                    </Col>
                    <Col xs={6} className='mt-5 pt-3'>
                        <img src={food?.img} className='img-fluid' alt="" height='500' width='500' />

                    </Col>
                </Row>
            }

        </Container>

    );
};

export default Details;