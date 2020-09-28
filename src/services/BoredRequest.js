import axios from "axios";

const http = axios.create({
    baseURL: "http://localHost:3000"
});

export default {
    getParticipants(participants) {
        return http.get(`http://www.boredapi.com/api/activity?participants=${participants}`)
    },
    getType(type) {
        return http.get(`http://www.boredapi.com/api/activity?type=${type}`)
    }
}