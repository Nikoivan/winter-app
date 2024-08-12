'use client';

import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { cn } from '@bem-react/classname';

import './Modal.scss';

type ModalProps = {
	isOpen: boolean;
	onClose: (e: unknown) => void;
} & PropsWithChildren;

const cnModal = cn('Modal');

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
	const [isVisible, setVisible] = useState(isOpen);

	useEffect(() => {
		const body = document.querySelector('body');

		if (!body) {
			return;
		}

		if (!isOpen) {
			setTimeout(() => {
				setVisible(false);
				body.classList.remove('noscroll');
			}, 500);
			return;
		}
		setVisible(true);
		body.classList.add('noscroll');
	}, [isOpen]);

	return (
		<>
			{isVisible && (
				<div
					className={cnModal()}
					onClick={onClose}>
					<div
						className={cnModal('Content', { active: isOpen })}
						onClick={(e) => e.stopPropagation()}>
						{children}
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
