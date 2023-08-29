import React, { useEffect, useState, useContext } from 'react'
import { productContext } from '../../contexts/productContext'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Tabs from '../layouts/Tab'
import Pay from './pay'
import { sTi, iTs } from '../../utils/convert'

class ProductPreview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: this.props.attributes.quantity,
        }
    }
    hanleIncOrDec = async (operation) => {
        await this.props.methods.updateCart(
            this.props.attributes.id,
            '__',
            operation
        )
        let { counter } = this.state
        counter += operation

        this.setState({
            counter: counter,
        })
    }
    render() {
        return (
            <tr>
                <td className='product-column'>
                    <div
                        style={{
                            display: 'flex',
                        }}
                    >
                        <input
                            type='checkbox'
                            onChange={(event) =>
                                this.props.methods.CheckboxChange(
                                    this.props.attributes.id,
                                    event.target.checked
                                )
                            }
                            style={{
                                marginRight: '8px',
                            }}
                        />
                        <img
                            src={this.props.attributes.image}
                            height='80px'
                            width='80px'
                            alt='img'
                        />
                        <div
                            style={{
                                marginLeft: '10%',
                                width: '100%',
                            }}
                        >
                            <span>{this.props.attributes.name}</span>
                        </div>
                        <span
                            style={{
                                position: 'positive',
                                right: '5%',
                                cursor: 'pointer',
                            }}
                            onClick={() =>
                                this.props.methods.Remove(
                                    this.props.attributes.id
                                )
                            }
                        >
                            <RiDeleteBin6Line />
                        </span>
                    </div>
                </td>
                <td className='price-column'>
                    <div>
                        <p className='price-buy'>
                            {this.props.attributes.price}
                        </p>
                    </div>
                </td>
                <td className='quantity-column'>
                    <button
                        onClick={() => this.hanleIncOrDec(-1)}
                        style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor:
                                this.state.counter <= 1 ? '#E1E8EE' : '#228ce3',
                            borderRadius: '6px',
                            border: 'none',
                            cursor: 'pointer',
                            color: this.state.counter <= 1 ? 'black' : 'white',
                        }}
                        disabled={this.state.counter <= 1}
                    >
                        -
                    </button>
                    <span
                        style={{
                            display: 'inline-block',
                            marginTop: '8px',
                            fontSize: '15px',
                            width: '20px',
                        }}
                    >
                        {this.state.counter}
                    </span>
                    <button
                        onClick={() => this.hanleIncOrDec(1)}
                        style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: '#228ce3',
                            borderRadius: '6px',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'white',
                        }}
                    >
                        +
                    </button>
                </td>
                <td className='total-column'>
                    <div>
                        <b className='price-buy'>
                            {iTs(
                                sTi(this.props.attributes.price) *
                                    this.state.counter
                            )}
                        </b>
                    </div>
                </td>
            </tr>
        )
    }
}

export default function ProductCart() {
    const { productState, deleteCart, updateCart } = useContext(productContext)
    const [cartData, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const newTotalPrice = productState.cart
            .filter((product) => product.isSelected)
            .reduce(
                (total, product) =>
                    total +
                    sTi(
                        product.sale_price === 'none'
                            ? product.price
                            : product.sale_price
                    ) *
                        product.quantity,
                0
            )
        setTotalPrice(newTotalPrice)
    }, [productState.cart])
    const handleCheckboxChange = async (productId, isChecked) => {
        await updateCart(productId, isChecked, '__')
    }
    const handleRemove = async (productId) => {
        await deleteCart(productId)
    }
    return (
        <div
            style={{
                position: 'relative',
                minHeight: '400px',
                width: '85%',
                display: 'flex',
                margin: '50px auto',
                backgroundColor: 'white',
                borderRadius: '20px',
                color: 'black',
                fontSize: '20px',
            }}
        >
            <div className='product-cart'>
                <table
                    style={{
                        width: '95%',
                        margin: '20px 40px',
                        border: '1px solid #ccc',
                    }}
                >
                    <thead>
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Tổng cộng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productState.cart.map((ele) => {
                            return (
                                <ProductPreview
                                    key={ele.id}
                                    attributes={{
                                        id: ele.id,
                                        name: ele.name,
                                        image: ele.img_url,
                                        price:
                                            ele.sale_price === 'none'
                                                ? ele.price
                                                : ele.sale_price,
                                        quantity: ele.quantity,
                                    }}
                                    methods={{
                                        CheckboxChange: handleCheckboxChange,
                                        Remove: handleRemove,
                                        updateCart: updateCart,
                                    }}
                                />
                            )
                        })}
                    </tbody>
                </table>
                {/* <Tabs>
                    <div style={{ border: '1px solid #ccc' }} label='Tất cả'>
                        <ul>
                            {cartData.map((ele) => {
                                return (
                                    <ProductPreview
                                        key={ele.id}
                                        id={ele.id}
                                        name={ele.name}
                                        image={ele.img_url}
                                        price={
                                            ele.sale_price === 'none'
                                                ? ele.price
                                                : ele.sale_price
                                        }
                                        handleCheckboxChange={
                                            handleCheckboxChange
                                        }
                                        handleRemove={handleRemove}
                                    />
                                )
                            })}
                        </ul>
                    </div>
                    <div label='Mã giảm giá'>
                        <ul>
                            {productState.discounts.map((ele) => {
                                return (
                                    <li key={ele.code}>
                                        <span>{ele.code}:</span>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                right: '5%',
                                            }}
                                        >
                                            {ele.discounts}
                                        </span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </Tabs> */}
            </div>
            <Pay
                link={cartData.map((ele) => {
                    return ele.link
                })}
                totalPrice={totalPrice}
                discounts={productState.discounts}
            ></Pay>
        </div>
    )
}
