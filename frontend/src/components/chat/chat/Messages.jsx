import React,{useState , useEffect} from 'react'
import { Box , styled} from '@mui/material';
import Footer from './Footer';
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { getMessages, newMessages } from '../../../service/api';
import Message from './Message';
const Wrapper = styled(Box)`
background-image: url(${`https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png`});
background-size:50%;
`;

const Component = styled(Box)`
height:80vh;
overflow-y: scroll; 
`

const Container = styled(Box)`
padding: 1px 80px;
`

const Messages = ({person , conversation}) => {
  const [value,setValue]=useState('');
const [messages, setMessages] = useState([]);
  const { account } = useContext(AccountContext);

const [newMessageFlag , setNewMessageFlag] = useState(false);
// Fetch Messages from database
useEffect(() =>{
  const getMessageDetails = async () =>{
   let data =  await getMessages(conversation?._id);
  //  console.log(data);
   setMessages(data);
  }
  conversation._id && getMessageDetails();
 
},[person._id, conversation?._id , newMessageFlag])


const sendText = async(e) =>{
  let code = e.keyCode || e.which;
  if(code === 13){
    let message ={
      senderId: account.sub,
      receiverId:person.sub,
      conversationId: conversation._id, // Add a check here

      // conversationId: conversation ? conversation._id : null, // Add a check here
      type:'text',
      text:value
 
    }

    await newMessages(message);
    setValue('');
    setNewMessageFlag(prev => !prev)
  }

}

  return (
    <Wrapper>
      <Component>
        {
          messages && messages.map(message =>(
          <Container>
          <Message message={message} />
          </Container>
          ))
        }


      </Component>
      <Footer sendText={sendText}
      setValue= {setValue}
      value={value}
      />
      

    </Wrapper>
  )
}

export default Messages