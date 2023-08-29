import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FcNext, FcPrevious } from 'react-icons/fc'
import { MdOutlineLocalFireDepartment } from 'react-icons/md'
import ProductPreview from '../layouts/productPreview'
import GameData from '../../data/gameData'

export default function BestSeller() {
    const productsData = GameData()
    productsData.sort((a, b) => {
        a = Number(a.sell.slice(0, -1))
        b = Number(b.sell.slice(0, -1))
        return a > b ? -1 : b > a ? 1 : 0
    })
    useEffect(() => {
        document.getElementById('previous-bestseller').onclick = () => {
            document.getElementsByClassName(
                'slide-bestseller'
            )[0].scrollLeft -= 500
        }
        document.getElementById('next-bestseller').onclick = () => {
            document.getElementsByClassName(
                'slide-bestseller'
            )[0].scrollLeft += 500
        }
    }, [])
    return (
        <div className='best-seller'>
            <Link
                to='/products?sortBy=bestSeller&action=on&adventure=on&fps=on&horror=on&intelligence=on&multiplayer=on&sport=on'
                className='link'
            >
                <p style={{ fontSize: '25px', margin: '10px 0px 0px 10px' }}>
                    <MdOutlineLocalFireDepartment
                        style={{ marginRight: '5px' }}
                    />
                    Bán Chạy
                </p>
            </Link>
            <div className='slide-bestseller-frame'>
                <FcPrevious
                    style={{
                        color: 'white',
                        position: 'absolute',
                        top: '50%',
                        margin: '-10px 0px 0px 15px',
                        cursor: 'pointer',
                    }}
                    id='previous-bestseller'
                />
                <section className='slide-bestseller'>
                    {productsData
                        .filter((ele) => ele.sell.slice(0, -1) >= 5)
                        .map((ele) => {
                            return (
                                <ProductPreview
                                    key={ele.id}
                                    name={ele.name}
                                    rates={ele.rates}
                                    price={ele.price}
                                    sale_price={ele.sale_price}
                                    sale={ele.sale}
                                    sell={ele.sell}
                                    image={ele.img_url}
                                />
                            )
                        })}
                </section>
                <FcNext
                    style={{
                        color: 'white',
                        position: 'absolute',
                        top: '50%',
                        right: '15px',
                        marginTop: '-10px',
                        cursor: 'pointer',
                    }}
                    id='next-bestseller'
                />
            </div>
        </div>
    )
}
