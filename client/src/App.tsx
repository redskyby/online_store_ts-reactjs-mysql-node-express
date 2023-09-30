import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {useDispatch} from "react-redux";
import UserApi from "./http/userApi";
import {IS_SET_AUTH} from "./redux/slice/isAuthSlice";
import {RingLoader} from "react-spinners";
import {Container} from "react-bootstrap";

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            UserApi.check().then(data => {
                dispatch(IS_SET_AUTH(true));
            }).finally(() => setLoading(false))
        }else{
            setLoading(false);
        }
    }, [])

    if (loading) {
        return (
            <Container className={'d-flex justify-content-center align-items-center '}
                       style={{height:"100vh"}}>
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
