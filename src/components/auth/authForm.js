import React, { useState, useContext } from 'react'
import { authContext } from '../../contexts/authContext'
import { useNavigate } from 'react-router-dom'
import Tabs from '../layouts/Tab'
import { SlClose } from 'react-icons/sl'
import Alert from '@mui/material/Alert'
import { DoubleBubble } from 'react-spinner-animated'
import 'react-spinner-animated/dist/index.css'
import { ToastControl } from '../layouts/toast'
import '../../style/layouts.css'

export default function AuthForm({ open }) {
    const navigate = useNavigate()
    const [alert, setAlert] = useState({
        type: null,
        message: null,
    })
    const { loginUser, registerUser } = useContext(authContext)
    const [loading, setLoading] = useState(false)

    const handleClick = () => {
        // document.getElementsByClassName('cover-popup')[0].style.display = 'none'
        setAlert({
            type: null,
            message: null,
        })
        open.openFunc(false)
    }

    const register = async (evt) => {
        evt.preventDefault()
        const formData = new FormData(evt.target)
        const {
            fullname,
            username,
            password,
            repeat_password,
            email,
            phone_number,
        } = Object.fromEntries(formData)
        // console.log({
        //     fullname: fullname,
        //     username: username,
        //     password: password,
        //     repeat: repeat_password,
        //     email: email,
        //     phone: phone_number,
        // })
        try {
            setLoading(true)
            const response = await registerUser({
                fullname: fullname,
                username: username,
                password: password,
                repeat: repeat_password,
                email: email,
                phone: phone_number,
            })
            setLoading(false)
            console.log(response)
            if (response.success) {
                setTimeout(() => {
                    ToastControl('Register successfully!', 'success')
                }, 2000)
                open.openFunc(false)
                navigate('/home')
            }
            setAlert({
                type: response.type,
                message: response.message,
            })
            setTimeout(
                () =>
                    setAlert({
                        type: null,
                        message: null,
                    }),
                5000
            )
        } catch (error) {
            console.log(error)
        }
        // axios
        //     .post(register_auth, {
        //         fullname: query_data.fullname,
        //         username: query_data.username,
        //         password: query_data.password,
        //         repeat: query_data.repeat_password,
        //         email: query_data.email,
        //         phone: query_data.phone_number,
        //     })
        //     .then((response) => {
        //         setTypeAlert(response.data.type)
        //         setMessageAlert(response.data.message)
        //         console.log(response.data)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
    }
    const login = async (evt) => {
        evt.preventDefault()
        const formData = new FormData(evt.target)
        const query_data = Object.fromEntries(formData)
        try {
            setLoading(true)
            const response = await loginUser({
                username: query_data.username,
                password: query_data.password,
            })
            setLoading(false)

            console.log(response)
            if (response.success) {
                setTimeout(() => {
                    ToastControl('Login successfully!', 'success')
                }, 100)
                open.openFunc(false)
                navigate('/home')
            }
            setAlert({
                type: response.type,
                message: response.message,
            })
            setTimeout(
                () =>
                    setAlert({
                        type: null,
                        message: null,
                    }),
                5000
            )
        } catch (error) {
            console.log(error)
        }

        // const formData = new FormData(evt.target)
        // const query_data = Object.fromEntries(formData)
        // axios
        //     .post(login_auth, {
        //         username: query_data.username,
        //         password: query_data.password,
        //     })
        //     .then((response) => {
        //         setTypeAlert(response.data.type)
        //         setMessageAlert(response.data.message)
        //         console.log(response)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
    }
    return open.isOpen ? (
        <div className='cover-popup'>
            <div className='window-popup'>
                {alert.type !== null ? (
                    <div
                        style={{
                            width: '500px',
                            position: 'absolute',
                            margin: '0 auto',
                            left: '0',
                            right: '0',
                            top: '10%',
                        }}
                    >
                        <Alert severity={alert.type}>{alert.message}</Alert>
                    </div>
                ) : (
                    <></>
                )}
                {loading ? (
                    <DoubleBubble
                        text={'Loading...'}
                        bgColor={'rgb(255 255 255 / 0%)'}
                        center={true}
                        width={'150px'}
                        height={'150px'}
                    />
                ) : (
                    <></>
                )}
                <Tabs>
                    <div label='Đăng nhập'>
                        <div
                            style={{
                                display: 'flex',
                                width: '100%',
                                marginTop: '-3%',
                                position: 'relative',
                            }}
                        >
                            <SlClose
                                style={{
                                    position: 'absolute',
                                    top: '-60',
                                    right: '15',
                                    cursor: 'pointer',
                                    color: 'black',
                                }}
                                onClick={handleClick}
                            ></SlClose>
                            <form
                                className='info-group-popup'
                                method='POST'
                                onSubmit={login}
                            >
                                <input
                                    className='input-log'
                                    placeholder='Tên đăng nhập'
                                    name='username'
                                />
                                <input
                                    type='password'
                                    className='input-log'
                                    placeholder='Mật khẩu'
                                    name='password'
                                />
                                <span
                                    style={{
                                        margin: '5% 0 5% 0',
                                        color: 'black',
                                    }}
                                >
                                    Quên mật khẩu
                                </span>
                                <button className='sign-in-popup' type='submit'>
                                    Đăng nhập
                                </button>
                            </form>
                            <img
                                src='/images/login.png'
                                style={{
                                    marginTop: '-4%',
                                    height: '270px',
                                    width: 'auto',
                                }}
                                alt='login'
                            />
                        </div>
                    </div>
                    <div label='Đăng ký'>
                        <div
                            style={{
                                display: 'flex',
                                width: '100%',
                                marginTop: '-3%',
                                position: 'relative',
                            }}
                        >
                            <SlClose
                                style={{
                                    position: 'absolute',
                                    top: '-60',
                                    right: '15',
                                    cursor: 'pointer',
                                    color: 'black',
                                }}
                                onClick={handleClick}
                            ></SlClose>
                            <form
                                className='info-group-popup'
                                method='POST'
                                onSubmit={register}
                            >
                                <input
                                    className='input-log'
                                    placeholder='Họ và tên'
                                    name='fullname'
                                />
                                <input
                                    className='input-log'
                                    placeholder='Email'
                                    name='email'
                                />
                                <input
                                    className='input-log'
                                    placeholder='Tên đăng nhập'
                                    name='username'
                                />
                                <input
                                    type='password'
                                    className='input-log'
                                    placeholder='Mật khẩu'
                                    name='password'
                                />
                                <input
                                    type='password'
                                    className='input-log'
                                    placeholder='Nhập lại mật khẩu'
                                    name='repeat_password'
                                />
                                <input
                                    className='input-log'
                                    placeholder='Số điện thoại'
                                    name='phone_number'
                                />
                                <button className='sign-up-popup' type='submit'>
                                    Tạo tài khoản
                                </button>
                            </form>
                            <div>
                                <img
                                    src='/images/register.png'
                                    style={{
                                        marginTop: '13%',
                                        height: '232px',
                                        width: '400px',
                                    }}
                                    alt='register'
                                />
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>
    ) : (
        <></>
    )
}
