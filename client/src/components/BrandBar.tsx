import React from 'react';
import {Card, Row} from 'react-bootstrap';
import {useSelector} from "react-redux";
import {RootState} from "../redux";

const BrandBar = () => {
    const brands = useSelector((state: RootState) => state.isDeviceToolkit.brands);
    return (
        <Row className={'d-flex'}>
            {
                brands.map(brand =>
                    <Card
                        className={"pt-3"}
                        key={brand.id}>
                        {brand.name}
                    </Card>
                )
            }
        </Row>
    );
};

export default BrandBar;