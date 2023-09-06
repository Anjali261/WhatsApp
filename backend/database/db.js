import mongoose from 'mongoose';
const Connection = async() =>{
    const URL = `mongodb+srv://mail2anjalisingh2610:wG3jrwhIccyx7xiA@socialmedia.3nl5wz4.mongodb.net/`
    try{
       await  mongoose.connect(URL, {
        useNewUrlParser:true,
    });
        console.log('Database Connected Successfully');

    }catch(error){
        console.log('Error while Connecting with the database ', error.message);
    }
}

export default Connection;