import React from 'react';
import {Form} from "react-bootstrap";


const SelectRating = () => {


    return (
        <Form.Select
            style={{cursor: "pointer"}}
            aria-label={'Сколько товаров вы хотите видеть?'}
        >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </Form.Select>
    );
};

export default SelectRating;