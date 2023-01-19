import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

const Cards = () => {
    const [products,setProducts]=useState();
    const product=useSelector((state)=>state.product.ProductData);
    const selectedCategory=useSelector((state)=>state.product.selectedCategory);
    useEffect(()=>{
        setProducts(product)
        if(product && selectedCategory){
            const data=[...product].filter(product=>{
              return product.category===selectedCategory
            })
            setProducts(data)
          }
    },[product,selectedCategory])
  return (
    <div className="cards">     
        {products && products.map(product=>{
            return (
                <Card product={product} />
            )
        })}
    </div>
  )
}

export default Cards