import axios from 'axios'
const url ='http://localhost:8000';
//data is body of post api which will come from backend;
export const addUser = async(data) =>{
    try{
       let response =  await axios.post(`${url}/add`, data);
        return response.data;

    }catch(error){
        console.log('Error while addUser API' , error.message);

    }
}
export const getUsers = async() =>{
    try{
       let response =  await axios.get(`${url}/users`)
    //    console.log(response);    
       return response.data;
    }catch(error){
        console.log(`Error while calling getUsers api`, error.message);
    }
}

export const setConversation = async(data) =>{
    try{
        await axios.post(`${url}/conversation/add`,data)

    }catch(error){
        console.log(`Error while calling getUsers api`, error.message);

    }
}


export const getConversation= async(users) =>{
    try{
       let response =  await axios.post(`${url}/conversation/get`,users)
        return response.data;
    }catch(error){
        console.log(`Error while calling getConversation api`, error.message);

    }
}

export const  newMessages = async(data) =>{
    try {
      return  await axios.post(`${url}/message/add`,data)

    }catch(error){
       console.log("Error while calling newMessages api", error.message); 
    }
}

export  const getMessages = async(id) =>{
    try{
        let response =   await axios.get(`${url}/message/get/${id}`);
        return response.data;

    }catch(error){
        console.log('Error in getting messages', error.message );
    }
}

export const uploadFile = async(data) =>{
    try{
        return await axios.post(`${url}/file/upload`,data);
    }catch(error){
        console.log('Error while upLoad file api', error.message );
    }
}