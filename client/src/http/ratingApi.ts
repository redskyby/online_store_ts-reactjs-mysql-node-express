import {$host} from "./index";

class RatingApi {
    public async fetchRating(deviceId) {

        const data = await $host.get(`api/rating/?deviceId=${deviceId}`);

        return data;
    }
}

export default new RatingApi();