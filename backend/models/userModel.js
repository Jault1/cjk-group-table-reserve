const userModel = require("../Model/userModel")
const postModel = require("../Model/postModel")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

const superSecretKey = "aaaaasdasdasdasdasdasdedasdasdadewadasdawdasdadsdasdazxdasdasdasdas11"

async function showUsers(request, response) {

  let token = request.query.token;
  jwt.verify(token, superSecretKey, (err, result)=>{
   if (err) {
    response.redirect('http://localhost:3000/404');
    response.end()
    return
   }
  })
  let users = await userModel.findAll({
    attributes:{
      exclude:['password', 'updatedAt']
    },
    include:{
      model:postModel
    }

  });
    response.json(users)
    response.end();
  }

function showUser(request, response){
  userModel.findOne({
    attributes:{
      exclude:['password']
    }
  },{
    where:{
      id:request.params.id
    }
  })
  .then((result)=>{
    response.json(result)
    response.end();
  })
  .catch((err)=>{
    console.log(err);
    response.status(500).json(err)
  })
}


function loginUser(req, res) {
  userModel.findOne({
    where:{
      user_name:req.body.user_name
    }
  }).then((result)=>{

    if(!result){
      res.status(400).json({message:"Incorrect Email"})
      return
    }

    if (bcrypt.compare(req.body.password, result.password)){
      res.json({message:"WELCOME YOUVE LOGGED IN", userData:result})
      return;
    }

    res.status(400).json({message:"Incorrect Pass"})
  })
}


function creatUsers(request, response) {
  userModel.create({
    user_name: request.body.user_name,
    email: request.body.email,
    password: request.body.password
  })
  .then((result)=>{

  let token =  jwt.sign(result.user_name, superSecretKey);
    response.json({
      user_name:result.user_name,
      token
    })
  })
  .catch((err)=>{
    console.log(err);
    response.status(500).json(err)
  }
  )
}

function updateUsers(request, response) {
  userModel.update(request.body, {where:{id:request.params.id}})
  .then((result)=>response.send(result))
  .catch((err)=>{
    console.log(err);
    response.status(500).json(err)
  })
}

function deleteUser(request, response) {
  userModel.destroy({
    where:{
      id:request.params.id
    }
  }).then((result)=>response.send(result))
  .catch((err)=>{
    console.log(err);
    response.status(500).json(err)
  })
}


module.exports = {
  showUsers,
  creatUsers,
  updateUsers,
  deleteUser,
  loginUser,
  showUser
}