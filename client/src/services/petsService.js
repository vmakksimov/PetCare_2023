import * as request from "./requester";

const baseUrl = 'http://127.0.0.1:8000/pets/'



export const getPets = () => request.get(baseUrl)