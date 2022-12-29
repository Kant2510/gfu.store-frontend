import React from 'react'
import Header from '../Bar/header'
import Footer from '../Bar/footer'
import LogPopup from '../Log/logPopup'

export default function Introduce() {
    return (
        <>
            <Header></Header>
            <LogPopup></LogPopup>
            <div style={{ margin: "5% auto", width: "60%", backgroundColor: "white", borderRadius: "30px", color: "black", padding: "2% 5%" }}>
                <h1 style={{ textAlign: "center" }}><b>GIỚI THIỆU</b></h1>
                <p style={{ textAlign: "justify" }}>
                    Nhóm 6 gồm có 4 thành viên: Âu Lê Tuấn Nhật với vai trò developer, là người giữ vai trò hiện thực hóa các ý tưởng, các giao diện bằng cách lập trình; Nguyễn Trọng Nhân và Nguyễn Thành Phát với vai trò UX/UI, thiết kế giao diện web, thứ mà người dung tiếp cận đầu tiên khi vào một website; cuối cùng là Nguyễn Thành Nhật, giữ một vai trò cũng hết sức quan trọng, đó là tìm kiếm data về games (gồm các thông tin như tên game, hình ảnh, giá bán,…). Đây là một đồ án làm về một website bán games, download games tương tự như Google Play hay Appstore, tuy nhiên chỉ ở mức tương đối với các yêu cầu cơ bản nhất. <br />
                    Website được đặt tên là GFU Store với ý nghĩa là Game is For You (trò chơi là để dành cho bạn). Gồm các chức năng cơ bản như hiển thị các thông tin về games, list các games, đánh giá, đăng nhập,….
                </p>
            </div>
            <Footer></Footer>
        </>
    )
}