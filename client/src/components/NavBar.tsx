import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../redux";
import {Navbar} from "react-bootstrap";

const NavBar = () => {
    const isAuth: boolean = useSelector((state: RootState) => state.isAuthToolkit.isAuth);

    return (
            <Navbar bg="dark" variant="dark">

            </Navbar>
    );
};

export default NavBar;