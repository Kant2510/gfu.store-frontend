import React, { useContext } from 'react'
import { authContext } from '../../contexts/authContext'
import { Link } from 'react-router-dom'

export default function Footer() {
    const { authState } = useContext(authContext)
    const handleClick = () => {
        document.getElementsByClassName('cover-popup')[0].style.display =
            'block'
    }
    return (
        <footer>
            <div className='footer'>
                <div className='footer-child'>
                    <Link to='/home'>
                        <div>
                            <img
                                src='/images/logo.png'
                                style={{ margin: '5% 0 0 30%', height: '80px' }}
                                alt='logo'
                            />
                        </div>
                    </Link>
                    <div className='footer-info'>
                        <h2>GIỚI THIỆU</h2>
                        <span>Game bản quyền là gì?</span>
                        <Link to='/introduce' className='link'>
                            <span>Giới thiệu Games Store</span>
                        </Link>
                        <Link to='/terms' className='link'>
                            <span>Điều khoản dịch vụ</span>
                        </Link>
                        <span>Chính sách bảo mật</span>
                    </div>
                    <div className='footer-info'>
                        <h2>TÀI KHOẢN</h2>
                        {authState.isAuthenticated ? (
                            <span>{authState.user.username}</span>
                        ) : (
                            <>
                                <span onClick={handleClick}>Đăng nhập</span>
                                <span onClick={handleClick}>Đăng ký</span>
                            </>
                        )}
                    </div>
                    <div className='footer-info'>
                        <h2>LIÊN HỆ</h2>
                        <span>Liên hệ Hotline 1900 000</span>
                        <span>Liên hệ hỗ trợ</span>
                        <Link to='/guide' className='link'>
                            <span>Hướng dẫn up game</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
