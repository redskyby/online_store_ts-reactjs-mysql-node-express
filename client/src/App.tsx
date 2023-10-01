import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {useDispatch, useSelector} from "react-redux";
import UserApi from "./http/userApi";
import {IS_SET_AUTH} from "./redux/slice/isAuthSlice";
import {RingLoader} from "react-spinners";
import {Container} from "react-bootstrap";
import {RootState} from "./redux";


function App() {
    const isAuth: boolean = useSelector((state: RootState) => state.isAuthToolkit.isAuth);
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
    }, [isAuth])

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
