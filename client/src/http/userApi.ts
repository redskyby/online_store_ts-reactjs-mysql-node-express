import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (email: string, password: string) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'});
    localStorage.setItem('token' , data.token);
    return jwtDecode(data.token);
}
export const login = async (email: string, password: string) => {
    const {data}  = await $host.post('api/user/login', {email, password});
    localStorage.setItem('token' , data.token);
    return jwtDecode(data.token);
}
export const check = async () => {
    const response = await $host.get('api/user/auth');
    return response;
}