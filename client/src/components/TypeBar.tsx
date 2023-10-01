import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {SET_SELECTED_TYPE} from "../redux/slice/deviceSlice";


const TypeBar = () => {
    const types = useSelector((state: RootState) => state.isDeviceToolkit.types);
    const selectedType = useSelector((state: RootState) => state.isDeviceToolkit.selectedType);
    const dispatch = useDispatch();
    return (
        <ListGroup>
            {
                types.map(type =>
                    <ListGroupItem
                        style={{cursor: "pointer"}}
                        key={type.id}
                        active={type.id === selectedType.id}
                        onClick={() => dispatch(SET_SELECTED_TYPE(type))}
                    >
                        {type.name}
                    </ListGroupItem>
                )
            }
        </ListGroup>
    );
};

export default TypeBar;