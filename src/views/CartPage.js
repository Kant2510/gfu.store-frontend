import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'
import '../style/cart.css'
import LogAd from '../components/layouts/above-footer'
import ProductCart from '../components/cart/productCart'

export default function CartPage() {
    return (
        <>
            <Header></Header>
            <ProductCart></ProductCart>
            <LogAd></LogAd>
            <Footer></Footer>
        </>
    )
}
