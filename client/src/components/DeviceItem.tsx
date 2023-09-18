import React from 'react';
import {Card, Col, Image} from 'react-bootstrap';
import star from "../assets/star.png";


interface device {
    id: number,
    name: string,
    price: number,
    rating: number,
    img: string
}


const DeviceItem = (props: device) => {
    return (
        <Col md={3}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image width={150} height={150} src={props.img}/>
                <div>
                    Samsung...
                </div>
                <div>
                    <div>{props.rating}</div>
                    <Image src={star}/>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;