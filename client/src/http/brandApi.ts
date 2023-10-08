import {$authHost, $host} from "./index";

class BrandApi {
    public async createBrand(brand) {
        const {data} = await $authHost.post('api/brand', brand);
        return data;
    }

    public async fetchBrands() {
        const {data} = await $host.get('api/brand');
        return data;
    }
}

export default new BrandApi();