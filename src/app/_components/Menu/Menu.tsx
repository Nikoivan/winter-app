'use client';

import { FC, useState } from 'react';
import { cn } from '@bem-react/classname';
import Link from 'next/link';

import IconButton from '../IconButton/IconButton';

import './Menu.scss';

export type MenuProps = {
	menuList: { title: string; href: string }[];
};

const cnMenu = cn('Menu');

const Menu: FC<MenuProps> = ({ menuList }) => {
	const [isOpen, setOpen] = useState<boolean>(false);

	const onClick = () => {
		console.log('onClick');

		setOpen(!isOpen);
	};

	return (
		<>
			<div className={cnMenu()}>
				<IconButton
					className={cnMenu('Hamb', { opened: isOpen })}
					onClick={onClick}>
					{isOpen ? (
						<span className={cnMenu('HambBar')}>Х</span>
					) : (
						<>
							<span className={cnMenu('HambBar')}></span>
							<span className={cnMenu('HambBar')}></span>
							<span className={cnMenu('HambBar')}></span>
						</>
					)}
				</IconButton>

				{isOpen && (
					<ul className={cnMenu('List', ['List'])}>
						{menuList.map(({ title, href }, idx) => (
							<li
								className={cnMenu('Item')}
								key={idx}>
								<Link href={href}>{title}</Link>
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
};

export default Menu;
