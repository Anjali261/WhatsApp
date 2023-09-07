
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
//    <Component>
//     {
//         users.map(user =>(
//             //Sub is the unique key
//             user.sub !== account.sub &&
//             // data is passed as a prop
//             <>
//                <Conversation user ={user} />
//                <StyleDivider />
            
//             </>

//         ))
    
//     }
//    </Component>




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