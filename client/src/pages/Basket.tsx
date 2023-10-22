import React from 'react';
import {Container, Row} from "react-bootstrap";

const Basket = () => {
    return (
        <Container>
            <Row className={'vh-100 d-flex justify-content-center align-items-center text-capitalize fs-2'}>
                Вы в корзине
            </Row>
        </Container>
    );
};

export default Basket;