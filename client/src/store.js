import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import BlockchainReducer from "./reducers/blockchain";
import UserReducer from "./reducers/user";

// Create store with reducers and initial state
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [];


export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  }
  catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  }
  catch (err) {
    // ignore
  }
}

let persistedState=loadState()
const store = createStore(
  combineReducers({
    authentication: UserReducer,
    blockchain:BlockchainReducer
  }),
  persistedState,
  composeEnhancers(applyMiddleware(...middleware))
);

store.subscribe(() => {
  saveState({
    authentication: store.getState().authentication,
    blockchain: store.getState().blockchain
  })
})

export default store;