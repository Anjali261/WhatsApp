
import { useEffect , useState} from 'react'
import { getUsers } from '../../../service/api'
import React from 'react'

const Conversations = () => {
//multiple objects always comes in array . so passing empty array to useState
    const [users,setUsers]= useState([]);

    useEffect(() =>{
        const fetchData = async() =>{
           let response = await  getUsers();
           setUsers(response);
        }
        fetchData();
    },[])
  return (
    <>
    </>

    )
}

export default Conversations