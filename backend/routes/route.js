import express from 'express';
const route = express.Router();

import { addUser ,getUser} from "../controller/user-controller.js"

route.post('/add', addUser);
route.get('/users', getUser);
export default route;