import * as request from "./requester";

const baseUrl = 'http://127.0.0.1:8000/pets/'
const usersUrl = 'http://127.0.0.1:8000/users-view'
const createUserUrl = 'http://127.0.0.1:8000/register/'



// GET

export const getUsers = () => request.get(usersUrl)

export const getPets = () => request.get(baseUrl)


// POST

export const createUser = (userData) => request.post(createUserUrl, userData)