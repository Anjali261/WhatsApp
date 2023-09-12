import { createContext , useState ,useRef , useEffect} from "react";

import { io } from 'socket.io-client';

export const AccountContext = createContext( null);

const AccountProvider = ( { children}) =>{

//store inf of login account globally
const [account,setAccount] = useState();
const [person,setPerson] = useState({});


//establish socket.io through useRef
const socket = useRef();
//estalish socket
useEffect(()=>{
    socket.current = io('ws://localhost:9000')
},[])

    return(
        <AccountContext.Provider value={{
            account, 
            setAccount,
            person,
            setPerson,
            socket

        }}>
            {children}
            </AccountContext.Provider>
    )
}
export default AccountProvider;