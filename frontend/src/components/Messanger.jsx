import React from 'react'
import {AppBar, Box,Toolbar,styled} from '@mui/material'
import LoginDialog from './account/LoginDialog'

const Component = styled(Box)`
height:100vh;
background-color: #DCDCDC;
`

const Header = styled(AppBar)`
height:220px;
background-color: #00bfa5;
box-shadow:none;
`


const Messanger = () => {
  return (
    <>
    <Component>    
  <Header>
    <Toolbar>

    </Toolbar>
    </Header>
    <LoginDialog/>
    </Component>
      </>
  )
}

export default Messanger