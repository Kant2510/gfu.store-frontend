import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'
import '../style/product.css'
import LogAd from '../components/layouts/above-footer'
import Option from '../components/products/ProductList/option'
import Item from '../components/products/ProductItem/item'

const ProductList = () => {
    return (
        <>
            <Header></Header>
            <Option></Option>
            <LogAd></LogAd>
            <Footer></Footer>
        </>
    )
}

const ProductItem = () => {
    return (
        <>
            <Header></Header>
            <Item></Item>
            <LogAd></LogAd>
            <Footer></Footer>
        </>
    )
}

export default function ProductPage({ productRoute }) {
    return (
        <>
            {productRoute === 'list' && <ProductList />}
            {productRoute === 'item' && <ProductItem />}
        </>
    )
}
