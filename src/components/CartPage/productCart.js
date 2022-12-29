import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Tabs from '../items/Tab'
import Pay from './pay'



class ProductPreview extends React.Component {
    render() {
        const remove = () => {
            document.getElementById(`${this.props.id}`).remove()
        }
        return (
            <li id={this.props.id} >
                <span style={{ position: "absolute", left: "-10%" }}>
                    <input type="checkbox" name={this.props.id} className="select-product" value={this.props.price} />
                </span>
                <img src={this.props.image} height="80px" width="80px" alt="img" />
                <div style={{ marginLeft: "10%" }}>
                    <span>{this.props.name}</span>
                    <div>
                        <b className="price-buy">{this.props.price}</b>
                    </div>
                </div>
                <span style={{ position: "absolute", right: "5%" }} onClick={remove}><RiDeleteBin6Line /></span>
            </li>
        )
    }
}

export default function ProductCart() {
    const [game_data, set_data] = useState([])
    const [sale_code, set_code] = useState([])
    useEffect(() => {
        const get_data = async () => {
            return (await fetch('json/data_.json')).json()
        }
        const get_code = async () => {
            return (await fetch('json/sale_code.json')).json()
        }
        async function fetchData() {
            set_data(await get_data())
            set_code(await get_code())
        }
        fetchData();

    }, [])

    let list = []
    game_data.map(ele => {
        if (localStorage.getItem(ele.id) === "added") {
            list.push(ele.link)
            return 0
        }
    })
    return (
        <div style={{ position: "relative", height: "400px", width: "85%", display: "flex", margin: "50px auto", backgroundColor: "white", borderRadius: "20px", color: "black", fontSize: "20px" }}>
            <div className="product-cart">
                <Tabs>
                    <div style={{ border: "1px solid #ccc" }} label="Tất cả">
                        <ul>
                            {
                                game_data.map(ele => {
                                    if (localStorage.getItem(ele.id) === "added") {
                                        return <ProductPreview key={ele.id} id={ele.id} name={ele.name} image={ele.img_url} price={ele.sale_price === "none" ? ele.price : ele.sale_price} />
                                    }
                                })
                            }
                        </ul>
                    </div>
                    <div label="Mã giảm giá">
                        <ul>
                            {
                                sale_code.map(ele => (
                                    <li key={ele.key}><span>{ele.key}:</span><span style={{ position: "absolute", right: "5%" }}>{ele.value}</span></li>
                                ))
                            }
                        </ul>
                    </div>
                </Tabs >
            </div>
            <Pay link={list}></Pay>
        </div>
    )
}