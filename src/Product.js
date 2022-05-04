import React from 'react'
import "./Product.css"
import plant1 from "./1.png"
import plant2 from "./2.png"
import plant3 from "./3.png"



export default function Product() {
  return (
    <div className="product-section">
       <h3 className="product-title"> Our Products</h3>

       <div className="product-image-section">
            <div className="product-image">
                <img className="product-image-1" src = {plant1} alt="tree-1"/>
                <img className="product-image-2" src={plant2}  alt="tree-1"/>
                <img className="product-image-3" src={plant3}  alt="tree-1"/>
            </div>
       </div>
    </div>
  )
}
