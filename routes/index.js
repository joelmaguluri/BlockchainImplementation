var express = require('express');
var crypto= require('crypto');
const bcrypt = require('bcrypt');
var User =require('../model/user')
var Blockchain=require('../model/blockchain')
var router = express.Router();
const saltRounds = 12;

let genesisblock={
  timestamp:'1/22/2021, 12:33:35 PM',
  previousHash:'0',
  nonce:0,
  name:'GENESIS',
  data:'WELCOME TO BLOCKCHAIN DEMO!!!',
  status:'valid'
};

const calculateHashAndNonce = (params) => {
  const { index, previousHash, timestamp, data } = params;
  let { nonce } = params;
  let hash = crypto
    .createHash("sha256")
    .update(index + previousHash + timestamp + data + nonce)
    .digest("hex");
  while (!isValidHashDifficulty(hash)) {
    nonce++;
    hash = crypto
      .createHash("sha256")
      .update(index + previousHash + timestamp + data + nonce)
      .digest("hex");
  }
  return { nonce: nonce, hash: hash };
};

const isValidHashDifficulty = (hash) => {
  for (var i = 0; i < hash.length; i++) {
    if (hash[i] !== "0") {
      break;
    }
  }
  return i >= 3;
};


// PATH CONFIGURATION TO RESPOND TO A REQUEST TO STATIC ROUTE REQUEST BY SERVING index.html
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

router.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


router.get('/signup', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


router.get('/blockchain', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


//reset blockchain
router.delete('/reset/:email',(req,res)=>{
  const{email}=req.params;
  User.findOne({ email: email }).then(async(doc)=>{
      if(doc)
      {
        const { previousHash, timestamp, data,nonce } = genesisblock;
        const index=0;
        genesisblock={...genesisblock,...calculateHashAndNonce({index,previousHash,timestamp,data,nonce})};
        let blockchain_id=doc.blockchain;
        res.status(200).json({
          data:[genesisblock]
        });
        await Blockchain.updateOne( {_id:blockchain_id},
        { $set: { blockchain: [genesisblock] } })
      }
      else
      {
        res.status(400).json({
          message:'user not found',
        });
      }
  })
})

//fetch blockchain
router.get('/fetchblockchain/:email',(req,res)=>{
  const{email}=req.params;
  User.findOne({ email: email }).then(doc=>{
    if(doc)
    {
      let blockchain_id=doc.blockchain;
      Blockchain.findOne({_id:blockchain_id}).then(doc=>{
        let blockchain=doc.blockchain;
        res.status(200).json({
          blockchain:blockchain
        })
      }).catch(err=>{
        res.status(400).json({status:false,message:'Empty blockchain',error:err})
      })

    }
    else
      {

        return res.status(400).json({message:'No user is associated with this email'})
      }

  })
})

//authenticate user
router.post('/authenticate', function(req, res, next) {
  const{email,password}=req.body;

  User.findOne({ email: email }).then(doc=>{
    if(doc)
    {
      const userpassword=doc.password;
      if(bcrypt.compareSync(password,userpassword))
        {
          
          res.status(200).json({message:'Authentication Successful',data:{
          user:{
            name:doc.name,
            email:doc.email
          }
        }});

      }
    else
        res.status(400).json({error:'Invalid password or email'});
    }
    else
      res.status(400).json({error:'No user is associated with this email'})
  })
});

// Register user
router.post('/signup', function(req, res, next) {
  const{email,password,name}=req.body;
  User.findOne({ email: email }).then(doc=>{
    if(doc)
    {
      res.json({
        error:'Email already registered'
      })

    }
    else
     {
      hash=bcrypt.hashSync(password, saltRounds);
      // Store hash in your password DB.
      const user= new User({
        name,
        email,
        password:hash
      });
      user.save().then(async(doc)=>{
        
          let response =await User.findById(doc._id);
          if(response)
          {        
            res.json({
              message:"User registration successfull"
              });
            
            const { previousHash, timestamp, data,nonce } = genesisblock;
            const index=0;
            genesisblock={...genesisblock,...calculateHashAndNonce({index,previousHash,timestamp,data,nonce})}
            
            const blockchain= new Blockchain({
              blockchain:[genesisblock]
            });
            blockchain.user=response;
            response=  await blockchain.save()
            user.blockchain=response;
            await user.save();
    
          }
      })
     } 
  })

});


router.post('/blockchain', function(req, res) {
  const{email,blockchain}=req.body;
  User.findOne({ email: email }).then(doc=>{
    if(doc)
    {
      let blockchain_id=doc.blockchain;
      Blockchain.updateOne  ( {_id:blockchain_id},
      { $set: { blockchain: blockchain } },
      function(err, result) {
        if (err) 
          res.status(400).json({err:err,message:'Empty blockchain'});
        else 
          res.json({
            message:'updation done'
          });
    });
    
    }
  }).catch((err)=>{
    console.log(err)
    res.status(400).json({err:err,message:'Empty blockchain'});
  })

})

module.exports = router;
