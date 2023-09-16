import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {REGISTRATION_ROUTE} from '../utils/const';

const Auth = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center"
                   style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h1
                    className="m-auto"
                    style={{fontSize: 35}}
                >Авторизация</h1>
                <Form className={"d-flex flex-column"}>
                    <Form.Control
                        className={'mt-3'}
                        placeholder={"Введите ваш email..."}
                    />
                    <Form.Control
                        className={'mt-3'}
                        placeholder={"Введите ваш пароль..."}
                    />
                    <Row className="mt-3 pl-3 pr-3">
                        <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                        </div>
                        <Button
                            variant={"outline-success"}
                            className={"mt-3 align-self-end"}
                        >Войти
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;