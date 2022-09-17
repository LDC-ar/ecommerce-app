import React from 'react'
import "./Buttons.css"



const ButtonBuy = (props) => {
  return (
    <button className='btn btnCH btnBuy'>{props.children}</button>
  )
}

export default ButtonBuy
