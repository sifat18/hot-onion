import React from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import './Search.css';

const Search = () => {
    return (

        <div className='search'>
            <div className="box">
                <p className='fs-1 fw-normal'>Best Food waiting for your belly</p>
                <InputGroup className='w-75 ps-5 ms-5 '>
                    <FormControl className='rounded-pill '
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    /><Button variant="danger" className='w-25 se-btn rounded-pill' id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
            </div>   </div>
    );
};

export default Search;