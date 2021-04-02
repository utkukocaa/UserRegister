const User = require('../models/User')



const handleErrors = (err) => {

    
    let errors = {username:'', password:'', email:''}



    //validation errors
    if(err.message.includes('User validation failed')){

        Object.values(err.errors).forEach(err => {
        
            errors[err.path] = err.message
        })
    

    }
 

    return errors;

}



exports.register = function(req, res) {


    const user = new User({

    username:   req.body.username,
    password:   req.body.password,
    email:      req.body.email

    })

    user.save().then(result => {
        console.log(result)
        res.json(
            {_id:               result._id,
            username:           result.username,
            password:           result.password,
            email:              result.email
        }
        )
       
    }) .catch(err => {
   
        const errors =  handleErrors(err)

        res.status(400).json({errors})
        
       })



  }
  