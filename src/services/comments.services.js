import {axiosService} from "./axios.services";
import {urls} from "../constants";

export const getComments = () => axiosService.get(urls.comments)