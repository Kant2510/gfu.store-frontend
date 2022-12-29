import React from 'react'
import Header from '../Bar/header'
import Footer from '../Bar/footer'
import '../../style/home.css'
import Category from './category'
import BestSeller from './bestseller'
import Sales from './sales'
import LogAd from '../Log/logAd'
import LogPopup from '../Log/logPopup'

export default function HomePage() {
    return (
        <>
            <Header></Header>
            <LogPopup></LogPopup>
            <div style={{ width: "85%", display: "flex", flexWrap: "wrap", margin: "50px auto" }}>
                <Category></Category>
                <BestSeller></BestSeller>
                <Sales></Sales>
            </div>
            <LogAd></LogAd>
            <Footer></Footer>
        </>
    )
}