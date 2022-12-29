import React, { useState } from 'react'
import Tabs from '../items/Tab'
import { SlClose } from 'react-icons/sl'
import Alert from '@mui/material/Alert'
import axios from 'axios'
import '../../style/items.css'


export default function LogPopup() {
    const [typeAlert, setTypeAlert] = useState(null)
    const [messageAlert, setMessageAlert] = useState(null)

    const handleClick = () => {
        document.getElementsByClassName("cover-popup")[0].style.display = "none"
        setTypeAlert(null)
        setMessageAlert(null)
    }

    const logup_auth = "https://gfu-store-api.onrender.com/auth/register"
    const login_auth = "https://gfu-store-api.onrender.com/auth/login"

    const logup = evt => {
        evt.preventDefault()
        const formData = new FormData(evt.target)
        const query_data = Object.fromEntries(formData)
        console.log(query_data)
        axios.post(logup_auth, {
            fullname: query_data.fullname,
            username: query_data.username,
            password: query_data.password,
            repeat: query_data.repeat_password,
            email: query_data.email,
            phone: query_data.phone_number
        })
            .then(response => {
                setTypeAlert(response.data.type)
                setMessageAlert(response.data.message)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const login = evt => {
        evt.preventDefault()
        const formData = new FormData(evt.target)
        const query_data = Object.fromEntries(formData)
        axios.post(login_auth, {
            username: query_data.username,
            password: query_data.password
        })
            .then(response => {
                setTypeAlert(response.data.type)
                setMessageAlert(response.data.message)
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="cover-popup">
            <div className="window-popup">
                {typeAlert !== null ?
                    <div style={{ width: "500px", position: "absolute", margin: "0 auto", left: "0", right: "0", top: "10%" }}>
                        <Alert severity={typeAlert}>{messageAlert}</Alert>
                    </div> : <></>}
                <Tabs>
                    <div label="Đăng nhập">
                        <div style={{ display: "flex", width: "100%", marginTop: "-3%", position: "relative" }}>
                            <SlClose style={{ position: "absolute", top: "-60", right: "15", cursor: "pointer", color: "black" }} onClick={handleClick} ></SlClose>
                            <form className="info-group-popup" method="POST" onSubmit={login} >
                                <input className="input-log" placeholder="Tên đăng nhập" name="username" />
                                <input type="password" className="input-log" placeholder="Mật khẩu" name="password" />
                                <span style={{ margin: "5% 0 5% 0", color: "black" }} >Quên mật khẩu</span>
                                <button className="sign-in-popup" type="submit">Đăng nhập</button>
                            </form>
                            <img src="/images/login.png" style={{ marginTop: "-4%", height: "270px", width: "auto" }} alt="login" />
                        </div>
                    </div>
                    <div label="Đăng ký">
                        <div style={{ display: "flex", width: "100%", marginTop: "-3%", position: "relative" }}>
                            <SlClose style={{ position: "absolute", top: "-60", right: "15", cursor: "pointer", color: "black" }} onClick={handleClick} ></SlClose>
                            <form className="info-group-popup" method="POST" onSubmit={logup}>
                                <input className="input-log" placeholder="Họ và tên" name="fullname" />
                                <input className="input-log" placeholder="Email" name="email" />
                                <input className="input-log" placeholder="Tên đăng nhập" name="username" />
                                <input type="password" className="input-log" placeholder="Mật khẩu" name="password" />
                                <input type="password" className="input-log" placeholder="Nhập lại mật khẩu" name="repeat_password" />
                                <input className="input-log" placeholder="Số điện thoại" name="phone_number" />
                                <button className="sign-up-popup" type="submit">Tạo tài khoản</button>
                            </form>
                            <div>
                                <img src="/images/register.png" style={{ marginTop: "13%", height: "232px", width: "400px" }} alt="logup" />
                            </div>
                        </div>
                    </div>
                </Tabs >
            </div >
        </div >

    )
}