
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Common from './components/items/Common/common'
import HomePage from './components/HomePage'
import Terms from './components/HyperPage/terms'
import Guide from './components/HyperPage/guide'
import Introduce from './components/HyperPage/introduce'
import ProductList from './components/ProductPage/ProductList'
import ProductItem from './components/ProductPage/ProductItem'
import CartPage from './components/CartPage'

import Connect from './components/Connect';

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

        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<><HomePage /> <Common /></>} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:productId" element={<ProductItem />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/introduce" element={<Introduce />} />
                <Route path="/request" element={<Connect />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
