import React from 'react'
import Header from '../../Bar/header'
import Footer from '../../Bar/footer'
import '../../../style/product.css'
import LogAd from '../../Log/logAd'
import LogPopup from '../../Log/logPopup'
import Option from './option'


export default function ProductList() {

    return (
        <>
            <Header></Header>
            <Option></Option>
            <LogAd></LogAd>
            <LogPopup></LogPopup>
            <Footer></Footer>
        </>
    )
}