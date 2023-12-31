import React  , {useState}from 'react'
import { useContext } from 'react'
import { Box , styled} from '@mui/material'
import { AccountContext } from '../../../context/AccountProvider'
import {Chat as MessageIcon, MoreVert} from '@mui/icons-material';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import HeaderMenu from './HeaderMenu';
import InfoDrower from '../../drawer/InfoDrower';



const Component = styled(Box)`
height:44px;
background:#ededed;
padding: 8px 16px;
display:flex;
align-item:center;

`

const Wrapper =styled(Box)`
margin-left:auto;
& > *{
    margin-left:2px;
    padding:8px;
    color:#000;
}
&:first-child{
font-size:22px;
margin-right:8px;
margin-top:2px;
}
`

const Image = styled('img')({
height:40,
width:40,
borderRadius:'50%',

})


const Header = () => {
  const {account} = useContext(AccountContext);

    const [openDrawer, setOpenDrawer] = useState(false);


    const toggleDrawer = () =>{
        setOpenDrawer(true);
    } 

  return (
    <>
    
    <Component>
        <Image src={account.picture} alt="" onClick={() =>toggleDrawer()}/>
        <Wrapper>
        <HistoryToggleOffIcon />

        <MessageIcon />
        <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
    </Component>
    <InfoDrower open={openDrawer} setOpen={setOpenDrawer}/>
    </>
  )
}

export default Header