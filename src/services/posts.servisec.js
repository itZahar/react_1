import {axiosService} from "./axios.services";
import {urls} from "../constants";


export const getPosts= (id) => axiosService.get(`${urls.posts}/${id}`)