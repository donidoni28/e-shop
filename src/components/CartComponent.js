import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';

export default function CartComponent({ children, onButtonBuyClick,argent }) {
    let [total, setTotal] = useState()
    useEffect(() => {
        let newTotal = 0
        children && children.forEach(element => {
            newTotal += element.props.state.price * element.props.state.number
        });
        setTotal(newTotal)
    }, [children])
    let handleClick = (e) =>{
        if( total > argent ){
            e.target.innerText = "pas Assez d'argent"
        } else {
            e.target.innerText = "merci pour votre achat"
            onButtonBuyClick(total)
        }
    }
    console.log(children)
    return (
        <div>
            <h1>Panier</h1>
            <Container className='border'>
                {children}
                <h3>Total du panier{total}€</h3>
                <h4 onClick={(e)=>handleClick(e)}>acheter</h4>
                
            </Container>
        </div>
    )
}
