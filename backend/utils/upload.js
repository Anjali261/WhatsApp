import multer from 'multer';
import {GridFsStorage } from "multer-gridfs-storage"
import dotenv from 'dotenv'

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const storage  = new GridFsStorage({

    url : `mongodb+srv://${USERNAME}:${PASSWORD}@socialmedia.3nl5wz4.mongodb.net/`,
    option: { useNewUrlParser:true,

    },
    file: (request, file) =>{
        const match = ["image/png","image/jpg"];
        if(match.indexOf(file.mimetype) === -1){
            return `${Date.now()}.file.${file.originalname}`;
        }
        return {
            bucketname:'photos',
            filename: `${Date.now()}.file.${file.originalname}`
        }
    }

})
export default multer({storage});