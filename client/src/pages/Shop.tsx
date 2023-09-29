import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {useSelector} from "react-redux";
import {RootState} from "../redux";
import Auth from "./Auth";

const Shop = () => {
    const isAuth: boolean = useSelector((state: RootState) => state.isAuthToolkit.isAuth);

    return (
        <Container>
            {isAuth ?
                <Row className={'mt-2'}>
                    <Col md={3}>
                        <TypeBar/>
                    </Col>
                    <Col md={9}>
                        <BrandBar/>
                        <DeviceList/>
                    </Col>
                </Row>
                :
                <Auth/>
            }
        </Container>
    );
};

export default Shop;