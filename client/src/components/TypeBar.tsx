import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../redux";
import {ListGroup, ListGroupItem} from "react-bootstrap";


const TypeBar = () => {
    const types = useSelector((state: RootState) => state.isDeviceToolkit.types);

    return (
        <ListGroup>
            {
                types.map(type =>
                    <ListGroupItem key={type.id}>
                        {type.name}
                    </ListGroupItem>
                )
            }
        </ListGroup>
    );
};

export default TypeBar;