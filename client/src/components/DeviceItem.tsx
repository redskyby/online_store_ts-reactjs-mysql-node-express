import React from 'react';
import {Card, Col, Image} from 'react-bootstrap';
import star from "../assets/star.png";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/const";

interface device {
    id: number,
    name: string,
    price: number,
    rating: number,
    img: string
}


const DeviceItem = (props: device) => {
    const history = useNavigate();

    return (
        <Col
            md={3}
            className={"mt-3"}
            onClick={() => history(DEVICE_ROUTE + '/' + props.id)}
        >
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image width={150} height={150} src={props.img}/>
                <div className={"mt-1 d-flex text-black-50 align-items-center justify-content-between"}>
                    <div>
                        Samsung...
                    </div>
                    <div className={'d-flex align-items-center'}>
                        <div className={"mr-1"}>{props.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>
                    {props.name}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;