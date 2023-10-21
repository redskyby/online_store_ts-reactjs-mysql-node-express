import React from 'react';
import {Card, Container, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux";
import {SET_SELECTED_BRAND} from '../redux/slice/deviceSlice';

const BrandBar = () => {
    const brands = useSelector((state: RootState) => state.isDeviceToolkit.brands);
    const selectedBrand = useSelector((state: RootState) => state.isDeviceToolkit.selectedBrands);
    const dispatch = useDispatch();

    return (
        <Container>
            <Row className={'d-flex flex-row'}>
                {
                    brands.map(brand =>
                        <Card
                            style={{cursor: "pointer"}}
                            className={"p-3 w-auto"}
                            key={brand.id}
                            onClick={() => dispatch(SET_SELECTED_BRAND(brand))}
                            border={brand.id === selectedBrand.id ? "danger" : "light"}
                        >
                            {brand.name}
                        </Card>
                    )
                }
            </Row>
        </Container>
    );
};

export default BrandBar;