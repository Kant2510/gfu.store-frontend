import React, { useEffect, useState } from 'react'
import { iTs } from '../../utils/convert'

export default function Pay({ link, totalPrice, discounts }) {
    const [minus_price, setMinusPrice] = useState(0)
    const [code, setCode] = useState('')
    const onCodeChange = (e) => {
        setCode(e.target.value)
    }
    let sd = discounts.find((ele) => ele.code === code)
        ? discounts.find((ele) => ele.code === code).discount
        : 0
    useEffect(() => {
        setTimeout(() => {
            setMinusPrice(sd)
        }, 100)
    }, [sd])
    const Ori_Price = totalPrice
    totalPrice = parseInt(totalPrice * (1 - minus_price))
    const buy = () => {
        // let delay = 100
        // link.link.forEach((ele, i) => {
        //     setTimeout(() => {
        //         let url = ele
        //         let a = document.createElement('a')
        //         a.href = url
        //         a.target = '_blank'
        //         a.click()
        //     }, delay * i)
        // })
    }
    return (
        <div className='pay'>
            <div>
                <div>
                    <span>
                        <b>Mã giảm giá: </b>
                    </span>
                    <input
                        id='sales-code'
                        value={code}
                        onChange={onCodeChange}
                    />
                    <br />
                    <span>
                        <b>Thanh toán:</b>
                    </span>
                    <div
                        style={{
                            paddingBottom: '10px',
                            marginBottom: '10px',
                            borderBottom: '1px solid black',
                        }}
                    >
                        <span>Giá sản phẩm:</span>
                        <span style={{ float: 'right' }}>
                            {iTs(Ori_Price) + ' '}
                        </span>
                        <br />
                        <span>Giảm giá:</span>
                        <span style={{ float: 'right' }} id='minus'>
                            {minus_price * 100}%
                        </span>
                    </div>
                    <span>Tổng tiền:</span>
                    <span style={{ float: 'right' }}>
                        <b>{iTs(totalPrice) + ' '}</b>
                    </span>
                </div>
                <div>
                    <button onClick={buy}>Thanh toán</button>
                </div>
            </div>
        </div>
    )
}
