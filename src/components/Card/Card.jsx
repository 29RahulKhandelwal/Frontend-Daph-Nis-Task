import React, { useState } from 'react'
import "./Card.css"

const Card = (props) => {
    const {product}=props;
    const [isReadMore,setIsReadMore]=useState(false);
    const text=product.description
    return (
        <div class="card" key={product.id}>
            <div className='productImg'>
                <img src={product.image} class="card-img-top" alt="..." />
                <p className='productCategory'>{product.category}</p>
            </div>
                <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">{isReadMore ? text : text.substring(0,149) + " ..." } <button className='readMoreBtn' onClick={()=>setIsReadMore(!isReadMore)}>{isReadMore ? "Read Less" : "Read More"}</button></p>
                </div>
        </div>
    )
}

export default Card