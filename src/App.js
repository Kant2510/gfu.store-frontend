import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './views/HomePage'
import CartPage from './views/CartPage'
import ProductPage from './views/ProductPage'
import Terms from './views/hyper/terms'
import Guide from './views/hyper/guide'
import Introduce from './views/hyper/introduce'
import AuthContextProvider from './contexts/authContext'
import ProductContextProvider from './contexts/productContext'
import ProtectedRoute from './components/routing/ProtectedRoute'

function App() {
    return (
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
        <AuthContextProvider>
            <ProductContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/home' element={<HomePage />} />
                        <Route
                            path='/products'
                            element={<ProductPage productRoute={'list'} />}
                        />
                        <Route
                            path='/products/:productId'
                            element={<ProductPage productRoute={'item'} />}
                        />
                        {/* <Route path='/cart' element={<CartPage />} /> */}
                        <Route path='/terms' element={<Terms />} />
                        <Route path='/guide' element={<Guide />} />
                        <Route path='/introduce' element={<Introduce />} />
                        <Route path='/cart' element={<ProtectedRoute />}>
                            <Route path='/cart' element={<CartPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ProductContextProvider>
        </AuthContextProvider>
    )
}

export default App
