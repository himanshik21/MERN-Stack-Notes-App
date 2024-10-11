import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import MainScreen from '../../components/MainScreen'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Col, Form, Row } from 'react-bootstrap'
import './LoginScreen.css';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import { login } from '../../actions/userActions';

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const userLogin = useSelector((state)=>state.userLogin);

    const {loading,error,userInfo} = userLogin;

    const navigate = useNavigate();

    useEffect(() => {
    if(userInfo){
        navigate('/myNotes');
    }
    }, [navigate,userInfo]);
    

    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(login(email,password));
    };

    return (
        <MainScreen title="LOGIN">
            <div className="loginContainer">
                {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                {loading && <Loading />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Row className="py-3">
                    <Col>
                        New Customer ? <Link to="/register">Register Here</Link>
                    </Col>
                </Row>
            </div>
        </MainScreen>
    )
}

export default LoginScreen