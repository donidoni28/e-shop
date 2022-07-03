import React, { useEffect, useState } from 'react'

export default function ProductComponent({  id,product,onButtonClick }) {
    let [number,setState] = useState(0)
    let handleClick = () =>{
        onButtonClick(id)
    }
    
    return (
        <div>
            <img style={{ width: '10rem' }} src={product.img} alt="" />
            <p>name:{product.name}</p>
            <p>price:{product.price}€</p>
            <p>stock:{product.stock}</p>
            <p onClick={(e)=>handleClick(e)}>acheter</p>
        </div>
    )
}
