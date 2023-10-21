import React, {useState} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {SET_PAGINATION_LIMIT} from "../../redux/slice/paginationSlice";

const Select = () => {
    const [countItems, setCountItems] = useState<number>(5)
    const dispatch = useDispatch();


    const handleSelectChange = (event): void => {
        const value: number = event.target.value;
        setCountItems(value);
        dispatch(SET_PAGINATION_LIMIT(countItems));
    };

    return (
        <Container className={'mt-3'}>
            <Row>
                <Col
                    md={4}
                    className={'d-flex flex-row justify-content-start align-items-center'}>
                    <p className={"text-left"} style={{margin: 0}}>Сколько товаров вы хотите видеть:</p></Col>
                <Col
                    md={2}
                    className={'d-flex flex-row justify-content-start align-items-center'}
                >
                    <Form.Select
                        style={{cursor: "pointer"}}
                        aria-label={'Сколько товаров вы хотите видеть?'}
                        onChange={handleSelectChange}
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                    </Form.Select>
                </Col>
            </Row>
        </Container>
    );
};

export default Select;