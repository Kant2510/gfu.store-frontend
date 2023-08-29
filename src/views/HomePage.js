import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'
import '../style/home.css'
import Category from '../components/home/category'
import BestSeller from '../components/home/bestseller'
import Sales from '../components/home/sales'
import LogAd from '../components/layouts/above-footer'

export default function HomePage() {
    return (
        <>
            <Header></Header>
            <div
                style={{
                    width: '85%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    margin: '50px auto',
                }}
            >
                <Category></Category>
                <BestSeller></BestSeller>
                <Sales></Sales>
            </div>
            <LogAd></LogAd>
            <Footer></Footer>
        </>
    )
}
