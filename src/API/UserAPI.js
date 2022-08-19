import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://api.jsonbin.io/v3/b/62ffc4525c146d63ca765ec3'
});

export const UserAPI = {
    getAll: function () {
        return axiosInstance.request({
            mothod: "GET",
            url: "/" 
        });
    },
}