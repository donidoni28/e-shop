import { useEffect, useReducer, useState } from 'react';
import './App.css';
import data from './components/data.json'
import ProductComponent from './components/ProductComponent';
import CartComponent from './components/CartComponent'

import 'bootstrap/dist/css/bootstrap.min.css';
import CartItem from './components/CartItem';


function App() {
  let [argent, setArgent] = useState(20)
  let [state, setState] = useState(data.products)
  let [cartState,setStateCart] = useState()

  let handleClickMinus = (i) => {
    if(state[i].stock > 0){
      let newState = [...state]
      newState[i].stock -=1
      newState[i].number += 1
      setState(newState)
    }
  }
  let handleClickPlus = (i) => {
    if(state[i].number > 0){
      let newState = [...state]
      newState[i].stock +=1
      newState[i].number -= 1
      setState(newState)
    }
  }

  let products = state.map((product, i) => {
    return <ProductComponent key={i} id={i} product={product} onButtonClick={handleClickMinus} />
  })

  useEffect(()=>{
    let newCartState = []
    state.forEach((el,i)=>{
      // console.log(el.number);
      if(el.number>0){
        console.log(el,true);
        newCartState = [
          ...newCartState,
          <CartItem key={i} id={i} state={el} onButtonClick={handleClickPlus} />
        ]
      } 
      setStateCart(newCartState)
    })
    
  },[state])
  let handleBuy = (total) =>{
    setArgent(argent-=total)
    setStateCart([])
  }

  console.log(cartState)

  // console.log(state)
  return (
    <div className="App">
      <div>{argent}€</div>
      <div className='d-flex justify-content-center'>
        {products}
      </div>
      <div>
        <CartComponent onButtonBuyClick={handleBuy} argent={argent}>
          {
            cartState
          }
        </CartComponent>
      </div>
    </div>
  );
}

export default App;
