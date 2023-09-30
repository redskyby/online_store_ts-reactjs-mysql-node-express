import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./redux";
import UserApi from "./http/userApi";
import {IS_SET_AUTH} from "./redux/slice/isAuthSlice";
import {RingLoader} from "react-spinners";

function App() {
    const isAuth = useSelector((state: RootState) => state.isAuthToolkit.isAuth);
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
        return <RingLoader color={'red'}/>
    }

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
