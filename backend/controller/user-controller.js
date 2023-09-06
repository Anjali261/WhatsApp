import User from '../model/User.js'

export const addUser = async(req,res) =>{
try{
   let exist = await User.findOne({ sub: req.body.sub});

   if(exist){
    res.status(200).json({
        msg:'User Already exists'
    })
    return;

   }
   const newUser = new User(req.body);
   await newUser.save();
   return response.status(200).json(newUser);

}catch(error){
    return res.status(500).json(error.message);

}
}