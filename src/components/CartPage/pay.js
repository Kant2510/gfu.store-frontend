import React, { useEffect, useState } from 'react'


export default function Pay(link) {
    const [price_list, setPriceLIst] = useState([])
    const [minus_price, setMinusPrice] = useState(0)
    const [code, setCode] = useState('')
    const [sale_code, setSaleCode] = useState([])
    function onCodeChange(event) {
        setCode(event.target.value)
    }
    useEffect(() => {
        const get_code = async () => {
            return (await fetch('json/sale_code.json')).json()
        }
        async function fetchData() {
            setSaleCode(await get_code())
        }
        fetchData();

    }, [])

    useEffect(() => {
        setTimeout(() => {
            let select = []

            Array.from(document.getElementsByClassName("select-product")).map(ele => {
                const container = {}
                container.name = ele.name
                container.value = ele.value
                container.checked = ele.checked
                select.push(container)
            })
            Array.from(document.getElementsByClassName("select-product")).map(ele => {
                ele.onchange = () => {
                    Array.from(document.getElementsByClassName("price-buy")).map(ele => {

                    })
                    select.find(e => e.name === ele.name).checked = ele.checked
                    let a = select.filter(e => e.checked === true).map(e => Number(e.value.slice(0, -1).replace(/\./g, '')))
                    setPriceLIst(a)
                }
            })
        }, 100)
    }, [])
    let sd = sale_code.find(ele => ele.key === code) === undefined ? '' : sale_code.find(ele => ele.key === code).value
    useEffect(() => {
        setTimeout(() => {
            setMinusPrice(Number(sd.slice(0, -1).replace(/\./g, '')))
        }, 100)
    }, [sd])
    const Ori_Price = price_list.reduce((a, b) => a + b, 0)
    const Price = Ori_Price + minus_price
    const buy = () => {
        let delay = 100
        link.link.forEach(
            (ele, i) => {
                setTimeout(() => {
                    let url = ele
                    let a = document.createElement('a')
                    a.href = url
                    a.target = "_blank"
                    a.click()
                }, delay * i);
            }
        )
    }
    return (
        <div className="pay">
            <div>
                <div>
                    <span><b>Mã giảm giá: </b></span>
                    <input id="sales-code" value={code} onChange={onCodeChange} />
                    <br />
                    <span><b>Thanh toán</b></span>
                    <div style={{ paddingBottom: "10px", marginBottom: "10px", borderBottom: "1px solid black" }}>
                        <span>Giá sản phẩm:</span>
                        <span style={{ float: "right" }}>{Ori_Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ</span>
                        <br />
                        <span>Giảm giá:</span>
                        <span style={{ float: "right" }} id="minus">{sd}</span>
                    </div>
                    <span>Tổng tiền cần thanh toán:</span>
                    <span style={{ float: "right" }}><b>{Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ</b></span>
                </div>
                <div>
                    <button onClick={buy}>Thanh toán</button>
                </div>
            </div>
        </div >
    )
}