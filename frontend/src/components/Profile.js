import React from 'react'
import { Container } from 'react-bootstrap'

const Profile = ({ userInfo }) => {
    return (
        <Container className="my-5 text-center">
            <h2>
                Hello {userInfo.name} !<br></br>
            </h2>
            <p>Your username : {userInfo.userName} <br></br>Your mail : {userInfo.email}</p>
        </Container>
    )
}

export default Profile
