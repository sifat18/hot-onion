import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Context/useContext';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) {

        return <div className='text-center'><Spinner animation="border" variant="danger" />
        </div>
    }
    return (
        <Route {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}></Redirect>)
            }>
        </Route >
    );
};

export default PrivateRoute;