import React from 'react'
import "./Modal.css";


const ModalSearch = ({showSearch, onClose}) => {
  if (!showSearch) {
		return null;
	}

  return (
    <div className='Wrapper-src'>
      <div className='modal-src'>
      <button onClick={onClose} className="btn-close-src">
					<span>X</span>
				</button>
        <div className='search'>
          <input type="text" placeholder='What are you looking for?' />
        </div>
      </div>
    </div>
  )
}

export default ModalSearch