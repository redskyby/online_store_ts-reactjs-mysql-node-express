import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux";
import {Row} from "react-bootstrap";

const DeviceList = () => {
    const devices = useSelector((state: RootState) => state.isDeviceToolkit.devices);
    // const selectedBrand = useSelector((state: RootState) => state.isDeviceToolkit.selectedBrands);
    const dispatch = useDispatch();

    return (
        <Row className={"d-flex"}>
            {/*{*/}
            {/*    devices.map(device =>*/}
            {/*        */}
            {/*    )*/}
            {/*}*/}
        </Row>
    );
};

export default DeviceList;