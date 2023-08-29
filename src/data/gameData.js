import { useContext } from 'react'
import { productContext } from '../contexts/productContext'
const GameData = () => {
    const {
        productState: { products },
    } = useContext(productContext)
    return products
    // console.log(productState)
    // const [game_data, set_data] = useState([])
    // useEffect(() => {
    //     const fetchData = async () => {
    //         console.log([productState.products])
    //         set_data(productState.products)
    //         console.log(game_data)
    //     }
    //     fetchData()
    // }, [])
    // return game_data
}
export default GameData
