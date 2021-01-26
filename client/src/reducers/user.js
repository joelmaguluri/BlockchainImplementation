
import { SAVEUSER,LOGOUT } from "../constants";


const initialState = {authenticated: false, user:null};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVEUSER:// set the user data in store if authentication was successful
        return {user:{...action.payload},authenticated:true};
    case LOGOUT: // remove user data from store
        return {user:null,authenticated:false};
    default:
      return {...state};
  }
};

export default UserReducer;