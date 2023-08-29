import React, { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { productContext } from '../../../contexts/productContext'
import { authContext } from '../../../contexts/authContext'
import '../../../style/product.css'
import { useParams, Link } from 'react-router-dom'
import StarRate from '../../layouts/starRate'
import LikeButton from '../../layouts/LikeButton'
import GameData from '../../../data/gameData'
import YoutubeVideo from '../../layouts/youtubeVideo'
import { ToastControl } from '../../layouts/toast'

class Download extends React.Component {
    render() {
        const download = () => {
            let a = document.createElement('a')
            a.href = `https://gfu-store.web.app/${this.props.link}`
            a.download = `${this.props.link.replace('installFile/', '')}`
            a.click()
        }
        return (
            <button style={{ backgroundColor: '#0070C0' }} onClick={download}>
                DOWNLOAD
            </button>
        )
    }
}

const Buy = ({ authContext }) => {
    const navigate = useNavigate()
    const buy = () => {
        if (!authContext.isAuthenticated) {
            authContext.openModal(true)
            ToastControl('You need to log in!', 'error')
            // document.getElementsByClassName('cover-popup')[0].style.display =
            //     'block'
            return
        }
        navigate('/cart')
    }
    return (
        <button style={{ backgroundColor: '#0070C080' }} onClick={buy}>
            MUA NGAY
        </button>
    )
}

const AddToCart = ({ productId, productContext, authContext }) => {
    const [type, setType] = useState('')
    useEffect(() => {
        const cartItem = productContext.cart.find(
            (item) => item.id === productId
        )
        setType(cartItem ? 'del' : 'add')
    }, [])
    const handleClick = async () => {
        //send 1 request gồm id
        if (!authContext.isAuthenticated) {
            authContext.openModal(true)
            ToastControl('You need to log in!', 'error')
            // document.getElementsByClassName('cover-popup')[0].style.display =
            //     'block'
            return
        }
        const respone = await (type === 'add'
            ? productContext.addCart(productId)
            : productContext.deleteCart(productId))

        if (respone.success) {
            setType(type === 'add' ? 'del' : 'add')
        }
    }
    return (
        <button style={{ color: '#0070C0' }} onClick={handleClick}>
            {type === 'add' ? 'THÊM VÀO GIỎ' : 'XÓA KHỎI GIỎ'}
        </button>
    )
}

class ProductPreview extends React.Component {
    render() {
        return (
            <div className='preview'>
                <Link
                    to={`/products/${this.props.name
                        .replace(/ +/g, '-')
                        .toLowerCase()}`}
                    className='link'
                >
                    <div style={{ position: 'relative', padding: '5px' }}>
                        <div style={{ margin: '5px 5px 5px 5px' }}>
                            <img
                                src={`/${this.props.image}`}
                                alt='csgo'
                                width='150px'
                                height='150px'
                            />
                        </div>
                        {this.props.sale_price === 'none' ? (
                            <div className='sale-label'></div>
                        ) : (
                            <div className='sale-label'>
                                <span>{this.props.sale}</span>
                            </div>
                        )}
                        <span
                            style={{
                                display: 'inline-block',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                width: '150px',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {this.props.name}
                        </span>
                        <br />
                        {/* <span>{this.props.sale_price === "none" ? this.props.price : this.props.sale_price}</span>
                        {this.props.sale_price === "none" ? (
                            <span></span>
                        ) : (
                            <span style={{ float: "right", color: "red", textDecoration: "line-through" }}>{this.props.price}</span>
                        )}
                        <br />
                        <span style={{ marginRight: "10px" }} >
                            <StarRate rates={this.props.rates} />
                        </span> */}
                        {/*<span style={{ float: "right" }}><HiOutlineDownload /> {this.props.sell}</span>*/}
                    </div>
                </Link>
            </div>
        )
    }
}

export default function Item() {
    const { productId } = useParams()
    const { addCart, deleteCart, productState } = useContext(productContext)
    const { authState, openModal } = useContext(authContext)
    const productsData = GameData()
    const gameData = productsData.find(
        (ele) => ele.name.replace(/ +/g, '-').toLowerCase() === productId
    )

    const loadGameData = () => {
        return (
            <div className='product-info'>
                <div className='product-view' style={{ display: 'flex' }}>
                    <div>
                        <img
                            src={`../${gameData.img_url}`}
                            height='300px'
                            width='500px'
                            style={{ marginLeft: '20px' }}
                            alt='hinhanh'
                        />
                    </div>
                    <div className='product-view-sell'>
                        <span style={{ whiteSpace: 'nowrap' }}>
                            {gameData.name}
                        </span>
                        <br />
                        <span>
                            <StarRate rates={gameData.rates} />
                        </span>
                        <span style={{ float: 'right', fontSize: '20px' }}>
                            Lượt tải: {gameData.sell}
                        </span>
                        {gameData.sale_price === 'none' ? ( //check sale
                            <div>
                                <span
                                    style={{
                                        color: '#CA1831',
                                        textDecoration: 'line-through',
                                    }}
                                ></span>
                                <span
                                    style={{
                                        float: 'right',
                                        fontSize: '20px',
                                    }}
                                ></span>
                                <br />
                                <span>{gameData.price}</span>
                            </div>
                        ) : (
                            <div>
                                <span
                                    style={{
                                        color: '#CA1831',
                                        textDecoration: 'line-through',
                                    }}
                                >
                                    {gameData.price}
                                </span>
                                <span
                                    style={{
                                        float: 'right',
                                        fontSize: '20px',
                                    }}
                                >
                                    ({gameData.sale})
                                </span>
                                <br />
                                <span>{gameData.sale_price}</span>
                            </div>
                        )}
                        <span style={{ fontSize: '20px' }}>
                            <b>Nhà phát hành</b>: {gameData.publisher}
                        </span>
                        <br />
                        <LikeButton />
                        {gameData.price === 'Miễn phí' ? (
                            <span>
                                <Download link={gameData.ori_url} />
                            </span>
                        ) : (
                            <span>
                                <Buy
                                    link={gameData.ori_url}
                                    authContext={{
                                        isAuthenticated:
                                            authState.isAuthenticated,
                                        openModal: openModal,
                                    }}
                                ></Buy>
                                {/* <DeleteInCart></DeleteInCart> */}
                                <AddToCart
                                    productId={gameData.id}
                                    authContext={{
                                        isAuthenticated:
                                            authState.isAuthenticated,
                                        openModal: openModal,
                                    }}
                                    productContext={{
                                        addCart: addCart,
                                        deleteCart: deleteCart,
                                        cart: productState.cart,
                                    }}
                                ></AddToCart>
                            </span>
                        )}
                    </div>
                </div>
                <div className='product-view-client'>
                    <p
                        style={{
                            width: '50%',
                            paddingBottom: '5px',
                            borderBottom: '1px solid white',
                        }}
                    >
                        <b> Chi tiết sản phẩm</b>
                    </p>
                    <div style={{ fontSize: '17px', width: '50%' }}>
                        <ul>
                            <li>
                                <span style={{ color: 'orange' }}>
                                    Phiên bản:
                                </span>{' '}
                                {gameData.version}
                            </li>
                            <li>
                                <span style={{ color: 'orange' }}>
                                    Nền tảng:
                                </span>{' '}
                                {gameData.os}
                            </li>
                            <li style={{ textAlign: 'justify' }}>
                                <span style={{ color: 'orange' }}>Mô tả:</span>{' '}
                                {gameData.description}
                            </li>
                        </ul>
                    </div>
                    <p
                        style={{
                            width: '30%',
                            paddingBottom: '5px',
                            borderBottom: '1px solid white',
                        }}
                    >
                        <b> Trailer</b>
                    </p>
                    <YoutubeVideo
                        embedId={gameData.youtube.replace(
                            'https://www.youtube.com/watch?v=',
                            ''
                        )}
                    />
                    <p
                        style={{
                            width: '30%',
                            paddingBottom: '5px',
                            borderBottom: '1px solid white',
                        }}
                    >
                        <b> Game tương tự</b>
                    </p>
                    <div className='similar'>
                        <section className='slide-similar'>
                            {productsData.map((ele) => {
                                if (
                                    ele.category === gameData.category &&
                                    ele.id !== gameData.id
                                ) {
                                    return (
                                        <ProductPreview
                                            key={ele.name}
                                            name={ele.name}
                                            rates={ele.rates}
                                            price={ele.price}
                                            sale_price={ele.sale_price}
                                            sale={ele.sale}
                                            sell={ele.sell}
                                            image={ele.img_url}
                                        />
                                    )
                                }
                                return null
                            })}
                        </section>
                    </div>
                    <p>Bình luận</p>
                    <div style={{ display: 'flex' }}>
                        <textarea
                            rows='5'
                            placeholder='Nhập nội dung... '
                        ></textarea>
                        <button>Gửi</button>
                    </div>
                </div>
            </div>
        )
    }
    return <div>{gameData ? loadGameData() : <></>}</div>
}
