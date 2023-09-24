import React from 'react';
import {Button, Container} from "react-bootstrap";

const Admin = () => {
    return (
        <Container className={"d-flex flex-column"}>
            <Button variant={"outline-dark"} className={"mt-4 p-2"}>Добавить тип</Button>
            <Button variant={"outline-dark"} className={"mt-4 p-2"}>Добавить бренд</Button>
            <Button variant={"outline-dark"} className={"mt-4 p-2"}>Добавить устройство</Button>
        </Container>
    );
};

export default Admin;