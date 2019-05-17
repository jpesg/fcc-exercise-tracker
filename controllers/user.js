const User = require('../models/user');

function hello(req, res){
  res.status(200).send({message: 'is working..'});
}

function getUser(req, res){
  var {id} = req.params;
  
  if(!id){
    res.status(500).send({message: 'Error: field user Id empty'});
  }else{
    //search user by Id
    User.findById(id, (err, userStored) =>{
      if(err){
        res.status(500).send({message: 'error get request'});
      }else{
        if(!userStored){
          res.status(404).send({message: 'user not found'});
        }else{
          res.status(200).send({user: userStored});
        }
      }
    });
  }
}

function newUser(req, res){
  
  var {username} = req.body;
  
  if(!username){
    res.status(404).send({message: 'user name does not exist'});
  }else{
    User.findOne({name:username}, (err, userStored)=>{
      if(err) throw err;
      if(userStored){
        res.status(404).send({message: 'user already exists'});
      }else{
        var newUser = new User({
          name: username,
          updatedAt: new Date()
        });
        newUser.save((err, userStored)=>{
          if(err) res.status(500).send({message: 'Error saving User'});
          if(!userStored) res.status(500).send({message: 'Error saving User'});;
          res.status(200).send({_id: userStored._id, username: userStored.name});
        });
      }
    }); 
  }
  
}

function userAdd(req, res){
  var {userId, description, duration, date} = req.body;
  if(!date) date =  Date.now();
  console.log('--->' + date);

  User.findByIdAndUpdate(userId,{description: description, duration: duration, date: date, updatedAt: Date.now()}, {new:true}, (err, userUpdated)=>{
    if(err) res.status(500).send(err);
    res.status(200).send(userUpdated);
  });
}

function getUsers(req, res){
  const users = User.find({}, (err, usersStored)=>{
    if(!err) res.render('home', {users: usersStored});//res.status(200).send({users: usersStored});
  });
  
}
module.exports ={
  getUser,
  getUsers,
  newUser,
  userAdd,
  hello
};