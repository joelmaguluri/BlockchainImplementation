import { SERVER } from "../../constants";

export const authenticateUser=async(email,password)=>{
    const data={email,password};
    let url = SERVER + "/authenticate";
    let response = await fetch(url, {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    response = await response.json();
    if(response.error)
      {
        return {error:response.error}
      }
    
    else
    {
      return {data:response.data}
    }

}


export const fetchBlockchain=async(email)=>{
    const url = SERVER+"/fetchblockchain/"+email;
    let response = await fetch(url, {
      method: "GET",
      mode: "cors", // no-cors, *cors, same-origin
    });

    response = await response.json();
    if(response.blockchain)
      return{
        blockchain:response.blockchain
      }
}

export const register=async(name,email,password)=>{
    const url = SERVER+"/signup";
    const data = { email, name, password };

    let response=await fetch(url, {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    response=await response.json();
    if(response.error)
      return{message:response.error}
    else 
      return {message:response.message}
    

}