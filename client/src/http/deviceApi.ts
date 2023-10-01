import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

class DeviceApi {
    public async createType(type: string) {
        const {data} = await $authHost.post('api/type', type);
        return data;
    }

    public async fetchTypes() {
        const {data} = await $host.get('api/type');
        return data;
    }

}

export default new DeviceApi();