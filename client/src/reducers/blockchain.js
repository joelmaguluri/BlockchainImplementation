import { ADDBLOCK, ADJUSTHASH, INITSTATE, LOGOUT, MUTATEBLOCK } from "../constants"
import { calculateHash, calculateHashAndNonce,isValidHashDifficulty} from "../components/dashboard/helpers";


const BlockchainReducer = (state = {chain:[]}, action) => {

  switch (action.type) {
    case INITSTATE:{
        const {data}=action.payload;
        return{
            chain:data
        }
    }
    case MUTATEBLOCK:
        {
            const {chain}=state;
            const {index,data}=action.payload;
            const {previousHash, timestamp,nonce}=chain[index];
            var hash=calculateHash( { index, previousHash, timestamp, data, nonce});
            chain[index].data=data;
            chain[index].hash=hash;
            chain[index].status=isValidHashDifficulty(hash)?'valid':'invalid';

            for(let i=index+1;i<chain.length;i++)
            {   
                let previousHash=chain[i-1].hash;
                const {timestamp,data,nonce}=chain[i];
                let hash = calculateHash( { index:i, previousHash, timestamp, data, nonce});
                let status=isValidHashDifficulty(hash)?'valid':'invalid'
                chain[i]={...chain[i],hash:hash, previousHash:previousHash,status:status};
            }

      
            return{
                chain:[...chain]
            }
            
        }
    case ADDBLOCK:
        {
            const {chain}=state;
            const {timestamp,data}=action.payload;
            let index=chain.length;
            let previousHash=chain[index-1].hash;
            let {hash,nonce}=calculateHashAndNonce( { index, previousHash, timestamp, data, nonce:0 });
        
            chain[index]={
                timestamp,
                previousHash,
                nonce,
                hash,
                name:`Block # ${index}`,
                data,
                status:'valid'
            }
            return{
                chain:[...chain]
            }

        }
    case ADJUSTHASH:{
        let {chain}=state;
        const {index,hash,nonce}=action.payload;
        chain[index]={...chain[index],hash:hash,nonce:nonce,status:'valid'};

        for(let i=index+1;i<chain.length;i++)
        {   
            const {timestamp,data,nonce}=chain[index];
            let previousHash=chain[i-1].hash;
            let hash = calculateHash( { index:i, previousHash, timestamp, data, nonce});
            let status=isValidHashDifficulty(hash)?'valid':'invalid'
            chain[i]={...chain[i],hash:hash, previousHash:previousHash,status:status};            
        }
        return{
            chain:[...chain]
        }
    }
    case LOGOUT:
        return{};

    default:
      return state;
  }
};

export default BlockchainReducer;