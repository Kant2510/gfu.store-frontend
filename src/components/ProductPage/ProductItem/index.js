import React from 'react'
import Header from '../../Bar/header'
import Footer from '../../Bar/footer'
import '../../../style/product.css'
import LogAd from '../../Log/logAd'
import LogPopup from '../../Log/logPopup'
import Item from './item'


export default function ProductItem() {

    return (
        <>
            <Header></Header>
            <Item></Item>
            <LogAd></LogAd>
            <LogPopup></LogPopup>
            <Footer></Footer>
        </>
    )
}