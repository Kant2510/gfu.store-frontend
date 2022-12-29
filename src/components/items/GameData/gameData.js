import { useEffect, useState } from 'react'
export default function GameData() {
    const [game_data, set_data] = useState([])
    useEffect(() => {
        const get_data = async () => {
            return (await fetch('/json/data_.json')).json()
        }
        const fetchData = async () => {
            set_data(await get_data())
        }
        fetchData();
    }, [])
    return game_data
}