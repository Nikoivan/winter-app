'use client';

import { FC, useCallback, useState } from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

import Modal from '../Modal/Modal';
import Tabs, { TabProps } from '../Tabs/Tabs';

import './Order.scss';
import Transfer from '../Transfer/Transfer';
import OrderPrice from './Price/Order-Price';

const dataTabs: TabProps[] = [
	{ title: 'Трансфер', index: 0, content: <Transfer /> },
	{ title: 'Прокат', index: 1, content: '' },
	{ title: 'Доп услуги', index: 2, content: '' },
];

type OrderState = {
	isOpen: boolean;
};

const cnOrder = cn('Order');

const Order: FC<IClassNameProps> = ({ className }) => {
	const [data, setData] = useState<OrderState>({ isOpen: false });
	const { isOpen } = data;

	const openModal = useCallback(() => {
		setData((prev) => ({ ...prev, isOpen: true }));
	}, []);

	const closeModal = useCallback(() => {
		setData((prev) => ({ ...prev, isOpen: false }));
	}, []);

	return (
		<>
			<button
				className={cnOrder('Btn', [className])}
				onClick={openModal}>
				Сделать заказ
			</button>
			<Modal
				isOpen={isOpen}
				onClose={closeModal}>
				<div className={cnOrder('Container')}>
					<Tabs
						className={cnOrder('Tabs')}
						tabs={dataTabs}
					/>
					<OrderPrice />
				</div>
			</Modal>
		</>
	);
};

export default Order;
