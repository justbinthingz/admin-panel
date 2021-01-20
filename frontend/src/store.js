import { createStore, combineReducers, applyMiddleware } from 'redux'
import { userLoginReducer, userListReducer, addUserReducer } from './reducers/userReducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    usersList: userListReducer,
    newUser: addUserReducer
})

// const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: null }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store