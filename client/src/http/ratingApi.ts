import {$host} from "./index";
class RatingApi {
    public async fetchRating(deviceId: string) {

        const {data} = await $host.get(`api/info/${deviceId}`);
        return data;
    }
}

export default new RatingApi();