import React from 'react'
import Header from '../../components/layouts/header'
import Footer from '../../components/layouts/footer'

export default function Guide() {
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
                    <b>HƯỚNG DẪN UPLOAD GAME - QUY TRÌNH PHÊ DUYỆT</b>
                </h1>
                <h2>
                    <b>Phần 1. Hướng dẫn:</b>{' '}
                    <i>
                        Để có thể tải game lên trang này, bạn cần phải điền đủ
                        thông tin{' '}
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://forms.gle/po9kpRBJPbspcUSc9'
                        >
                            tại đây
                        </a>{' '}
                        theo hướng dẫn sau
                    </i>
                </h2>
                <h4>
                    <b>
                        - Bước 1: Xác nhận thông tin cá nhân/doanh nghiệp/công
                        ty upload game.
                    </b>
                </h4>
                <h4>
                    <b>- Bước 2: Thông tin chính xác về game :</b>
                </h4>
                <p>
                    + Tên game ( không được trùng với các game có mặt trên thị
                    trường ) <br />
                    + Cấu hình <br />
                    + Tương thích ( Window, IOS,...) <br />
                    + Dung lượng bộ nhớ ( cần phải nêu rõ đầy đủ ) <br />
                    + Tính bảo mật <br />
                    + Thể loại <br />
                    + Cách chơi game <br />
                    + Độ tuổi người chơi <br />
                </p>
                <h4>
                    <b>- Bước 3: Giấy tờ bản quyền game</b>
                </h4>
                <p>
                    + Đây là giấy tờ vô cùng quan trọng để xác thực bản quyền
                    game, cần phải có xác nhận của các cấp.{' '}
                    <b>
                        (ĐÂY LÀ YẾU TỐ CẦN VÀ ĐỦ ĐỂ CHÚNG TÔI DUYỆT GAME CỦA
                        BẠN)
                    </b>
                    <br />
                    <i>Chú ý:</i> Khi bạn hoàn thành xong form upload, chúng ta
                    sẽ xem xét và phản hồi thông tin về game của bạn trong thời
                    gian sớm nhất có thể.
                </p>

                <h2>
                    <b>Phần 2. Quy trình phê duyệt</b>
                </h2>
                <h4>
                    <b>1. Kiểm thử chức năng:</b>
                </h4>
                <p>
                    - Người kiểm thử chức năng tìm kiếm các vấn đề chung trong
                    game hoặc giao diện người dùng và đồ họa của nó, chẳng hạn
                    như các vấn đề về : logic game, vận hành game, các vấn đề về
                    tính ổn định và tính toàn vẹn nội dung game. Kiểm tra giao
                    diện người dùng đảm bảo sự thân thiện với người dùng.
                </p>
                <h4>
                    <b>
                        2. Kiểm tra khả năng tương thích trên các hệ điều hành
                        khác nhau ( IOS/ ANDROID / WINDOW,...):
                    </b>
                </h4>
                <p>
                    - Kiểm tra xem game có tương thích trên các thiết bị khác
                    nhau hay không và tính tương thích trên các cấu hình phần
                    cứng và phần mềm khác nhau.
                </p>
                <h4>
                    <b>3. Kiểm thử hiệu năng:</b>
                </h4>
                <p>
                    - Kiểm tra hiệu suất tổng thể của game. Thực hiện điều chỉnh
                    hiệu suất để tối ưu hóa tốc độ của game. <br />- Những thông
                    số quan trọng được kiểm tra trong suốt quá trình kiểm thử
                    hiệu năng: Thời gian đáp ứng trên máy khách (client) và máy
                    chủ (server), thời gian hoàn thành giao dịch, hiệu suất tải
                    tối đa, tuổi thọ, độ bao phủ mạng, rò rỉ bộ nhớ, chạy trong
                    điều kiện bộ nhớ thấp, chạy trong điều kiện pin yếu, thời
                    gian thực hiện để tải xuống ứng dụng, nhiều người dùng truy
                    cập đồng thời vào máy chủ của ứng dụng, test tốc độ, thông
                    lượng, độ tin cậy, khả năng mở rộng, v.v...
                </p>
                <h4>
                    <b>4. Mức tiêu thụ pin và hiệu suất đồ họa:</b>
                </h4>
                <p>
                    - Đo mức tiêu thụ pin của game trên thiết bị di động. Mức
                    tiêu thụ pin phải tối ưu trong thời gian dài và phản hồi
                    game phải đạt yêu cầu dưới các tải nặng khác nhau trên các
                    thiết bị khác nhau.
                </p>
                <h4>
                    <b>5. Kết nối mạng:</b>
                </h4>
                <p>
                    - Đo thời gian phản hồi của các game trên di động trên các
                    loại mạng khác nhau (Wi-Fi, 2G, 3G, 4G), nhằm cung cấp thông
                    tin tổng thể về mức độ hiệu quả của game trên các mạng không
                    đáng tin cậy. Nó cũng kiểm tra kết nối giữa các thiết bị di
                    động, trung tâm dữ liệu hoặc đám mây. Toàn bộ thời gian cao
                    điểm, kết nối dữ dội, sao chép dữ liệu, mất gói, phân mảnh
                    dữ liệu được theo dõi. Thử nghiệm hiệu suất game đặc biệt là
                    MMO
                </p>
                <h4>
                    <b>6. Kiểm thử tuân thủ:</b>
                </h4>
                <p>
                    - Tuân thủ nguyên tắc thị trường (ví dụ: chính sách của
                    Apple App Store...), tuân thủ chính sách doanh nghiệp (ví
                    dụ: các nội dung bị cấm...). Tuân thủ cũng có thể liên quan
                    đến các cơ quan quản lý như PEGI và ESRB. Nếu có nội dung
                    phản cảm không phù hợp với các tiêu chí chuẩn, thì chúng sẽ
                    bị report. Ngay cả một vi phạm nhỏ duy nhất trong việc đệ
                    trình phê duyệt giấy phép cũng có thể khiến game bị từ chối,
                    gây mất thời gian và phát sinh chi phí bổ sung trong việc
                    kiểm tra và gửi lại...
                </p>
                <h4>
                    <b>7. Kiểm thử Localization:</b>
                </h4>
                <p>
                    - Kiểm thử Localization là quan trọng nếu game được nhắm mục
                    tiêu cho thị trường toàn cầu. Tiêu đề, nội dung và văn bản
                    game cần được dịch và kiểm thử với các thiết bị bằng nhiều
                    ngôn ngữ. Các loại kiểm tra này có thể được thực hiện nhanh
                    chóng (với sự trợ giúp của trình truy cập thiết bị dựa trên
                    đám mây và kiểm thử tự động).
                </p>
                <h4>
                    <b>8. Soak testing:</b>
                </h4>
                <p>
                    - Thử nghiệm này liên quan đến việc rời khỏi game đang chạy
                    trong một thời gian dài ở các chế độ hoạt động khác nhau. Ví
                    dụ: set trạng thái tạm dừng không hoạt động cho game (pause)
                    hoặc dừng luôn ở màn hình tiêu đề... Soak testing Có thể xác
                    định các lỗi rò rỉ bộ nhớ hoặc các lỗi xung quanh.
                </p>
                <h4>
                    <b>9. Kiểm thử phục hồi:</b>
                </h4>
                <p>
                    - Trong phần mềm, kiểm thử phục hồi được dùng để kiểm tra
                    xem khả năng phục hồi của ứng dụng như thế nào từ các sự cố,
                    lỗi phần cứng và các lỗi tương tự khác. Trong loại kiểm thử
                    này, ứng dụng buộc phải thất bại, và sau đó quan sát ứng
                    dụng phục hồi như thế nào trong các điều kiện thất bại và
                    môi trường trên.
                </p>
                <h4>
                    <b>10. Kiểm thử bảo mật:</b>
                </h4>
                <p>
                    - Được thực hiện để kiểm tra xem độ an toàn của phần mềm như
                    thế nào khi hoạt động trong các mối đe dọa từ bên ngoài.{' '}
                    <br />- Bảo vệ dữ liệu khỏi các mối đe dọa từ bên ngoài, các
                    hạn chế truy cập hệ thống không kiểm soát được, vi phạm dữ
                    liệu, hệ điều hành có lỗ hổng, hệ thống truyền thông ﬂaws
                    (có lỗ hổng) và các thuật toán mã hóa yếu.
                </p>
            </div>
            <Footer></Footer>
        </>
    )
}
