import { createContext, useReducer, useEffect } from 'react'
import { authReducer } from '../reducers/authReducer'
import { initialAuthState } from './constants'
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from './constants'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'

export const authContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, initialAuthState)

    // Authenticating user: cập nhật loading, authen và user
    const loadUser = async () => {
        if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])
        }

        try {
            const response = await axios.get(`${apiUrl}/auth`)
            if (response.data.success) {
                dispatch({
                    type: 'SET_AUTH',
                    payload: response.data.user,
                })
            }
        } catch (error) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
            setAuthToken(null)
            dispatch({
                type: 'REMOVE_AUTH',
            })
        }
    }

    useEffect(() => {
        loadUser()
    }, [])

    // Login
    const loginUser = async (userForm) => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`, userForm)
            if (response.data.success) {
                localStorage.setItem(
                    LOCAL_STORAGE_TOKEN_NAME,
                    response.data.token
                )
            }

            await loadUser()

            return response.data
        } catch (error) {
            if (error.response.data) return error.response.data
            else
                return {
                    success: false,
                    message: error.message,
                }
        }
    }

    // Register
    const registerUser = async (userForm) => {
        try {
            const response = await axios.post(
                `${apiUrl}/auth/register`,
                userForm
            )
            // if (response.data.success)
            //     localStorage.setItem(
            //         LOCAL_STORAGE_TOKEN_NAME,
            //         response.data.accessToken
            //     )

            //await loadUser()

            return response.data
        } catch (error) {
            if (error.response.data) return error.response.data
            else
                return {
                    success: false,
                    message: error.message,
                }
        }
    }

    // Logout
    const logoutUser = () => {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
        setAuthToken(null)
        dispatch({
            type: 'REMOVE_AUTH',
        })
    }

    const openModal = (isShow) => {
        dispatch({
            type: 'OPEN_MODAL',
            payload: isShow,
        })
    }
    // Context data
    const authContextData = {
        loginUser,
        registerUser,
        logoutUser,
        openModal,
        authState,
    }

    // Return provider
    return (
        <authContext.Provider value={authContextData}>
            {children}
        </authContext.Provider>
    )
}

export default AuthContextProvider
