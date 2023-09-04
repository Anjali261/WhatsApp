import React from 'react'
import {AppBar, Box,Toolbar,styled} from '@mui/material'
import LoginDialog from './account/LoginDialog'
import ChatDialog from "../components/chat/ChatDialog"
import { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider'
const Component = styled(Box)`
height:100vh;
background-color: #DCDCDC;
`

const Header = styled(AppBar)`
height:125px;
background-color: #00A884;
box-shadow:none;
`

const LoginHeader = styled(AppBar)`
height:220px;
background-color: #00bfa5;
box-shadow:none;
`


const Messanger = () => {
//taking value of account from contextAPI
const {account} = useContext(AccountContext);


  return (
    
    <Component>  
        {
            account ?
            <>
            <Header>
            <Toolbar>
        
            </Toolbar>
            </Header>
            <ChatDialog />
            </>
            :
            <>
            <LoginHeader>
            <Toolbar>
        
            </Toolbar>
            </LoginHeader>
            <LoginDialog/>
            </>
        }  
 
    </Component>
     
  )
}

export default Messanger