export const apiUrl = 'http://127.0.0.1:8000/api'
//cung url voi backend/urls.py
// process.env.NODE_ENV !== 'production'
// 	? 'http://localhost:5000/api'
// 	: 'https://sleepy-inlet-56101.herokuapp.com/api'

export const LOCAL_STORAGE_TOKEN_NAME = 'gfu_auth_token'

export const initialAuthState = {
    authLoading: true,
    isAuthenticated: false,
    user: null,
    showModal: false,
}
export const initialProductState = {
    cart: [],
    products: [],
    discounts: [],
    productsLoading: true,
}
