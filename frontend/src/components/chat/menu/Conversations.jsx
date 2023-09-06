
import { useEffect , useState, useContext} from 'react'
import { getUsers } from '../../../service/api'
import React from 'react'
import { Box } from '@mui/material';
import Conversation from './Conversation';

import { AccountContext } from '../../../context/AccountProvider';
const Conversations = () => {
//multiple objects always comes in array . so passing empty array to useState
    const [users,setUsers]= useState([]);

    const {account } = useContext(AccountContext)

    useEffect(() =>{
        const fetchData = async() =>{
           let response = await  getUsers();
           setUsers(response);
        }
        fetchData();
    },[])
  return (
   <Box>
    {
        users.map(user =>(
            //Sub is the unique key
            user.sub !== account.sub &&
            // data is passed as a prop
            <Conversation user ={user} />

        ))
    
    }
   </Box>

    )
}

export default Conversations