import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Container, Alert } from 'react-bootstrap'
import Profile from '../components/Profile'
import SideNav from '../components/SideNav'
import AdminUsers from '../components/AdminUsers'
import { Route } from 'react-router-dom'

const authPages = {
    "admin": [{ "path": "profile", "name": "Profile" }, { "path": "admin", "name": "Users" }],
    "user": [{ "path": "profile", "name": "Profile" }],
}

const Dashboard = ({ history }) => {
    const userLogin = useSelector(state => state.userLogin)
    const { error, userInfo } = userLogin
    return (

        <>
            {error && <Alert variant="danger">{error}</Alert>}
            { userInfo ?
                <Container fluid>
                    <Row>
                        <Col xs={2} id="sidebar-wrapper">
                            <SideNav history={history} pages={authPages[userInfo.userType]} />
                        </Col>
                        <Col xs={10} id="page-content-wrapper">
                            <Route exact path='/dashboard/admin' component={AdminUsers} />
                            <Route exact path='/dashboard/profile' userInfo={userInfo} render={(props) => <Profile {...props} userInfo={userInfo} />} />
                        </Col>
                    </Row>
                </Container> : history.push('/')
            }
        </>

    )

}

export default Dashboard;