import { FC } from 'react';
import { cn } from '@bem-react/classname';
import Link from 'next/link';

import './Nav.scss';
import Menu from '../Menu/Menu';

const menuList = [
	{
		title: 'Трансфер',
		href: '/',
	},
	{
		title: 'Прокат',
		href: '/transfer',
	},
	{
		title: 'Полезное',
		href: '/helpful',
	},
	{
		title: 'Отзывы',
		href: '/contacts',
	},
	{
		title: 'Контакты',
		href: '/contacts',
	},
];

const cnNav = cn('Nav');

const Nav: FC = () => (
	<nav className={cnNav()}>
		<div className={cnNav('LogoRoot')}>
			<Link href='/'>LOGO</Link>
		</div>
		<ul className={cnNav('MenuList', { type: 'desktop' }, ['List'])}>
			<li className={cnNav('MenuItem')}>
				<Link href='/transfer'>Трансфер</Link>
			</li>
			<li className={cnNav('MenuItem')}>
				<Link href='/rent'>Прокат</Link>
			</li>
			<li className={cnNav('MenuItem')}>
				<Link href='/helpful'>Полезное</Link>
			</li>
			<li className={cnNav('MenuItem')}>
				<Link href='/feedbacks'>Отзывы</Link>
			</li>
			<li className={cnNav('MenuItem')}>
				<Link href='/contacts'>Контакты</Link>
			</li>
		</ul>
		<Menu menuList={menuList} />
	</nav>
);

export default Nav;
