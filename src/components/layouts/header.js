import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { FaRegAddressCard } from 'react-icons/fa'
import GameData from '../../data/gameData'
import { authContext } from '../../contexts/authContext'
import { productContext } from '../../contexts/productContext'
import { ToastView, ToastControl } from './toast'
import AuthForm from '../auth/authForm'

class ProductPreview extends React.Component {
    render() {
        return (
            <Link
                to={`/products/${this.props.name
                    .replace(/ +/g, '-')
                    .toLowerCase()}`}
                style={{ color: 'black', textDecoration: 'none' }}
            >
                <li>
                    <img
                        src={`/${this.props.image}`}
                        height='40px'
                        width='40px'
                        alt='img'
                    />
                    <div style={{ marginLeft: '10%' }}>
                        <span>{this.props.name}</span>
                    </div>
                </li>
            </Link>
        )
    }
}

export default function Header() {
    const navigate = useNavigate()
    const [search, setSearch] = useState({
        query: '',
        list: [],
    })
    const { authState, logoutUser, openModal } = useContext(authContext)
    const { productState, getCart } = useContext(productContext)
    const productsData = GameData()
    useEffect(() => {
        getCart()
    }, [authState.isAuthenticated])
    const handleOpen = () => {
        if (authState.isAuthenticated) {
            logoutUser()
            navigate('/home')
            //await getCart()
            //xoa du lieu nguoi dung
            //da xoa auth
            //xoa cart
            ToastControl('Log out successfully', 'success')
        } else openModal(true) //setOpen(true)
    }
    // const Close = () => {
    //     setOpen(false)
    // }
    // useEffect(() => {
    //     // const log_btn = document.getElementsByClassName('info-header')[1]
    //     // log_btn.onclick = () => {
    //     //     document.getElementsByClassName('cover-popup')[0].style.display =
    //     //         'block'
    //     // }
    //     document.getElementsByClassName('cart_number')[0].innerHTML =
    //         productState.cart.length
    // }, [productState.cart])

    const handleChange = (e) => {
        const results = productsData.filter((ele) => {
            if (e.target.value === '') return productsData
            return ele.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setSearch({
            query: e.target.value,
            list: results,
        })
    }

    return (
        <header>
            <AuthForm
                open={{ isOpen: authState.showModal, openFunc: openModal }}
            />
            <div className='header'>
                <Link to='/home'>
                    <div>
                        <img
                            src='/images/logo.png'
                            style={{ margin: '5% 0 0 30%', height: '80px' }}
                            alt='logo'
                        />
                    </div>
                </Link>
                <ToastView />
                <div className='search'>
                    <div className='search-bar'>
                        <input
                            onChange={handleChange}
                            value={search.query}
                            className='input-style'
                            placeholder='Tìm kiếm game'
                        ></input>
                        {/* <BiSearchAlt size='0.5x' style={{ color: "white", width: "35px", height: "35px", backgroundColor: "blue", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", }} /> */}
                    </div>
                    <div className='search-list'>
                        <ul
                            style={{
                                display: search.query === '' ? 'none' : 'block',
                            }}
                        >
                            {search.query === '' ? (
                                ''
                            ) : !search.list.length ? (
                                <b>
                                    <i>-- Không tìm thấy sản phẩm --</i>
                                </b>
                            ) : (
                                search.list.map((ele) => {
                                    return (
                                        <ProductPreview
                                            key={ele.name}
                                            name={ele.name}
                                            image={ele.img_url}
                                        />
                                    )
                                })
                            )}
                        </ul>
                    </div>
                </div>

                <div className='info-group'>
                    <Link to='/cart' className='link'>
                        <div className='info-header'>
                            <HiOutlineShoppingCart
                                style={{
                                    fontSize: '30px',
                                    margin: '6px 5px 0px 3px',
                                }}
                            />
                            <span
                                style={{
                                    position: 'absolute',
                                    top: '-4px',
                                    right: '-4px',
                                    backgroundColor: 'red',
                                    lineHeight: '150%',
                                    textAlign: 'center',
                                    height: '20px',
                                    width: '20px',
                                    borderRadius: '50%',
                                }}
                            >
                                {productState.cart.length}
                            </span>
                            <span
                                style={{ marginTop: '7px', fontSize: '14px' }}
                            >
                                Giỏ hàng
                            </span>
                        </div>
                    </Link>
                    <div className='info-header' onClick={handleOpen}>
                        <FaRegAddressCard
                            style={{
                                fontSize: '30px',
                                margin: '6px 5px 0px 3px',
                            }}
                        />
                        {authState.isAuthenticated ? (
                            <p style={{ marginTop: '15px' }}>Đăng xuất</p>
                        ) : (
                            <p style={{ marginTop: '6px' }}>
                                Đăng ký <br />
                                Đăng nhập
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}
