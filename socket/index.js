import { Server} from "socket.io";
const io = new Server(9000, {
    cors:{
        origin:"http://localhost:3000",
    }

})
//active user
let users=[];

const addUser = (userData,socketId) =>{
    //
    !user.some(user => user.sub == userData.sub) && (users.push({...userData,socketId}))

}

io.on('connection', (socket) =>{
    console.log('user connected');

    socket.on("addUser", userData =>{
        addUser(userData , socket.id);
    })
})