import React,{useState , useEffect , useRef} from 'react'
import { Box , styled} from '@mui/material';
import Footer from './Footer';
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { getMessages, newMessages } from '../../../service/api';
import Message from './Message';
import { io } from 'socket.io-client';




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

const StyledFooter = styled(Box)`
    height: 55px;
    background: #ededed;
    // position: absolute;
    width: 100%;
    // bottom: 0
`;


// const Messages = ({person , conversation}) => {
//   const [value,setValue]=useState('');
// const [messages, setMessages] = useState([]);
//   const { account } = useContext(AccountContext);

// const [newMessageFlag , setNewMessageFlag] = useState(false);
// const [file,setFile] = useState();
// const [image,setImage] = useState('');

// const scrollRef = useRef();

// // Fetch Messages from database
// useEffect(() =>{
//   const getMessageDetails = async () =>{
//    let data =  await getMessages(conversation?._id);
//   //  console.log(data);
//    setMessages(data);
//   }
//   conversation._id && getMessageDetails();
 
// },[person._id, conversation?._id , newMessageFlag])


// useEffect(() =>{
//   scrollRef.current?.scrollIntoView({ transition: 'smooth'})


// },[messages])

// const sendText = async(e) =>{
//   let code = e.keyCode || e.which;
//   if(code === 13){
//     let message={};
//     if(!file){

//     message ={
//       senderId: account.sub,
//       receiverId:person.sub,
//       conversationId: conversation._id, // Add a check here

//       // conversationId: conversation ? conversation._id : null, // Add a check here
//       type:'text',
//       text:value
 
//     }
//   }else {
//      message ={
//       senderId: account.sub,
//       receiverId:person.sub,
//       conversationId: conversation._id, // Add a check here

//       // conversationId: conversation ? conversation._id : null, // Add a check here
//       type:'file',
//       text:image
    
//   }
// }

//     await newMessages(message);
//     setValue('');
//     setFile('');
//     setImage('');
//     setNewMessageFlag(prev => !prev)
//   }

// }

//   return (
//     <Wrapper>
//       <Component>
//         {
//           messages && messages.map(message =>(
//           <Container ref={scrollRef}>
//           <Message message={message} />
//           </Container>
//           ))
//         }


//       </Component>
//       <Footer sendText={sendText}
//       setValue= {setValue}
//       value={value}
//       file={file}
//       setFile={setFile}
//       setImage={setImage}
//       />
      

//     </Wrapper>
//   )
// }


// export default Messages;


const Messages = ({ person, conversation }) => {

const [newMessageFlag , setNewMessageFlag] = useState(false);

  const [messages, setMessages] = useState([]);
  const [incomingMessage, setIncomingMessage] = useState(null);
  const [value, setValue] = useState();
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  const scrollRef = useRef();

  const { account, socket} = useContext(AccountContext);

  useEffect(() => {
      socket.current.on('getMessage', data => {
          setIncomingMessage({
              ...data,
              createdAt: Date.now()
          })
      })
  }, []);
  
  useEffect(() => {
      const getMessageDetails = async () => {
          let data = await getMessages(conversation?._id);
          setMessages(data);
      }
      getMessageDetails();
  }, [conversation?._id, person._id, newMessageFlag]);

  useEffect(() => {
      scrollRef.current?.scrollIntoView({ transition: "smooth" })
  }, [messages]);

  useEffect(() => {
      incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && 
          setMessages((prev) => [...prev, incomingMessage]);
      
  }, [incomingMessage, conversation]);

  const receiverId = conversation?.members?.find(member => member !== account.sub);
  
  const sendText = async (e) => {
      let code = e.keyCode || e.which;
      if(!value) return;

      if(code === 13) { 
          let message = {};
          if (!file) {
              message = {
                  senderId: account.sub,
                  receiverId: receiverId,
                  conversationId: conversation._id,
                  type: 'text',
                  text: value
              };
          } else {
              message = {
                  senderId: account.sub,
                  conversationId: conversation._id,
                  receiverId: receiverId,
                  type: 'file',
                  text: image
              };
          }

          socket.current.emit('sendMessage', message);

          await newMessages(message);

          setValue('');
          setFile();
          setImage('');
          setNewMessageFlag(prev => !prev);
      } 
  }

  return (
      <Wrapper>
          <Component>
              {
                  messages && messages.map(message => (
                      <Container ref={scrollRef}>
                          <Message message={message} />
                      </Container>
                  ))
              }
          </Component>
          <Footer 
              sendText={sendText} 
              value={value} 
              setValue={setValue} 
              setFile={setFile} 
              file={file} 
              setImage={setImage}
          />
      </Wrapper>
  )
}
export default Messages;
