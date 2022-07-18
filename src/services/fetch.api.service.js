import {baseURL} from "../constants";

export const fetchApiService = (obj) => fetch(`${baseURL}${obj}`).then(value => value.json())