import React, {useState} from 'react';
import {Button, Form, FormControl, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle} from "react-bootstrap";
import TypeApi from "../../http/typeApi";

const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState('');

    const addType = () => {
        TypeApi.createType({name : value}).then(data => {
                setValue('')
                onHide();
            }
        ).catch(e => console.log(e.message))

    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size={"lg"}
        >
            <ModalHeader closeButton>
                <ModalTitle>
                    Добавить тип
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormControl
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название типов..."}
                    />
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button
                    variant={"outline-danger"}
                    onClick={onHide}
                >
                    Закрыть
                </Button>
                <Button
                    variant={"outline-success"}
                    onClick={addType}
                >
                    Добавить
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateType;