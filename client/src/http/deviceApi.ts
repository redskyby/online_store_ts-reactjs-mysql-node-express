import {$authHost, $host} from "./index";

class DeviceApi {
    public async createDevice(type: string) {
        const {data} = await $authHost.post('api/device', type);
        return data;
    }

    public async fetchDevices() {
        const {data} = await $host.get('api/device');
        return data;
    }
    public async fetchOneDevice(id:number) {
        const {data} = await $host.get('api/device/' + id);
        return data;
    }
}

export default new DeviceApi();