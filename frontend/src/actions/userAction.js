import axios from "axios"
import {
    USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS,
    USER_ADD_FAIL, USER_ADD_REQUEST, USER_ADD_SUCCESS,
    USERS_LIST_FAIL, USERS_LIST_REQUEST, USERS_LIST_SUCCESS

} from "../constants/userConstants"

const url = "http://localhost:3000"

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'appliction/json'
            }
        }
        // const { data } = await axios.post(`${url}/api/login`, { email, password, config })
        const { data } = await axios.post(`/api/login`, { email, password, config })
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({ type: USER_LOGIN_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}

export const getUserList = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USERS_LIST_REQUEST
        })

        const { data } = await axios.get(`/api/getAllUsers`)
        dispatch({
            type: USERS_LIST_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({ type: USERS_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}

export const addUser = (email, name, userName, userType) => async (dispatch) => {
    try {
        dispatch({
            type: USER_ADD_REQUEST
        })

        const { data } = await axios.post(`/api/addUser`, { email, name, userName, userType })
        dispatch({
            type: USER_ADD_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({ type: USER_ADD_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}   