import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

class DeviceApi {
    public async createType(type: string) {
        const {data} = await $authHost.post('api/type', type);
        return data;
    }

    public async fetchTypes() {
        const {data} = await $host.post('api/type', );
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token)
    }

    public async check() {
        const {data} = await $authHost.get('api/user/auth');
        localStorage.setItem('token', data.token)
        return jwtDecode(data.token)
    }
}

export default new DeviceApi();