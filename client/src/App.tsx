import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {useDispatch, useSelector} from "react-redux";
import UserApi from "./http/userApi";
import {IS_SET_AUTH, IS_SET_USER} from "./redux/slice/isAuthSlice";
import {RingLoader} from "react-spinners";
import {Container} from "react-bootstrap";
import {RootState} from "./redux";

interface User {
    email: string,
    role: string,
    iat: number,
    exp: number
}

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.isAuthToolkit.user);


    useEffect(() => {
        if (localStorage.getItem('token') !== null && localStorage.getItem('token') !== undefined) {
            UserApi.check().then(data => {
                const userData = data as User;
                dispatch(IS_SET_USER(userData))
                dispatch(IS_SET_AUTH(true));
            }).catch(e => {
                    console.log(e.message);
                    localStorage.removeItem('token');
                }).finally(() => setLoading(false))
        } else {
            localStorage.removeItem('token');
            dispatch(IS_SET_AUTH(false));
            dispatch(IS_SET_USER(null));
            setLoading(false);
        }
    }, [])

    if (loading) {
        return (
            <Container className={'d-flex justify-content-center align-items-center '}
                       style={{height: "100vh"}}>
                <RingLoader color={'#36d7b7'} size={'100px'}/>
            </Container>
        )
    }

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
