import React, { useState } from 'react'
import axios from 'axios'

export default function Connect() {
    const [res, setRes] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const url = "http://localhost:5000/"
    const url_auth = "http://localhost:5000/auth/register"
    const url_auth_ = "http://localhost:5000/auth/login"

    const get = () => {
        axios.get(url).then(function (response) {
            console.log(response)
            setRes(response.data)
        }).catch(function (error) {
            console.log(error)
            setRes(error)
        })
        axios.post(url_auth, {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const submit = evt => {
        evt.preventDefault()
        const formData = new FormData(evt.target)
        const query_data = Object.fromEntries(formData)
        axios.post(url_auth, {
            username: query_data.username,
            password: query_data.password
        })
            .then(response => {
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
        axios.post(url_auth_, {
            username: query_data.username,
            password: query_data.password
        })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const usernameChange = evt => {
        setUsername(evt.target.value)
    }
    const passwordChange = evt => {
        setPassword(evt.target.value)
    }
    return (
        <>
            <form action="http://localhost:5000/auth/register" method="POST" onSubmit={submit}>
                <input type="text" placeholder="Tên đăng nhập" name="username" value={username} onChange={usernameChange} />
                <input type="password" name="password" placeholder="Mật khẩu" value={password} onChange={passwordChange} />
                <button type="submit">Đăng ký</button>
            </form>
            <form action="http://localhost:5000/auth/login" method="POST" onSubmit={login}>
                <input type="text" placeholder="Tên đăng nhập" name="username" value={username} onChange={usernameChange} />
                <input type="password" name="password" placeholder="Mật khẩu" value={password} onChange={passwordChange} />
                <button type="submit">Đăng nhập</button>
            </form>
            <h1>Response: {res}</h1>
            <button onClick={get}>GET</button>
        </>
    )
}