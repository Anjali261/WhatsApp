
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

    const {account , socket } = useContext(AccountContext)

    useEffect(() =>{
        const fetchData = async() =>{
           let response = await getUsers();
           const fiteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
           setUsers(fiteredData);
        }
        fetchData();
    },[text])


    useEffect(() =>{
        socket.current.emit('addUser', account);
    })
  return (




<Component>
{
    users && users.map((user, index) => (
        user.sub !== account.sub && 
            <>
                <Conversation user={user} />
                {
                    <StyleDivider />
                }
            </>
    ))
}
</Component>



    )
}

export default Conversations