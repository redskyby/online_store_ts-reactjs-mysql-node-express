import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../redux";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import SelectCountItems from "./selectForm/SelectCountItems";

const DeviceList = () => {
    const devices = useSelector((state: RootState) => state.isDeviceToolkit.devices);

    return (
        <Row className={"d-flex"}>
            <SelectCountItems/>
            {
                devices.map(device =>
                    <DeviceItem key={device.id} {...device}/>
                )
            }
        </Row>
    );
};

export default DeviceList;