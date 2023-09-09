import express from 'express';
const route = express.Router();
import { newConversation } from '../controller/conversation-controller.js';
import { addUser ,getUser} from "../controller/user-controller.js"

route.post('/add', addUser);
route.get('/users', getUser);
route.post('/conversation/add', newConversation);
export default route;