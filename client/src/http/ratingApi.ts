import {$authHost, $host} from "./index";

class RatingApi {
    public async fetchRating(deviceId) {
        const data = await $host.get(`api/rating/?deviceId=${deviceId}`);
        return data;
    }

    public async createRating(deviceId, rate, userId = 3) {
        const data = await $authHost.post(`api/rating/?deviceId=${deviceId}&rate=${rate}&userId=${userId}`);
        return data;
    }
}

export default new RatingApi();