import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { clearTheCart } from '../../fakedb';
import useCart from '../../hooks/cartdata';
import useLoad from '../../hooks/hook';
import Cost from '../Cost/Cost';
import ShopItem from '../ShopItem/ShopItem';
import './cart.css';
const Cart = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    const [food] = useLoad();
    const [cart, setcart] = useCart(food);
    const history = useHistory()
    const handleOrder = () => {
        clearTheCart();
        setcart([])
        history.push('/placeOrder');

    }
    return (
        <Container className='text-center'>
            <Row>
                <Col xs={12} md={7} className='text-center my-5 cartform'>
                    <h2 className='ms-3 mt-5'>Edit Delivery Details</h2>
                    <hr className='w-50 mx-auto mb-3' />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="Name">Name</label>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input className='inputs' defaultValue="" {...register("Name", { required: true })} />
                        {errors.Name && <span>This field is required</span>}

                        <label htmlFor="Address">Address</label>
                        {/* include validation with required or other standard HTML validation rules */}
                        <input className='inputs'{...register("address", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.address && <span>This field is required</span>}
                        <label htmlFor="Flat">Flat</label>
                        <input className='inputs'{...register("Flat", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.Flat && <span>This field is required</span>}
                        <label className='my-2' htmlFor="Phone">Phone</label>
                        <input className='inputs mb-3'{...register("Phone", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.Phone && <span>This field is required</span>}

                        <input className='inputs btn-danger' type="submit" />
                    </form>
                </Col>
                <Col xs={12} md={4}>
                    <Container className='my-5'>
                        <Row className='mb-2'>
                            {cart.map(foods => <ShopItem key={foods.key} items={foods} />)}
                        </Row>
                        <Row>
                            <Cost items={cart} >
                                <button className='btn btn-success' onClick={handleOrder}>Place Order</button>
                            </Cost>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;