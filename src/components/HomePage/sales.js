import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FcNext, FcPrevious } from 'react-icons/fc'
import { MdAttachMoney } from 'react-icons/md'
import ProductPreview from '../items/ProductPreview/productPreview';
import GameData from '../items/GameData/gameData'

export default function Sales() {
    // const [game_data, set_data] = useState([])
    // useEffect(() => {
    //     const get_data = async () => {
    //         return (await fetch('/json/data_.json')).json()
    //     }
    //     const fetchData = async () => {
    //         set_data(await get_data())
    //     }
    //     fetchData();
    // }, [])
    const game_data = GameData()

    game_data.sort((a, b) => {
        a = Number((a.sale === "none" ? "0%" : a.sale).slice(0, -1))
        b = Number((b.sale === "none" ? "0%" : b.sale).slice(0, -1))
        return (a > b) ? 1 : ((b > a) ? -1 : 0)
    })
    useEffect(() => {
        document.getElementById("previous-sales").onclick = () => {
            document.getElementsByClassName("slide-sales")[0].scrollLeft -= 500;
        }
        document.getElementById("next-sales").onclick = () => {
            document.getElementsByClassName("slide-sales")[0].scrollLeft += 500;
        }
    }, [])
    return (
        <div className="sales" >
            <Link to="/products?sale=true&action=on&adventure=on&fps=on&horror=on&intelligence=on&multiplayer=on&sport=on" className="link">
                <p style={{ fontSize: "25px", margin: "10px 0px 0px 10px" }} ><MdAttachMoney />Giảm giá</p>
            </Link>
            <div className="slide-sales-frame">
                <FcPrevious style={{ color: "white", position: "absolute", top: "50%", margin: "-10px 0px 0px 25px", cursor: "pointer" }} id="previous-sales" />
                <section className="slide-sales">
                    {
                        game_data.map(ele => {
                            if (ele.sale !== "none") {
                                return <ProductPreview key={ele.id} name={ele.name} rates={ele.rates} price={ele.price} sale_price={ele.sale_price} sale={ele.sale} sell={ele.sell} image={ele.img_url} />
                            }
                            return null
                        })
                    }
                </section>
                <FcNext style={{ color: "white", position: "absolute", top: "50%", right: "20px", marginTop: "-10px", cursor: "pointer" }} id="next-sales" />
            </div>
        </div >
    )
}