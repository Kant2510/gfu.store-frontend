import React from 'react'
import Header from '../../components/layouts/header'
import Footer from '../../components/layouts/footer'

export default function Introduce() {
    return (
        <>
            <Header></Header>
            <div
                style={{
                    margin: '5% auto',
                    width: '60%',
                    backgroundColor: 'white',
                    borderRadius: '30px',
                    color: 'black',
                    padding: '2% 5%',
                }}
            >
                <h1 style={{ textAlign: 'center' }}>
                    <b>GIỚI THIỆU</b>
                </h1>
                <p style={{ textAlign: 'justify' }}>
                    Đây là một đồ án làm về một website bán games, download
                    games tương tự như Google Play hay Appstore, tuy nhiên chỉ ở
                    mức tương đối với các yêu cầu cơ bản nhất. <br />
                    Website được đặt tên là GFU Store với ý nghĩa là Game is For
                    You (trò chơi là để dành cho bạn). Gồm các chức năng cơ bản
                    như hiển thị các thông tin về games, list các games, đánh
                    giá, đăng nhập,….
                </p>
            </div>
            <Footer></Footer>
        </>
    )
}
