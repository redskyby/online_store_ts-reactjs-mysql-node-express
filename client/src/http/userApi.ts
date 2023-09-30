import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";


class UserApi {
    public async registration(email: string, password: string) {
        const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'});
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token);
    }

    public async login(email: string, password: string) {
        const {data} = await $host.post('api/user/login', {email, password});
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token)
    }

    public async check() {
        const response = await $host.get('api/user/auth');
        return response;
    }

}

// export const registration = async (email: string, password: string) => {
//     const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'});
//     localStorage.setItem('token', data.token);
//     return jwtDecode(data.token);
// }
// export const login = async (email: string, password: string) => {
//     const {data} = await $host.post('api/user/login', {email, password});
//     localStorage.setItem('token', data.token);
//     return jwtDecode(data.token);
// }
// export const check = async () => {
//     const response = await $host.get('api/user/auth');
//     return response;
// }

export default new UserApi();

