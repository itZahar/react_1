import {fetchApiService} from "./fetch.api.service";
import {urls} from "../constants";

export const getComments = () => fetchApiService(urls.comments)