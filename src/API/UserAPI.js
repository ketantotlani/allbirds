import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://api.jsonbin.io/v3/b/610bc629f098011544ababcc'
});

export const UserAPI = {
    getAll: function () {
        return axiosInstance.request({
            mothod: "GET",
            url: "/" 
        });
    },
}