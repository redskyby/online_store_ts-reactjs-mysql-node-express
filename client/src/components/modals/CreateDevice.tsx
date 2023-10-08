import React, {useEffect, useState} from 'react';
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
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux";
import {SET_BRANDS, SET_SELECTED_BRAND, SET_SELECTED_TYPE, SET_TYPES} from "../../redux/slice/deviceSlice";
import typeApi from "../../http/typeApi";
import brandApi from "../../http/brandApi";


const CreateDevice = ({show, onHide}) => {
    const types = useSelector((state: RootState) => state.isDeviceToolkit.types);
    const brands = useSelector((state: RootState) => state.isDeviceToolkit.brands);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState<{ title: string; description: string; number: number; }[]>([]);
    const dispatch = useDispatch();
    const selectedType = useSelector((state: RootState) => state.isDeviceToolkit.selectedType);
    const selectedBrand = useSelector((state: RootState) => state.isDeviceToolkit.selectedBrands);


    useEffect(() => {
        typeApi.fetchTypes().then(data => {
            dispatch(SET_TYPES(data));
        }).catch(e => console.log(e.message));
        brandApi.fetchBrands().then(data => {
            dispatch(SET_BRANDS(data));
        }).catch(e => console.log(e.message));
    }, [])

    const addInfo = (): void => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number: number): void => {
        setInfo(info.filter(i => i.number !== number));
    }

    const selectFile = (e) => {
        setFile(e.target.files[0]);
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
                            <Dropdown.Toggle>{selectedType.name || "Выбери тип"}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {types.map(type =>
                                    <Dropdown.Item
                                        onClick={() => dispatch(SET_SELECTED_TYPE(type))}
                                        key={type.id}>
                                        {type.name}
                                    </Dropdown.Item>
                                )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown id="dropdown-basic" className={"ms-3"}>
                            <Dropdown.Toggle>{selectedBrand.name || "Выбери бренд"}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {brands.map(brand =>
                                    <Dropdown.Item
                                        onClick={() => dispatch(SET_SELECTED_BRAND(brand))}
                                        key={brand.id}>
                                        {brand.name}
                                    </Dropdown.Item>
                                )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className={"mt-3"}
                            placeholder={"Введите название устройства"}
                        />
                        <FormControl
                            value={price}
                            onChange={e => setPrice(Number(e.target.value))}
                            className={"mt-3"}
                            placeholder={"Введите стоимость устройства"}
                            type={"number"}
                        />
                        <FormControl
                            className={"mt-3"}
                            type={"file"}
                            onChange={selectFile}
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
                                        onClick={() => removeInfo(i.number)}
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