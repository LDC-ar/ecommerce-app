import React from 'react';
import { aboutUs } from '../helpers/data';
import { RiCloseFill } from 'react-icons/ri';
import CardsUs from '../common/CardsUs';
import '../common/Modal.css';

const ModalUs = ({ showUs, onClose }) => {
	if (!showUs) {
		return null;
	}

	return (
		<div className="Wrapper">
			<div className="modal-us">
				<button
					onClick={onClose}
					className="btn-close"
				>
					<span>
						<RiCloseFill />
					</span>
				</button>
				<div className="content-us">
					{aboutUs.map(card => {
						return (
							<CardsUs
								key={card.id}
								src={card.image}
								nombre={card.nombre}
								link1={card.linkedIn}
								link2={card.github}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ModalUs;
