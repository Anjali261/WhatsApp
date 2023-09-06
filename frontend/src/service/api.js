import axios from 'axios'
const url ='http://localhost:8000';
//data is body of post api which will come from backend;
export const addUser = async(data) =>{
    try{
        await axios.post(url, data);

    }catch(error){
        console.log('Error while addUser API' , error.message);

    }
}