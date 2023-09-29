import React, {useState} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/const';
import {login, registration} from "../http/userApi";

const Auth = () => {
    const location = useLocation();
    const isLogin: boolean = location.pathname === LOGIN_ROUTE;
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const click = async () => {
        if (isLogin) {
            const response = await login(email , password);
            console.log(response);
        } else {
            const response = await registration(email , password);
            console.log(response);
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center"
                   style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h1
                    className="m-auto"
                    style={{fontSize: 35}}
                >{isLogin  ? 'Авторизация' : 'Регистрация'}</h1>
                <Form className={"d-flex flex-column"}>
                    <Form.Control
                        className={'mt-3'}
                        placeholder={"Введите ваш email..."}
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                    />
                    <Form.Control
                        className={'mt-3'}
                        placeholder={"Введите ваш пароль..."}
                        value={password}
                        onChange={e=> setPassword(e.target.value)}
                        type={'password'}
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <Col className={"d-flex  justify-content-start align-items-center"}>
                            {isLogin ?
                                <div>
                                    Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                                </div>
                                :
                                <div>
                                    Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                                </div>
                            }
                        </Col>
                        <Col className={"d-flex  justify-content-end"}>
                            <Button
                                variant={"outline-success"}
                                onClick={click}
                            >{isLogin ? 'Войти' : 'Регистрация'}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;