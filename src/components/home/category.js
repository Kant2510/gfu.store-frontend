import React from 'react'
import { Link } from 'react-router-dom'
import { BsList } from 'react-icons/bs'

export default function Category() {
    return (
        <div className="category" >
            <div className="category-child">
                <div style={{ fontSize: "25px" }} ><BsList /> Thể loại Games</div>
                {/* <div>
                    <input className="input-category" placeholder="Tìm kiếm thể loại..."></input>
                </div> */}
                <div>
                    <ul>
                        <Link to="/products?action=on&adventure=on&fps=on&horror=on&intelligence=on&multiplayer=on&sport=on" className="link">
                            <li>Tất cả</li>
                        </Link>

                        <Link to="/products?action=on" className="link">
                            <li>Action</li>
                        </Link>

                        <Link to="/products?adventure=on" className="link">
                            <li>Adventure</li>
                        </Link>

                        <Link to="/products?fps=on" className="link">
                            <li>FPS</li>
                        </Link>

                        <Link to="/products?horror=on" className="link">
                            <li>Horror</li>
                        </Link>

                        <Link to="/products?intelligence=on" className="link">
                            <li>Intelligence</li>
                        </Link>

                        <Link to="/products?multiplayer=on" className="link">
                            <li>Multiplayer</li>
                        </Link>

                        <Link to="/products?sport=on" className="link">
                            <li>Sport</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div >
    )
}