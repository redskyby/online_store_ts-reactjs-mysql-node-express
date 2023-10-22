import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import ratingApi from "../../http/ratingApi";


const SelectRating = ({id , setRating}) => {

    const [rate, setRate] = useState(0);



    function makeRate() {
        ratingApi.createRating(id , rate).then(data =>{
            setRating(data.data.rate);
        }).catch(e => console.log(e.message));
    }

    return (
        <Form.Group className={'mt-4'}>
            <Row className={'d-flex flex-row justify-content-center'}>
                <Col md={3}>
                    <Form.Select
                        style={{cursor: "pointer"}}
                        aria-label={'Сколько товаров вы хотите видеть?'}
                        onChange={e => setRate(Number(e.target.value))}

                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </Form.Select>
                </Col>
                <Col md={5}>
                    <Button type={'button'} onClick={makeRate}>Поставить оценку</Button>
                </Col>
            </Row>
        </Form.Group>
    );
};

export default SelectRating;