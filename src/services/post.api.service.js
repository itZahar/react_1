
import {urls} from "../constants";
import {fetchApiService} from "./fetch.api.service";

export const getPosts = () => fetchApiService(urls.posts)

