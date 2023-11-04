const express = require('express')
const userRouter = express.Router();

const {showUsers, creatUsers, updateUsers, deleteUser, loginUser, showUser} = require('../controller/users')

// get all users GET: /users
userRouter.get('/', showUsers )

// add new user POST /users
userRouter.post('/', creatUsers)

//get a user with id GET /users/1
userRouter.get('/:id', showUser)

// update a user with id PUT /users/1
userRouter.put('/:id', updateUsers)

// delete a user with id DELETE /users/1
userRouter.delete('/:id', deleteUser)

function verifyCorrectLocation(req, res, next){
  if (req.path == '/login'){
    next();
  } else {
    res.send("not allowed")
  }
}
userRouter.post('/login', verifyCorrectLocation, loginUser)

module.exports = userRouter;