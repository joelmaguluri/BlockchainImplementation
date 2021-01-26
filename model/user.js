const mongoose=require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email:  String, // String is shorthand for {type: String}
  password: String,
  name:String,
  blockchain:{
    type : Schema.Types.ObjectId,
    ref:"blockchain"
}
});

const User = mongoose.model('user', userSchema);

module.exports=User;