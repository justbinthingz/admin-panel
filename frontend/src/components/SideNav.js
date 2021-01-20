import React from 'react'
import { Nav, NavItem } from "react-bootstrap";
import { Link } from 'react-router-dom';
import banner from '../assets/side_logo.png'

const SideNav = ({ pages }) => {

    return (
        <>
            <Nav className="col-md-12 d-none d-md-block sidebar"
                defaultActiveKey="/dashboard/profile">
                <img src={banner} className="sidenav_logo" />
                <div className="sidebar-sticky"></div>
                <br></br>
                {
                    pages.map((page, index) => {
                        return (
                            <NavItem key={index}>
                                <Link className="sidenav_items" to={"/dashboard/" + page.path}>{page.name}</Link><hr></hr>
                            </NavItem>
                        )
                    }
                    )
                }
                <NavItem ><Link className="sidenav_items" to="/" onClick={() => {
                    window.location.reload(false);
                }}>Logout</Link></NavItem><hr></hr>
            </Nav>
        </>
    )
}

export default SideNav
