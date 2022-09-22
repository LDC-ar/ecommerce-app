import React from 'react';
import'./Cards.css';
import ButtonBuy from "./ButtonBuy";
import { textButton } from "../helpers/data";
import ButtonInfo from "./ButtonInfo";

function Cards({src, title, condition, description, price}){
  return(
    <div className='container-card'>
      <div className='card-image'>
        <img 
        src={src}
        alt={title} 
        width="90%" 
        height="150em" />
      </div>
      <div className='card-description'>
        <p className='new'>{condition}</p>
        <p className='nombre'>{title}</p>
        <p className='caract'>{description}</p>
        <p className='precio'>{price}</p>
        <ButtonBuy>{textButton.textoDos}</ButtonBuy>
        <ButtonInfo />
      </div>
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