import axios from "axios";
let axiosInstance = axios.create({
    baseURL:"http://jsonplaceholder.typicode.com/users",
    headers:{"Content-Type":"application/json; charset=UTF-8"}
})
const saveUser = (data) => axiosInstance.post('',{...data})

export {saveUser}



