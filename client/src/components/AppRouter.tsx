import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/const";


const AppRouter = () => {
    const isAuth: boolean = false;

    return (
        <Routes>
            {isAuth &&
                authRoutes.map(({path, Component}) => {
                    return <Route
                        key={path}
                        path={path}
                        element={<Component/>}
                    />
                })
            }
            {
                publicRoutes.map(({path, Component}) => {
                    return <Route
                        key={path}
                        path={path}
                        element={<Component/>}
                    />
                })
            }
            <Route path="*" element={<Navigate to={SHOP_ROUTE}/>}/>
        </Routes>
    );
};

export default AppRouter;