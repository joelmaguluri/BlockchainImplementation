import crypto from "crypto";

export const isValidHashDifficulty = (hash) => {
    for (var i = 0; i < hash.length; i++) {
      if (hash[i] !== "0") {
        break;
      }
    }
    return i >= 3;
  };
  
  export const calculateHash = (params) => {
    const { index, previousHash, timestamp, data, nonce } = params;
    let hash = crypto
      .createHash("sha256")
      .update(index + previousHash + timestamp + data + nonce)
      .digest("hex");
    return hash;
  };
  
  export const calculateHashAndNonce = (params) => {
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