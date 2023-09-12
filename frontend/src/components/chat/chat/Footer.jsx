import React, { useState , useEffect} from 'react'
import { Box, InputBase , styled} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MicIcon from '@mui/icons-material/Mic';

import { uploadFile } from '../../../service/api';
const Container = styled(Box)`
height: 55px;
background: #ededed;
display:flex;
width:100%;
align-items:center;
padding:0 15px;
& > *{
    margin:5px;
    color:#919191;

}
`
const Search = styled(Box)`
background-color: #FFFFFF;
border-radius: 18px;
width: calc(94% - 100px);
`
const InputField = styled(InputBase)`
width:100%;
padding: 20px;
height:20px;
padding-left:25px;
font-size:14px;
`
const ClipIcon = styled(AttachFileIcon)`
transform: rotate(40deg)
`

const Footer = ({sendText, setValue, value, file, setFile}) => {

  //before sending file you have to save that in database

  useEffect(() =>{
    const getImage = async() =>{
      if(file) {
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);

        await uploadFile(data);
      }
    }
    getImage();

  },[file])



const onFileChange = (e) =>{
  console.log(e);
  setFile(e.target.file[e]);
  setValue(e.target.file[0].name)

}

  return (
<Container>
<EmojiEmotionsOutlinedIcon />
<label htmlFor='fileInput'>
<ClipIcon />
</label>
<input 
  type="file" id="fileInput"  style={{display:'none'}}
  onChange={(e) => onFileChange(e)}
  
  />
<Search>
    {/* <InputField placeholder='Type a message'
    
    onChange={(e) =>setText(e.target.value) }
    onKeyPress={(e)=> sendText()}

    /> */}

<InputField
                    placeholder="Type a message"
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e) => sendText(e)}
                    
                    value={value}
                />
</Search>
<MicIcon />



</Container>
  )
}

export default Footer;