import React, {useEffect} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux";
import Auth from "./Auth";
import DeviceApi from "../http/deviceApi";
import {SET_BRANDS, SET_DEVICES, SET_TYPES} from "../redux/slice/deviceSlice";
import BrandApi from "../http/brandApi";
import TypeApi from "../http/typeApi";

const Shop = () => {
    const isAuth: boolean = useSelector((state: RootState) => state.isAuthToolkit.isAuth);
    const dispatch = useDispatch();


    useEffect(() => {
        TypeApi.fetchTypes().then(data => {
            dispatch(SET_TYPES(data))
        }).catch(e => console.log(e.message))

        BrandApi.fetchBrands().then(data => {
            dispatch(SET_BRANDS(data))
        }).catch(e => console.log(e.message))

        DeviceApi.fetchDevices().then(data => {
            dispatch(SET_DEVICES(data.rows))
        }).catch(e => console.log(e.message))
    }, [])

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