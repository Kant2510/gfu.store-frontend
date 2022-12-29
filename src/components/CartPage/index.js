import React from 'react'
import Header from '../Bar/header'
import Footer from '../Bar/footer'
import '../../style/cart.css'
import LogAd from '../Log/logAd'
import LogPopup from '../Log/logPopup'
import ProductCart from './productCart'

export default function CartPage() {
    return (
        <>
            <Header></Header>
            <ProductCart></ProductCart>
            <LogAd></LogAd>
            <LogPopup></LogPopup>
            <Footer></Footer>
        </>
    )
}