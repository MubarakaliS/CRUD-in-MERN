const UserModel=require('../Model/User');
const mongoose=require('mongoose')

exports.createUser=async(req,res)=>{
    const {name,phone_no,email}=req.body
    try{
        const createUser=await UserModel.create({
            name,
            phone_no,
            email
        })
        res.status(200).json(createUser)
    }catch(err){
        res.status(400).json(err.message);
    }
}

exports.getAllUsers=async(req,res)=>{
    try{
        const getAllData=await UserModel.find()
        res.status(200).json(getAllData);
    }catch(err){
        res.status(400).json(err.message);
    }
    
}

exports.getUserById=async(req,res)=>{
    const id=req.params.id
    try{
        const getSingleUser=await UserModel.findById(id)
        res.status(200).json(getSingleUser)
    }catch(err){
        res.status(400).json(err.message)
    }  
}

exports.updateUser=async(req,res)=>{
    const id=req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ Error: "User Not Found" })
    }
    try{
        const updateUser=await UserModel.findByIdAndUpdate(
            {_id:id},
            {...req.body}
        )
        res.status(200).json(updateUser)
    }catch(err){
        res.status(400).json(err.message)
    }
}

exports.deleteSingleUser=async (req,res)=>{
    const id=req.params.id
    try{
        const deleteUser=await UserModel.findByIdAndDelete({_id:id});
        res.status(200).json(deleteUser)
    }catch(err){
        res.status(400).json(err.message)
    }
}