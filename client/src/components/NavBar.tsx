import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/const";
import {IS_SET_AUTH, IS_SET_USER} from "../redux/slice/isAuthSlice";

const NavBar = () => {
    const isAuth: boolean = useSelector((state: RootState) => state.isAuthToolkit.isAuth);
    const dispatch = useDispatch();
    const history = useNavigate();

    const logOut = (): void => {
        dispatch(IS_SET_USER({}));
        dispatch(IS_SET_AUTH(false));
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                {isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            className={'ms-2'}
                            variant={"outline-light"}
                            onClick={() => logOut()}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history(LOGIN_ROUTE)}>
                            Авторизация
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
};

export default NavBar;