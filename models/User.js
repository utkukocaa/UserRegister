const mongoose =require('mongoose')
const {Schema} = mongoose;
const {isEmail, isAlphanumeric} = require('validator')

var uniqueValidator = require('mongoose-unique-validator');


//adding double validator to model for username
const manyValidators = [

{       validator: (val)=> {return isNaN(parseInt(val[0]))}, msg:'Must start with string' },
{       validator: isAlphanumeric, msg: ' Must contain letter and numbers'    }
]


const userSchema = new Schema({

    username:   {

        type: String,
        required:[true, 'Please enter an username'],
        minLength:[6, 'Minimum length is 6 characters'],
        maxLength:[20, 'Maximum length is 20 characters'],
        unique:true,
        validate: manyValidators

    },
    email: {

        type: String,
        required:[true, 'Please enter an email'],
        minLength:[6, 'Minimum length is 6 characters'],
        maxLength:[50, 'Maximum length is 20 characters'],
        unique:true,
        validate:[ isEmail, ' Please enter a valid email'],
        //index:true


    },
    password:   {
        type:String,
        required:[true, 'Please enter a password'],
        minLength:[6, 'Minimum length is 10 characters'],
        maxLength:[20, 'Maximum length is 20 characters']
    }

})

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User',userSchema)



  
  






module.exports = User