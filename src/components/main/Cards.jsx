import React from 'react';
import'./Cards.css';
import ButtonBuy from "./ButtonBuy";
import { textButton, cardsInfo } from "../helpers/data";
import ButtonInfo from "./ButtonInfo";

function Cards(){
  return(
    <div className='container-cards'>
      <img 
      className='imagen-cards' 
      src={require("../images/ipad-air.png")}
      alt="" 
      width="auto" 
      height="150em" />
      <p className='new'>new</p>
      <p className='nombre'>{cardsInfo[9].title}</p>
      <p className='caract'>{cardsInfo[9].description}</p>
      <p className='precio'>{cardsInfo[9].price}</p>
      <ButtonBuy>{textButton.textoDos}</ButtonBuy>
      <ButtonInfo />
    </div>
  )
}




// const cards = () => {
//   return (   
//     <div className='card'>
//         <figure>
//           <img src={celus.img} alt="150" width="150"/>
//           <h3></h3>
//         <button></button>
//         </figure>    
//     </div>
    
//   )
// }

export default Cards  