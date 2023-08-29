import { createContext, useReducer, useContext, useEffect } from 'react'
import { authContext } from './authContext'
import { productReducer } from '../reducers/productReducer'
import { initialProductState } from './constants'
import { apiUrl } from './constants'
import axios from 'axios'

export const productContext = createContext()

const ProductContextProvider = ({ children }) => {
    // State
    const [productState, dispatch] = useReducer(
        productReducer,
        initialProductState
    )

    const { authState: isAuthenticated } = useContext(authContext)

    // const [showAddproductModal, setShowAddproductModal] = useState(false)
    // const [showUpdateproductModal, setShowUpdateproductModal] = useState(false)
    // const [showToast, setShowToast] = useState({
    //     show: false,
    //     message: '',
    //     type: null,
    // })

    // Get cart
    const getCart = async () => {
        try {
            if (isAuthenticated) {
                const response = await axios.get(`${apiUrl}/cart`)
                console.log(response.data)
                if (response.data.success) {
                    dispatch({
                        type: 'GET_CART',
                        payload: response.data.cart,
                    })
                }
            }
            return {
                success: false,
            }
        } catch (error) {
            dispatch({ type: 'GET_FAILLY' })
        }
    }
    // Get products
    const getProducts = async () => {
        try {
            const response = await axios.get(`${apiUrl}/products`)
            if (response.data.success) {
                dispatch({
                    type: 'GET_PRODUCTS',
                    payload: response.data.products,
                })
            }
        } catch (error) {
            dispatch({ type: 'GET_FAILLY' })
        }
    }
    // Get discounts
    const getDiscounts = async () => {
        try {
            const response = await axios.get(`${apiUrl}/discounts`)
            if (response.data.success) {
                dispatch({
                    type: 'GET_DISCOUNTS',
                    payload: response.data.discounts,
                })
            }
        } catch (error) {
            console.log(error)
            // dispatch({ type: 'GET_FAILLY' })
        }
    }
    // Add product
    const addCart = async (productId) => {
        try {
            if (isAuthenticated) {
                const response = await axios.post(`${apiUrl}/cart/`, {
                    productId: productId,
                })
                if (response.data.success) {
                    dispatch({
                        type: 'ADD_CART',
                        payload: productId,
                    })
                    await getCart()
                    return response.data
                }
            }
            return {
                success: false,
            }
        } catch (error) {
            console.log(error)
        }
    }
    // Delete product
    const deleteCart = async (productId) => {
        try {
            if (isAuthenticated) {
                const response = await axios.delete(`${apiUrl}/cart/`, {
                    data: {
                        productId: productId,
                    },
                })
                if (response.data.success) {
                    dispatch({
                        type: 'DELETE_CART',
                        payload: productId,
                    })
                    await getCart()
                    return response.data
                }
            }
            return {
                success: false,
            }
        } catch (error) {
            console.log(error)
        }
    }
    // // Find product when user is updating product
    // const findproduct = (productId) => {
    //     const product = productState.products.find((product) => product._id === productId)
    //     dispatch({ type: FIND_product, payload: product })
    // }

    // Update cart
    const updateCart = async (productId, isSelected, operation) => {
        try {
            const response = await axios.put(`${apiUrl}/cart/`, {
                productId: productId,
                operation: operation === '__' ? 0 : operation,
            })
            // console.log(isSelected, response.data)
            if (response.data.success) {
                dispatch({
                    type: 'UPDATE_CART',
                    payload: {
                        productId: productId,
                        isSelected: isSelected,
                        operation: operation,
                    },
                })
                // await getCart()
                return response.data
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProducts()
        getDiscounts()
    }, [])
    // product context data
    const productContextData = {
        productState,
        getCart,
        addCart,
        deleteCart,
        getDiscounts,
        updateCart,
        // findproduct,
        // updateproduct,
    }

    return (
        <productContext.Provider value={productContextData}>
            {children}
        </productContext.Provider>
    )
}

export default ProductContextProvider
