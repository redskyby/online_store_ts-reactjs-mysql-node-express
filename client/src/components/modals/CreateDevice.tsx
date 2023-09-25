import React, {useState} from 'react';
import {
    Button, Col,
    Dropdown,
    Form,
    FormControl, FormGroup,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalTitle, Row
} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../../redux";


const CreateDevice = ({show, onHide}) => {
    const types = useSelector((state: RootState) => state.isDeviceToolkit.types);
    const brands = useSelector((state: RootState) => state.isDeviceToolkit.brands);
    const [info, setInfo] = useState<{ title: string; description: string; number: number; }[]>([]);

    const addInfo = (): void => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

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
                    <Button
                        className={"w-25 mt-3"}
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {
                        info.map(i =>
                            <Row className={"mt-2"} key={i.number}>
                                <Col md={4}>
                                    <FormControl
                                        placeholder={"Введите название свойства"}
                                    />
                                </Col>
                                <Col md={4}>
                                    <FormControl
                                        placeholder={"Введите описание свойства"}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button
                                        variant={'outline-danger'}
                                    >Удалить</Button>
                                </Col>
                            </Row>
                        )
                    }
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