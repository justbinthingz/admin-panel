import {
    USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT,
    USERS_LIST_FAIL, USERS_LIST_REQUEST, USERS_LIST_SUCCESS,
    USER_ADD_FAIL, USER_ADD_REQUEST, USER_ADD_SUCCESS,

} from "../constants/userConstants"

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const userListReducer = (state = { users: {} }, action) => {
    switch (action.type) {
        case USERS_LIST_REQUEST:
            return { ...state, loading: true }
        case USERS_LIST_SUCCESS:
            return { loading: false, users: action.payload }
        case USERS_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const addUserReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_ADD_REQUEST:
            return { ...state, loading: true }
        case USER_ADD_SUCCESS:
            return { loading: false, newuser: action.payload }
        case USER_ADD_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
