import React, { useState, useEffect } from 'react'
import { Form, Button, Alert, Container, Table, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getUserList, addUser } from '../actions/userAction'
import Loader from '../components/Loader'

const AdminUsers = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [userType, setUserType] = useState('')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()

    const usersList = useSelector(state => state.usersList)
    const newUser = useSelector(state => state.newUser)
    useEffect(() => {
        dispatch(getUserList())
    }, [dispatch, newUser])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addUser(email, name, userName, userType))
        handleClose()
    }

    return (
        <Container className="mt-3">
            <div className="d-flex flex-row-reverse">
                <Button variant="primary" className="button_color" onClick={handleShow}>Add User</Button>
            </div>
            <h6 className="bg-light p-3 mt-3"><strong>ALL-USERS</strong></h6>
            {newUser.error && <Alert variant="danger">{newUser.error}</Alert>}

            {
                usersList.loading === undefined || usersList.loading ? (<Loader></Loader>) :
                    <div className="table_scroll">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Username</th>
                                    <th>UserType</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    usersList.users.map((user, index) => {
                                        return (
                                            <tr key={index + 1}>
                                                <td>{index + 1}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.userName}</td>
                                                <td>{user.userType}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Users</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {newUser.error && <Alert variant="danger">{newUser.error}</Alert>}
                    <Form onSubmit={submitHandler} className="mt-3">
                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email-id" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="name">
                            <Form.Label>Name </Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="userName">
                            <Form.Label>User Name </Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" value={userName} onChange={(e) => setUserName(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="userType">
                            <Form.Label className="mr-3">User Type </Form.Label>
                            <Form.Check inline label="Admin" name="usertype" type="radio" id="1" value="admin" onChange={(e) => { setUserType(e.target.value) }} />
                            <Form.Check inline label="User" name="usertype" type="radio" id="2" value="user" onChange={(e) => setUserType(e.target.value)} />
                        </Form.Group>
                        <Button type="submit" variant="info">Add user</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container >
    )
}

export default AdminUsers
