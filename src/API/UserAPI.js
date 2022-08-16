import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://api.npoint.io/c38e40acb58d06764b82'
});

export const UserAPI = {
    getAll: function () {
        return axiosInstance.request({
            mothod: "GET",
            url: "/" 
        });
    },
}