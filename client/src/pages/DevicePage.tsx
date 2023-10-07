import React, {useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from 'react-bootstrap';
import BigStar from '../assets/bigStar.png';
import {useParams} from "react-router-dom";

const DevicePage = () => {
    const device = {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: "img"};

    const {id} = useParams();

    console.log(id);

    // const [device , setDevice] = useState()

    return (
        <Container className={"mt-3"}>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className={'d-flex flex-column align-items-center '}>
                        <h2 style={{textAlign: "center"}}>{device.name}</h2>
                        <div
                            className={"d-flex align-items-center justify-content-center"}
                            style={{
                                background: `url(${BigStar}) no-repeat center center`,
                                width: 240, height: 240,
                                backgroundSize: "cover",
                                fontSize: 64
                            }}
                        >

                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className={"d-flex flex-column align-items-center justify-content-around"}
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button
                            variant={"outline-dark"}
                        >Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {/*{device.info.map((info, index) =>*/}
                {/*    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>*/}
                {/*        {info.title}: {info.description}*/}
                {/*    </Row>*/}
                {/*)}*/}
            </Row>
        </Container>
    );
};

export default DevicePage;