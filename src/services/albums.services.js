import {axiosService} from "./axios.services";
import {urls} from "../constants";

export const getAlbums = () => axiosService.get(urls.albums)