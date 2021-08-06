import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://api.jsonbin.io/b/610bc629f098011544ababcc/2'
});

export const UserAPI = {
    getAll: function () {
        return axiosInstance.request({
            mothod: "GET",
            url: "/" 
        });
    },
}