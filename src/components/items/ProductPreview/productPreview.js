import React from "react";
import StarRate from '../Star'
import { Link } from 'react-router-dom'
import { HiOutlineDownload } from 'react-icons/hi'

class ProductPreview extends React.Component {
    render() {
        return (
            <div className="preview" >
                <Link to={`/products/${this.props.name.replace(/ +/g, '-').toLowerCase()}`} className="link">
                    <div style={{ position: "relative", padding: "5px" }}>
                        <div style={{ margin: "5px 5px 5px 5px" }}>
                            <img src={`/${this.props.image}`} alt="csgo" width="150px" height="150px" />
                        </div>
                        {this.props.sale_price === "none" ? (
                            <div className="sale-label"></div>
                        ) : (
                            <div className="sale-label">
                                <span>{this.props.sale}</span>
                            </div>
                        )}
                        <span style={{ display: "inline-block", textOverflow: "ellipsis", overflow: "hidden", width: "150px", whiteSpace: "nowrap" }}>{this.props.name}</span>
                        <br />
                        <span>{this.props.sale_price === "none" ? this.props.price : this.props.sale_price}</span>
                        {this.props.sale_price === "none" ? (
                            <span></span>
                        ) : (
                            <span style={{ float: "right", color: "red", textDecoration: "line-through" }}>{this.props.price}</span>
                        )}
                        <br />
                        <span style={{ marginRight: "10px" }} >
                            <StarRate rates={this.props.rates} />
                        </span>
                        <span style={{ float: "right" }}><HiOutlineDownload /> {this.props.sell}</span>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ProductPreview

