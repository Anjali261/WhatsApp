import express from 'express';
const route = express.Router();

import { addUser } from "../controller/user-controller.js"

route.post('/add', addUser);

export default route;