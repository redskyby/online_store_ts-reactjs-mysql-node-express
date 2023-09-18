import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = () => {
    const devices = useSelector((state: RootState) => state.isDeviceToolkit.devices);
    // const selectedBrand = useSelector((state: RootState) => state.isDeviceToolkit.selectedBrands);
    const dispatch = useDispatch();

    return (
        <Row className={"d-flex"}>
            {
                devices.map(device =>
                    <DeviceItem key={device.id} {...device}/>
                )
            }
        </Row>
    );
};

export default DeviceList;