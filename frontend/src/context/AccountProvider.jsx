import { createContext , useState } from "react";

export const AccountContext = createContext( null);

const AccountProvider = ( { children}) =>{

//store inf of login account globally
const [account,setAccount] = useState();

    return(
        <AccountContext.Provider value={{
            account, 
            setAccount

        }}>
            {children}
            </AccountContext.Provider>
    )
}
export default AccountProvider;