import React, {useState} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux";
import {SET_PAGINATION_LIMIT} from "../../redux/slice/paginationSlice";

const Select = () => {
    const limit: number = useSelector((state: RootState) => state.isPaginationToolkit.limit);
    const [countItems, setCountItems] = useState<number>(5);
    const dispatch = useDispatch();

    const handleSelectChange = (event): void => {
        const value: number = event.target.value;
        setCountItems(value);
        dispatch(SET_PAGINATION_LIMIT(countItems));
    };

    console.log(limit)
    return (
        <Container>
            <Row>
                <Col md={5}>
                    <Form.Select
                        className={"mt-3"}
                        style={{cursor: "pointer"}}
                        aria-label={'Сколько товаров вы хотите видеть?'}
                        onChange={handleSelectChange}
                    >
                        <option>Сколько товаров вы хотите видеть?</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                    </Form.Select>
                </Col>
            </Row>
        </Container>
    );
};

export default Select;