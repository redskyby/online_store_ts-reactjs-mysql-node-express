import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from 'react-bootstrap';
import BigStar from '../assets/bigStar.png';
import {useParams} from "react-router-dom";
import DeviceApi from "../http/deviceApi";
import {RingLoader} from "react-spinners";
import brandInfoApi from "../http/brandInfoApi";
import {isEmpty} from "lodash";


const DevicePage = () => {
    const {id} = useParams<string>();

    const [device, setDevice] = useState({} as { id: number, name: string, price: number, rating: number, img: string })
    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState<Array<{ id: number; title?: string; description?: string }>>([]);

    useEffect(() => {
        if (Object.entries(device).length === 0) {
            DeviceApi.fetchOneDevice(id!).then(data => {
                setDevice(data);
                setLoading(false);
            }).catch(e => console.log(e.message));
            brandInfoApi.fetchInfoBrand(id!).then(data => {
                setInfo(data);
            }).catch(e => console.log(e.message));
        } else {
            setLoading(false);
        }

    }, [])

    if (loading) {
        return (
            <Container className={'d-flex justify-content-center align-items-center '}
                       style={{height: "100vh"}}>
                <RingLoader color={'#36d7b7'} size={'100px'}/>
            </Container>
        )
    }

    return (
        <Container className={"mt-3"}>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
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
                {
                    !isEmpty(info) ? info.map(i => (
                        <Row key={i.id}>
                            <Col md={2}>{i.title}</Col>
                            <Col md={2}>{i.description}</Col>
                        </Row>
                    )) : <p>На данный момент характеристики отсутствуют</p>
                }
            </Row>
        </Container>
    );
};

export default DevicePage;