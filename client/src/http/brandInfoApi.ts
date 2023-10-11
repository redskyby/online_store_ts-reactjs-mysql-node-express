import {$host} from "./index";
class BrandInfoApi {
    public async fetchInfoBrand(deviceId: string) {

        const {data} = await $host.get(`api/info/${deviceId}`);
        return data;
    }
}

export default new BrandInfoApi();