import React, { useEffect, useState } from 'react'

export default function Common() {
    const [game_data, set_data] = useState([])
    useEffect(() => {
        const get_data = async () => {
            return (await fetch('json/data_.json')).json()
        }
        async function fetchData() {
            set_data(await get_data())
        }
        fetchData();


    }, [])
    game_data.map(ele => (
        localStorage.setItem(`${ele.id}`, localStorage.getItem(`${ele.id}`) === null ? "not_yet" : localStorage.getItem(`${ele.id}`))
    ))
    localStorage.setItem('cart_num', localStorage.getItem('cart_num') === null ? 0 : localStorage.getItem('cart_num'))
    return (
        <></>
    )
}