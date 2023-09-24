import React from 'react';
import {
    Button,
    Dropdown,
    Form,
    FormControl, FormGroup,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalTitle
} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../../redux";


const CreateDevice = ({show, onHide}) => {
    const types = useSelector((state: RootState) => state.isDeviceToolkit.types)
    const brands = useSelector((state: RootState) => state.isDeviceToolkit.brands)

    return (
        <Modal
            show={show}
            onHide={onHide}
            size={"lg"}
        >
            <ModalHeader closeButton>
                <ModalTitle>
                    Добавить устройство
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form className={'d-flex flex-column'}>
                    <FormGroup className={'d-flex flex-row'}>
                        <Dropdown id="dropdown-basic">
                            <Dropdown.Toggle>Выбери тип</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {types.map(type =>
                                    <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                                )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown id="dropdown-basic" className={"ms-3"}>
                            <Dropdown.Toggle>Выбери бренд</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {brands.map(brand =>
                                    <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                                )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            className={"mt-3"}
                            placeholder={"Введите название устройства"}
                        />
                        <FormControl
                            className={"mt-3"}
                            placeholder={"Введите стоимость устройства"}
                            type={"number"}
                        />
                        <FormControl
                            className={"mt-3"}
                            type={"file"}
                        />

                    </FormGroup>
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
                    onClick={onHide}
                >
                    Добавить
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateDevice;