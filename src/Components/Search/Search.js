import React from 'react';
import { InputGroup, Button, FormControl, Container } from 'react-bootstrap';
import './Search.css';

const Search = () => {
    return (

        <Container fluid className='search'>
            <Container className="d-flex box flex-column justify-content-center align-items-center">
                <p className='fs-1 fw-normal mx-3 px-2'>Best Food waiting for your belly</p>
                <InputGroup className='sbox '>
                    <FormControl className='rounded-pill '
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    /><Button variant="danger" className='w-25 se-btn rounded-pill' id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
            </Container>   </Container>
    );
};

export default Search;