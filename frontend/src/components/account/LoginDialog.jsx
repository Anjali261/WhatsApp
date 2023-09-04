import { Dialog,Box, Typography, ListItem , List, styled} from '@mui/material'
import shadows from '@mui/material/styles/shadows'
import React from 'react'
import {qrCodeImage} from '../../constants/data'; 
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
  return (
    <Dialog open={true}
    PaperProps={{sx:dialogStyle}}>

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
        <Box>
            <QRCode src={qrCodeImage} alt="qr code" />
        </Box>
    </Component>
    </Dialog>
  )
}

export default LoginDialog