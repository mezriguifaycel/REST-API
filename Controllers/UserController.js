 const User = require('../Models/UserModel')


//Add New User
//@POST
const AddUSer = async(req,res)=>{
    try {
        //méthode 1 using create
    // const newUser = await User.create(req.body)
   // res.json(newUser)
    //Méthode2
    const NEwUser = new User(req.body)
    const addedUSer = await NEwUser.save()
    res.json(addedUSer)
    } catch (error) {
        console.log(error);
    }
}

//GET USers
//@Get
const GetDataUSers = async(req,res)=>{
    try {
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        console.log(error)
    }
}

//update user
//@PUT
const UpdateUsers= async(req,res)=>{
    try {
        const UpdatedUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(UpdatedUser)
    } catch (error) {
        console.log(error)
    }
}

//Delete USer
//@delete
const DeleteUsers = async(req,res)=>{
    try {
        const DeletedUser = await User.findByIdAndDelete(req.params.id)
        res.json({msg:'The user is deleted',DeletedUser})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {AddUSer,GetDataUSers,UpdateUsers,DeleteUsers}

