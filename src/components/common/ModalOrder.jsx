import React from 'react';
import { motion } from 'framer-motion';
import { RiCloseFill } from 'react-icons/ri';
import './Modal.css';

const ModalOrder = ({ show, onClose, productInfo }) => {
	if (!show) {
		return null;
	}

	const { title, imgModal } = productInfo;

	return (
		<div className="Wrapper">
			<div className="modal">
				<button
					onClick={onClose}
					className="btn-close"
				>
					<span>
						<RiCloseFill />
					</span>
				</button>
				<div className="modal-order-container">
					<img
						src={imgModal}
						alt={title}
						className="modal-order-image"
					/>
					<h3 className="modal-order-title">{title}</h3>
					<div className="modal-order-text">
						<p>Available soon!</p>
						<br></br>
						<p>Please leave us your email so we can send you a notification.</p>
					</div>
					<form className="modal-order-form">
						<input
							type="email"
							placeholder="Enter your email here"
							required
						></input>
						<motion.button
							type="submit"
							className="btn btnSubmit"
							whileTap={{ scale: 0.95, boxShadow: '0px' }}
						>
							Send
						</motion.button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ModalOrder;
