const mongoose=require('mongoose');
const { Schema } = mongoose;

const blockchainSchema = new Schema({
  blockchain:  Array, // String is shorthand for {type: String}
  user:{
    type : Schema.Types.ObjectId,
    ref:"user"
}
});

const Blockchain = mongoose.model('blockchain', blockchainSchema);

module.exports=Blockchain;