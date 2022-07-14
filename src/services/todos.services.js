import {axiosService} from "./axios.services";
import {urls} from "../constants";

export const todosServices = () => axiosService.get(urls.todos)