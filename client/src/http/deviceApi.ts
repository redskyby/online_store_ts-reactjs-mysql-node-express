import {$authHost, $host} from "./index";

class DeviceApi {
    public async createDevice(type) {
        const {data} = await $authHost.post('api/device', type);
        return data;
    }

    // public async fetchDevices() {
    //     const {data} = await $host.get('api/device');
    //     return data;
    // }
    public async fetchDevices(typeId, brandId, page, limit = 5) {
        const {data} = await $host.get('api/device', {
            params: {
                typeId, brandId, page, limit
            }
        });
        return data;
    }

    public async fetchOneDevice(id: string) {
        const {data} = await $host.get('api/device/' + id);
        return data;
    }
}

export default new DeviceApi();