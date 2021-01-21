import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Alert, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userAction'
import { useHistory } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    let history = useHistory();

    //to get state from store
    const userLogin = useSelector(state => state.userLogin)
    const { error, userInfo } = userLogin

    useEffect(() => {
        console.log("here actions", userInfo)

        if (userInfo) {
            console.log("tru=ying to push", userInfo)
            history.push('/dashboard/profile')
        }

    }, [userInfo, history])


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <>
            <Row className="login">
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} className="login_banner">
                </Col>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} className="login_form">
                    <Container>
                        <h4 className="text-center ">
                            <strong>Login via Email</strong>
                        </h4>
                        {error && <Alert variant="danger" className="login_form_item">{error}</Alert>}
                        <Form onSubmit={submitHandler} className="login_form_item">
                            <Form.Group controlId="email">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Your primary address" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Password </Form.Label>
                                <Form.Control type="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Button type="submit" variant="info">Sign In</Button>
                        </Form>
                    </Container>
                </Col>
            </Row>

        </>
    )
}

export default Login
