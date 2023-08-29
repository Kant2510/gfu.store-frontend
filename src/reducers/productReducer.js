import { initialProductState } from '../contexts/constants'
export const productReducer = (state = initialProductState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'GET_CART':
            const extractedProduct = payload.map((cartItem) => {
                const product = state.products.find(
                    (product) => product.id === cartItem.productId
                )
                return {
                    ...product,
                    quantity: cartItem.quantity,
                    isSelected: false,
                }
            })
            return {
                ...state,
                cart: extractedProduct,
                productsLoading: false,
            }
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: payload,
                productsLoading: false,
            }
        case 'GET_DISCOUNTS':
            return {
                ...state,
                discounts: payload,
            }
        case 'GET_FAILLY':
            return {
                ...state,
                cart: [],
                // products: [],
                productsLoading: false,
            }

        case 'ADD_CART':
            const foundProduct = state.products.find(
                (product) => product.id === payload
            )
            return {
                ...state,
                cart: [...state.cart, foundProduct],
            }
        case 'DELETE_CART':
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== payload),
            }
        // case FIND_CART:
        //     return { ...state, product: payload }
        case 'UPDATE_CART':
            const newCart = state.cart.map((product) =>
                product.id === payload.productId
                    ? {
                          ...product,
                          quantity:
                              payload.operation === '__'
                                  ? product.quantity
                                  : product.quantity + payload.operation,
                          isSelected:
                              payload.isSelected === '__'
                                  ? product.isSelected
                                  : payload.isSelected,
                      }
                    : product
            )
            // console.log('reducer', newCart)
            return {
                ...state,
                cart: newCart,
            }

        default:
            return state
    }
}
