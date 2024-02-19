const User= require("../models/user")
async function handleGetAllUsers(req,res){
    const alldbusers= await User.find({})
    return res.json(alldbusers);
}

async function handleGetUserById(req,res){
    const user= await User.findById(req.params.id);
    if(!user) {
       return res.status(404).json({msg:"User does not exists"})
    }
   
    return res.json(user);
}

async function handleUpdateUserById(req,res){
    const userId = req.params.id;
    const updates = req.body;
      // Ensure that the request body contains at least one field to update
      if (!updates || Object.keys(updates).length === 0) {
        return res.status(400).json({ error: "No updates provided" });
    }
    const user= await User.findByIdAndUpdate(userId,updates,{new:true});
    return res.json({msg:"Success"})
}
async function handleDeleteById(req,res){
    const user= await User.findByIdAndDelete(req.params.id)
    return res.json({msg:"Success"})
}

async function handlePost(req,res){
    const body =req.body;
    if(!body || !body.first_name || !body.email || !body.last_name ||!body.gender||!body.job_title){
        return res.status(400).json({msg: "All fields are required"})
    }
    const result= await User.create({
        firstName:body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    });
    console.log("Result" ,result);
    return res.status(201).json({
        msg:"Success"
    });
    console.log("Body",body)
}
module.exports= {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteById,
    handlePost,
};