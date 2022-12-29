import React from 'react'
import ProductPreview from '../../items/ProductPreview/productPreview'
import GameData from '../../items/GameData/gameData'

const sortProduct = (option, game_data) => {
    if (option.sale !== null) {
        game_data = game_data.filter(ele => ele.sale === (option.sale === true ? (ele.sale === "none" ? !ele.sale : ele.sale) : "none"))
    }
    //
    if (option.fee !== null) {
        game_data = game_data.filter(ele => ele.price === (option.fee === true ? (ele.price === "Miễn phí" ? !ele.price : ele.price) : "Miễn phí"))
    }
    //  
    var final_game_data = game_data.filter(ele => ele.category === (option.category.action === true ? "Action" : ""))
    final_game_data = final_game_data.concat(game_data.filter(ele => ele.category === (option.category.adventure === true ? "Adventure" : "")))
    final_game_data = final_game_data.concat(game_data.filter(ele => ele.category === (option.category.fps === true ? "FPS" : "")))
    final_game_data = final_game_data.concat(game_data.filter(ele => ele.category === (option.category.horror === true ? "Horror" : "")))
    final_game_data = final_game_data.concat(game_data.filter(ele => ele.category === (option.category.intelligence === true ? "Intelligence" : "")))
    final_game_data = final_game_data.concat(game_data.filter(ele => ele.category === (option.category.multiplayer === true ? "Multiplayer" : "")))
    final_game_data = final_game_data.concat(game_data.filter(ele => ele.category === (option.category.sport === true ? "Sport" : "")))
    //
    if (option.range.begin !== 0 || option.range.end !== 0) {
        final_game_data = final_game_data.filter(ele => {
            let gamePrice = Number((ele.sale_price === "none" ? (ele.price === "Miễn phí" ? "0đ" : ele.price) : ele.sale_price).slice(0, -1).replace(/\./g, ''))
            if (option.range.end === 0) {
                return gamePrice >= option.range.begin
            }
            else return (gamePrice >= option.range.begin && gamePrice <= option.range.end)
        })
    }
    if (option.sortBy === "increasePrice") {
        final_game_data.sort((a, b) => {
            a = Number((a.sale_price === "none" ? (a.price === "Miễn phí" ? "0đ" : a.price) : a.sale_price).slice(0, -1).replace(/\./g, ''))
            b = Number((b.sale_price === "none" ? (b.price === "Miễn phí" ? "0đ" : b.price) : b.sale_price).slice(0, -1).replace(/\./g, ''))
            return (a > b) ? 1 : ((b > a) ? -1 : 0)
        })
    }
    if (option.sortBy === "decreasePrice") {
        final_game_data.sort((a, b) => {
            a = Number((a.sale_price === "none" ? (a.price === "Miễn phí" ? "0đ" : a.price) : a.sale_price).slice(0, -1).replace(/\./g, ''))
            b = Number((b.sale_price === "none" ? (b.price === "Miễn phí" ? "0đ" : b.price) : b.sale_price).slice(0, -1).replace(/\./g, ''))
            return (a > b) ? -1 : ((b > a) ? 1 : 0)
        })
    }
    //
    if (option.sortBy === "increaseRates") {
        final_game_data.sort((a, b) => {
            a = a.rates
            b = b.rates
            return (a > b) ? 1 : ((b > a) ? -1 : 0)
        })
    }
    if (option.sortBy === "decreaseRates") {
        final_game_data.sort((a, b) => {
            a = a.rates
            b = b.rates
            return (a > b) ? -1 : ((b > a) ? 1 : 0)
        })
    }
    //
    if (option.sortBy === "bestSeller") {
        final_game_data.sort((a, b) => {
            a = Number(a.sell.slice(0, -1))
            b = Number(b.sell.slice(0, -1))
            return (a > b) ? -1 : ((b > a) ? 1 : 0)
        })
    }
    //
    return final_game_data

}
export default function List({ option }) {
    let game_data = GameData()

    game_data = sortProduct(option, game_data)
    return (
        <div>
            <div className="product">
                <div className="list-product-frame">
                    <section className="list-product">
                        {
                            game_data.length !== 0 ?
                                game_data.map(ele => (
                                    <ProductPreview key={ele.name} name={ele.name} rates={ele.rates} price={ele.price} sale_price={ele.sale_price} sale={ele.sale} sell={ele.sell} image={ele.img_url} />
                                )) :
                                <p><b><i>Không có kết quả lọc</i></b></p>
                        }
                    </section>
                </div>
            </div>
        </div >
    )
}