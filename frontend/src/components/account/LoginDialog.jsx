import { Dialog,Box, Typography, ListItem , List, styled} from '@mui/material'
import shadows from '@mui/material/styles/shadows'
import React from 'react'
import {qrCodeImage} from '../../constants/data'; 
import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';

import { addUser } from '../../service/api';

const Component = styled(Box)`
display:flex;

`
const Container = styled(Box)`
padding:56px 0 56px 56px;

`
const QRCode = styled('img')({
    height:264,
    width:264,
    margin:'50px 0 0 50px'
} 
)
const Title = styled(Typography)`
font-size:25px;
color:#525252;
font-weight:300;
font-family:inherit;
margin-bottom:25px;
`
const styleList = styled(List)`
& > li {
    padding:0;
    margin-top: 15px;
    font-sixe:18px;
    line-height:28px;
    color: #4a4a4a;
    
}
`


const dialogStyle ={
    marginTop:'12%',
    height: '96%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden',
}

const LoginDialog = () => {

    const { setAccount } =useContext(AccountContext);

const onLoginSuccess = async(res) =>{
   const decode =  jwt_decode(res.credential);
//    console.log(decode);
// putting decoded information in setAccount
   setAccount(decode);
   //calling addUser API to save the login user detail
   await addUser(decode);

}
const onLoginError = (res) =>{
    console.log('Login Failed', res);

}



  return (
    <Dialog open={true}
    PaperProps={{sx:dialogStyle}}
    hideBackdrop={true}
    >

    <Component>
        <Container>
        <Title>
            To use Whatsaap on Your Computer
        </Title>
        <styleList>
            <ListItem>1. Open WhatsApp on Your Computer</ListItem>
            <ListItem>2.Tap Menu : or Setting and Select LinkedDevices</ListItem>
            <ListItem>
                3.Point your Phone to this screen to capture the code
            </ListItem>
        </styleList>
        </Container>
        <Box style={{position:'relative'}}>
            <QRCode src={qrCodeImage} alt="qr code" />
            <Box style={{position:'absolute', top: '50%', transform:`translateX(25%)`}}>
            <GoogleLogin 
                onSuccess={onLoginSuccess}
                onError={onLoginError}
            
            />
            </Box>
        </Box>
    </Component>
    </Dialog>
  )
}

export default LoginDialog