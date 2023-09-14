import { Server} from "socket.io";
const io = new Server(9000, {
    cors:{
        origin:"http://localhost:3000",
    }

})
//active user
let users=[];

const addUser = (userData , socketId) =>{
    !users.some(user => user.sub === userData.sub) && (users.push({...userData,socketId}))

}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}

const getUser = (userId) => {
    return users.find(user => user.sub === userId);
}


io.on('connection', (socket) =>{
    console.log('user connected');

    //connect
    socket.on("addUser", userData =>{
        addUser(userData , socket.id);
        //send data from backend to frontend
        io.emit("getUsers",users);
    })
    //send message
    socket.on('sendMessage', (data) => {
        const user = getUser(data.receiverId);
        // io.to(user.socketId).emit('getMessage', data)

        if (user) {
            io.to(user.socketId).emit('getMessage', data);
        } else {
            // Handle the case where the user is not found
            console.error(`User not found for receiverId: ${data.receiverId}`);
            // Optionally, emit an error message to the client
            socket.emit('errorMessage', 'User not found');
        }
    })

    //disconnect
    socket.on('disconnect', () => {
        console.log('user disconnected');
        removeUser(socket.id);
        io.emit('getUsers', users);
    })

})