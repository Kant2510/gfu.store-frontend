import React, { useContext } from 'react'
import { authContext } from '../../contexts/authContext'

export default function LogAd() {
    const {
        authState: { isAuthenticated },
    } = useContext(authContext)
    const handleClick = () => {
        document.getElementsByClassName('cover-popup')[0].style.display =
            'block'
    }
    return !isAuthenticated ? (
        <div className='log-ad-group'>
            <div className='log-ad-group-child'>
                <div className='log-img' style={{ marginRight: '10%' }}>
                    <img
                        loading='lazy'
                        src='https://cdn.divineshop.vn/static/528b91cfa29c7ffd85418f4b1e8cc8ce.svg'
                        className='Ka'
                        alt='Đăng ký'
                    />
                </div>
                <div className='log-ad-info'>
                    <h3>Bạn chưa có tài khoản?</h3>
                    <div>
                        Hãy tạo ngay một tài khoản để sử dụng đầy đủ các tính
                        năng, tích lũy ưu đãi khi thanh toán các sản phẩm và
                        tham gia vào chương trình. Giới thiệu bạn bè nhận hoa
                        hồng vĩnh viễn tại GFU Store.
                    </div>
                    <div
                        className='log-ad-guide'
                        style={{ display: 'flex', marginTop: '5%' }}
                    >
                        <button
                            type='button'
                            className='sign-up-ad'
                            onClick={handleClick}
                        >
                            Đăng ký ngay
                        </button>
                        <div style={{ lineHeight: '35px' }}>
                            Hoặc bạn đã có tài khoản?{' '}
                            <button
                                type='button'
                                className='sign-in-ad'
                                onClick={handleClick}
                            >
                                Đăng nhập
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <></>
    )
}
