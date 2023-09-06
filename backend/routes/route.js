import express from 'express';
const route = express.Router();

import { addUser ,getUsers} from "../controller/user-controller.js"

route.post('/add', addUser);
route.get('/users', getUsers);
export default route;