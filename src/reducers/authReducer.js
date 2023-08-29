import { initialAuthState } from '../contexts/constants'

export const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case 'SET_AUTH':
            return {
                ...state,
                authLoading: false,
                isAuthenticated: true,
                user: action.payload,
            }
        case 'REMOVE_AUTH':
            return initialAuthState
        case 'OPEN_MODAL':
            return {
                ...state,
                showModal: action.payload,
            }
        default:
            return state
    }
}
