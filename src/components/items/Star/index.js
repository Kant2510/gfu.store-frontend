import React from 'react'
import { HiStar } from 'react-icons/hi'

class StarRate extends React.Component {
    render() {
        let class_list = ["", "", "", "", ""]
        for (var i = 0; i < this.props.rates; i++) {
            class_list[i] = "checked"
        }
        return (
            <>
                <span className="star"><HiStar className={class_list[0]} /></span>
                <span className="star"><HiStar className={class_list[1]} /></span>
                <span className="star"><HiStar className={class_list[2]} /></span>
                <span className="star"><HiStar className={class_list[3]} /></span>
                <span className="star"><HiStar className={class_list[4]} /></span>
            </>
        );
    }
}

export default StarRate