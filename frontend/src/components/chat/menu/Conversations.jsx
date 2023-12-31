
import { useEffect , useState, useContext} from 'react'
import { getUsers } from '../../../service/api'
import React from 'react'
import { Box , styled , Divider} from '@mui/material';
import Conversation from './Conversation';

import { AccountContext } from '../../../context/AccountProvider';



const Component = styled(Box)`
height:81vh;
overflow:overlay;
`;
const StyleDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: 6;
`




const Conversations = ({text}) => {
//multiple objects always comes in array . so passing empty array to useState
    const [users,setUsers]= useState([]);

    const {account , socket , setActiveUsers} = useContext(AccountContext)

    useEffect(() =>{
        const fetchData = async() =>{
           let data = await getUsers();
        //    let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
        let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));	
            setUsers(fiteredData);
        }
        fetchData();
    },[text])


    useEffect(() =>{
        //sending data from frontend to backend using emit
        socket.current.emit('addUser', account);
        //taking data from backend using socket.on
        socket.current.on("getUsers" , users => {
            setActiveUsers(users);

        })
    },[account])
  return (




<Component>
{
    users && users.map((user, index) => (
        user.sub !== account.sub && 
            <>
                <Conversation user={user} />
                {
                                users.length !== (index + 1)  && <StyleDivider />
                            }
            </>
    ))
}
</Component>



    )
}

export default Conversations