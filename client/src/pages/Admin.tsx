import React from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const Admin = () => {


    return (
        <Container className={"d-flex flex-column"}>
            <Button variant={"outline-dark"} className={"mt-4 p-2"}>Добавить тип</Button>
            <Button variant={"outline-dark"} className={"mt-4 p-2"}>Добавить бренд</Button>
            <Button variant={"outline-dark"} className={"mt-4 p-2"}>Добавить устройство</Button>
            <CreateBrand/>
            <CreateDevice/>
            <CreateType show={true} onHide={false}/>
        </Container>
    );
};

export default Admin;