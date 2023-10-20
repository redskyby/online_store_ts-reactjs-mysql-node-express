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
import PaginationInPage from "../components/PaginationInPage";
import {SET_PAGINATION_TOTAL_COUNT} from "../redux/slice/paginationSlice";

const Shop = () => {
    const isAuth: boolean = useSelector((state: RootState) => state.isAuthToolkit.isAuth);
    const pageFromRedux: number = useSelector((state: RootState) => state.isPaginationToolkit.page);
    const selectedType = useSelector((state: RootState) => state.isDeviceToolkit.selectedType);
    const selectedBrands = useSelector((state: RootState) => state.isDeviceToolkit.selectedBrands);
    const totalCount: number = useSelector((state: RootState) => state.isPaginationToolkit.totalCount);
    const limit: number = useSelector((state: RootState) => state.isPaginationToolkit.limit);
    const dispatch = useDispatch();


    useEffect(() => {
        TypeApi.fetchTypes().then(data => {
            dispatch(SET_TYPES(data))
        }).catch(e => console.log(e.message))

        BrandApi.fetchBrands().then(data => {
            dispatch(SET_BRANDS(data))
        }).catch(e => console.log(e.message))

        DeviceApi.fetchDevices(null, null, 1, 3).then(data => {
            dispatch(SET_DEVICES(data.rows));
            dispatch(SET_PAGINATION_TOTAL_COUNT(data.count));
        }).catch(e => console.log(e.message))

    }, [])


    useEffect(() => {
        DeviceApi.fetchDevices(selectedType.id, selectedBrands.id, pageFromRedux, 3).then(data => {
            dispatch(SET_DEVICES(data.rows));
            dispatch(SET_PAGINATION_TOTAL_COUNT(data.count));
        }).catch(e => console.log(e.message));
    }, [pageFromRedux, selectedType.id, selectedBrands.id])

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
                        <PaginationInPage/>
                    </Col>
                </Row>
                :
                <Auth/>
            }
        </Container>
    );
};

export default Shop;