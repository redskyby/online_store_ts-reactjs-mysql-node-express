import React, {useState} from 'react';
import {Button, Form, FormControl, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle} from "react-bootstrap";
import brandApi from "../../http/brandApi";

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('');

    const addBrand = () => {
        brandApi.createBrand({name : value}).then(data => {
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
                    Добавить бренд
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormControl
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название брэнда..."}
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
                    onClick={addBrand}
                >
                    Добавить
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateBrand;