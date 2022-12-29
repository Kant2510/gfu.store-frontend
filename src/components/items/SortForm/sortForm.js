import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams, useNavigate } from 'react-router-dom'

export default function SortForm() {
    const [searchParams] = useSearchParams()

    const [load, setLoad] = useState(false)

    const [lowest, setLowest] = useState('')
    const [highest, setHighest] = useState('')

    const [sortBy, setSortBy] = useState('normal')

    const [fee, setFee] = useState(null)
    const [sale, setSale] = useState(null)

    const [action, setAction] = useState('on')
    const [adventure, setAdventure] = useState('on')
    const [fps, setFps] = useState('on')
    const [horror, setHorror] = useState('on')
    const [intelligence, setInteligence] = useState('on')
    const [multiplayer, setMultiplayer] = useState('on')
    const [sport, setSport] = useState('on')

    function onLowestChange(event) {
        setLowest(event.target.value)
    }
    function onHighestChange(event) {
        setHighest(event.target.value)
    }
    function onSelectChange(event) {
        setSortBy(event.target.value);
    };

    useEffect(() => {
        setLoad(true)

        setLowest(searchParams.get('lowest') === null ? '' : searchParams.get('lowest'))
        setHighest(searchParams.get('highest') === null ? '' : searchParams.get('highest'))

        setSortBy(searchParams.get('sortBy') === null ? 'normal' : searchParams.get('sortBy'))

        setFee(searchParams.get('fee') === null ? false : searchParams.get('fee'))
        setSale(searchParams.get('sale') === null ? false : searchParams.get('sale'))

        setAction(searchParams.get('action'))
        setAdventure(searchParams.get('adventure') === 'on')
        setFps(searchParams.get('fps') === 'on')
        setHorror(searchParams.get('horror') === 'on')
        setInteligence(searchParams.get('intelligence') === 'on')
        setMultiplayer(searchParams.get('multiplayer') === 'on')
        setSport(searchParams.get('sport') === 'on')
    }, [searchParams])

    // useEffect(() => {
    //     document.getElementById('reset').onclick = () => {
    //         document.getElementById('value').checked = false
    //         document.getElementById('free').checked = false

    //         document.getElementById('sale-1').checked = false
    //         document.getElementById('sale-0').checked = false

    //         document.getElementById('action').checked = true
    //         document.getElementById('adventure').checked = true
    //         document.getElementById('fps').checked = true
    //         document.getElementById('horror').checked = true
    //         document.getElementById('intelligence').checked = true
    //         document.getElementById('multiplayer').checked = true
    //         document.getElementById('sport').checked = true
    //     }
    // }, [])
    const loadSearchParams = () => {
        if (load && action === 'on') {
            return <form className="form-option" name="form" action="" method="GET">
                <div className="order-index-1">
                    <span>Mức giá:  </span>
                    <input id="lowest" type="number" name="lowest" placeholder="Thấp nhất" className="price-option" value={lowest} onChange={onLowestChange} />
                    <span> - </span>
                    <input id="highest" type="number" name="highest" placeholder="Cao nhất" className="price-option" value={highest} onChange={onHighestChange} />
                </div>
                <div className="order-index-2">
                    <label htmlFor="order">Sắp xếp theo: </label>
                    <select name="sortBy" id="sort" className="select" value={sortBy} onChange={onSelectChange}>
                        <option value="normal">Mặc định</option>
                        <option value="decreasePrice">Mức giá cao đến thấp</option>
                        <option value="increasePrice">Mức gíá thấp đến cao</option>
                        <option value="decreaseRates">Đánh giá cao đến thấp</option>
                        <option value="increaseRates">Đánh giá thấp đến cao</option>
                        <option value="bestSeller">Bán chạy</option>
                    </select>
                </div>
                <div className="order-index-3">
                    <span>Phí:</span>
                    <input type="radio" id="value" name="fee" value="true" defaultChecked={fee === 'true'} />
                    <label htmlFor="value" style={{ marginRight: "5%" }}>Có phí</label>
                    <input type="radio" id="free" name="fee" value="false" defaultChecked={(fee === null ? searchParams.get('fee') : fee) === 'false'} />
                    <label htmlFor="free">Miễn phí</label>
                </div>
                <div className="order-index-4">
                    <span>Giá:</span>
                    <input type="radio" id="sale-1" name="sale" value="true" defaultChecked={(sale === null ? searchParams.get('sale') : sale) === 'true'} />
                    <label htmlFor="sale-1" style={{ marginRight: "5%" }}>Giảm giá</label>
                    <input type="radio" id="sale-0" name="sale" value="false" defaultChecked={(sale === null ? searchParams.get('sale') : sale) === 'false'} />
                    <label htmlFor="sale-0">Không giảm giá</label>
                </div>
                <div className="order-index-5">
                    <label htmlFor="action">Action</label>
                    <input type="checkbox" id="action" name="action" defaultChecked={action === 'on'} />

                    <label htmlFor="adventure">Adventure</label>
                    <input type="checkbox" id="adventure" name="adventure" defaultChecked={(adventure === 'on' ? searchParams.get('adventure') : adventure) === 'on'} />

                    <label htmlFor="fps">FPS</label>
                    <input type="checkbox" id="fps" name="fps" defaultChecked={(fps === 'on' ? searchParams.get('fps') : fps) === 'on'} />

                    <label htmlFor="horror">Horror</label>
                    <input type="checkbox" id="horror" name="horror" defaultChecked={(horror === 'on' ? searchParams.get('horror') : horror) === 'on'} />
                    <br />
                    <label htmlFor="intelligence">Intelligence</label>
                    <input type="checkbox" id="intelligence" name="intelligence" defaultChecked={(intelligence === 'on' ? searchParams.get('intelligence') : intelligence) === 'on'} />

                    <label htmlFor="multiplayer">Multiplayer</label>
                    <input type="checkbox" id="multiplayer" name="multiplayer" defaultChecked={(multiplayer === 'on' ? searchParams.get('multiplayer') : multiplayer) === 'on'} />

                    <label htmlFor="sport">Sport</label>
                    <input type="checkbox" id="sport" name="sport" defaultChecked={(sport === 'on' ? searchParams.get('sport') : sport) === 'on'} />
                </div>
                <div>
                    <Link to="/products?action=on&adventure=on&fps=on&horror=on&intelligence=on&multiplayer=on&sport=on">
                        <button id="reset" className="filter-button">RESET</button>
                    </Link>
                    <button type="submit" className="filter-button">LỌC</button>
                </div>
            </form >
        }
        else {
            return <></>
        }
    }
    return <>{loadSearchParams()}</>


}

// class SortForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             lowest: '',
//             highest: ''
//         };
//     }
//     render() {
//         return (
//             <form className="form-option" name="form" action="" method="GET">
//                 <div className="order-index-1">
//                     <span>Mức giá:  </span>
//                     <input id="lowest" type="number" name="lowest" placeholder="Thấp nhất" className="price-option" value={this.state.lowest} onChange={this.onFieldChange("lowest").bind(this)} />
//                     <span> - </span>
//                     <input id="highest" type="number" name="highest" placeholder="Cao nhất" className="price-option" value={this.state.highest} onChange={this.onFieldChange('highest').bind(this)} />
//                 </div>
//                 <div className="order-index-2">
//                     <label htmlFor="order">Sắp xếp theo:</label>
//                     <select name="sortBy" id="sort" className="select">
//                         <option value="normal">Mặc định</option>
//                         <option value="decreasePrice">Mức giá cao đến thấp</option>
//                         <option value="increasePrice">Mức gíá thấp đến cao</option>
//                         <option value="decreaseRates">Đánh giá cao đến thấp</option>
//                         <option value="increaseRates">Đánh giá thấp đến cao</option>
//                         <option value="bestSeller">Bán chạy</option>
//                     </select>
//                 </div>
//                 <div className="order-index-3">
//                     <span>Phí:</span>
//                     <input type="radio" id="value" name="fee" value="true" />
//                     <label htmlFor="value">Có phí</label>
//                     <input type="radio" id="free" name="fee" value="false" />
//                     <label htmlFor="free">Miễn phí</label>
//                 </div>
//                 <div className="order-index-4">
//                     <span>Giá:</span>
//                     <input type="radio" id="sale-1" name="sale" value="true" />
//                     <label htmlFor="sale-1">Giảm giá</label>
//                     <input type="radio" id="sale-0" name="sale" value="false" />
//                     <label htmlFor="sale-0">Không giảm giá</label>
//                 </div>
//                 <div className="order-index-5">
//                     <label htmlFor="action">Action</label>
//                     <input type="checkbox" id="action" name="action" defaultChecked />

//                     <label htmlFor="adventure">Adventure</label>
//                     <input type="checkbox" id="adventure" name="adventure" defaultChecked />

//                     <label htmlFor="fps">FPS</label>
//                     <input type="checkbox" id="fps" name="fps" defaultChecked />

//                     <label htmlFor="horror">Horror</label>
//                     <input type="checkbox" id="horror" name="horror" defaultChecked />

//                     <label htmlFor="intelligence">Intelligence</label>
//                     <input type="checkbox" id="intelligence" name="intelligence" defaultChecked />

//                     <label htmlFor="multiplayer">Multiplayer</label>
//                     <input type="checkbox" id="multiplayer" name="multiplayer" defaultChecked />

//                     <label htmlFor="sport">Sport</label>
//                     <input type="checkbox" id="sport" name="sport" defaultChecked />
//                 </div>
//                 <button type="submit" className="filter-button">LỌC</button>
//                 {/* <label htmlhtmlFor="category">Thể loại:</label>
//                     <select id="category" className="select">
//                         <option value="all">Tất cả</option>
//                         <option value="action">Action</option>
//                         <option value="adventure">Adventure</option>
//                         <option value="fps">FPS</option>
//                         <option value="horror">Horror</option>
//                         <option value="intelligence">Intelligence</option>
//                         <option value="multiplayer">Multiplayer</option>
//                         <option value="sport">Sport</option>
//                     </select>
//                     <span>Mức giá:</span>
//                     <input placeholder="Thấp nhất" className="price-option" />
//                     <span>-</span>
//                     <input placeholder="Cao nhất" className="price-option" /> */}
//             </form >
//         )
//     }
//     onFieldChange(fieldName) {
//         return event => {
//             this.setState({ [fieldName]: event.target.value })
//         }
//     }
// }