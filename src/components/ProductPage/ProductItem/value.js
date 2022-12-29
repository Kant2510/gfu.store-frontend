import React from 'react'
import StarRate from '../../items/Star'
import LikeButton from '../../items/LikeButton'

export default function Value() {
    return (
        <div>
            <div className="product-info">
                <div className="product-view" style={{ display: "flex" }}>
                    <div>
                        <img src="csgo.png" height="300px" width="500px" style={{ marginLeft: "20px" }} alt="img" />
                    </div>
                    <div className="product-view-sell">
                        <span>CSGO</span>
                        <br />
                        <span><StarRate rates={4} /></span>
                        <span style={{ float: "right", fontSize: "20px" }}>Lượt tải: 1M</span>
                        <div>
                            <span style={{ color: "#CA1831", textDecoration: "line-through" }}>500 000đ</span>
                            <span style={{ float: "right", fontSize: "20px" }}>(-50%)</span>
                            <br />
                            <span>250 000đ</span>
                        </div>
                        <span><b>Nhà phát hành</b>: abcxyz</span>
                        <br />
                        <LikeButton />
                        <span>
                            <button style={{ backgroundColor: "#0070C0" }}>MUA NGAY</button>
                            <button style={{ color: "#0070C0" }}>THÊM VÀO GIỎ</button>
                        </span>
                    </div>
                </div>
                <div className="product-view-client">
                    <p>Chi tiết sản phẩm</p>
                    <div style={{ fontSize: "17px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ullamcorper magna. Integer nisi sapien, volutpat sit amet mollis nec, luctus aliquet dui. Aliquam eu justo eleifend, rutrum elit vitae, consequat risus. Cras tincidunt vehicula dui eget tincidunt. Cras iaculis dignissim maximus. Phasellus placerat bibendum enim eget consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium blandit nisi, sed rutrum nibh. Mauris et scelerisque neque.</div>
                    <p>Bình luận</p>
                    <div style={{ display: "flex" }}>
                        <textarea rows="5" placeholder="Nhập nội dung... "></textarea>
                        <button>Gửi</button>
                    </div>
                </div>
            </div>
        </div>
    )
}