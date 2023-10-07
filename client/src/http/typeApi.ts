import {$authHost, $host} from "./index";



class TypeApi {
    public async createType(type) {
        const {data} = await $authHost.post('api/type', type);
        return data;
    }

    public async fetchTypes() {
        const {data} = await $host.get('api/type');
        return data;
    }

}

export default new TypeApi();