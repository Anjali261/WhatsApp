import  grid from "gridfs-stream";
import mongoose from "mongoose";
const url = "http://localhost:8000"
let gfs;
let gridFSBucket;
const conn = mongoose.connection;
conn.once('open', () =>{
    gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db , {
        bucketname:'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
})

export const uploadFile = async(req,res) =>{
    if(!request.file){
        return response.status(404).json("File not Found");
    }
    const imageurl = `${url}/file/${request.file.filename}`;
    return response.status(200).json(imageurl);
}

export const getImage = async(req,res) =>{
    try{

        const file = await gfs.files.findOne({filename: req.params.filename});
        const readstream = gridFsBucket.openDownloadStream(file._id);
        readstream.pipe(res);

    }catch(error){
        return res.status(500).json(error.message);
    }
}