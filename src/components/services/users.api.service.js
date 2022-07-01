import axios from "axios";

let axiosInstance = axios.create({baseURL:'https://jsonplaceholder.typicode.com/users'})
const getUsers = () => axiosInstance.get('')
const getUsersPosts = (id) => axiosInstance.get(`/${id}/posts`)

export {getUsers,getUsersPosts}