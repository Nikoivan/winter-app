import { FC, PropsWithChildren } from 'react';
import { cn } from '@bem-react/classname';

import './Header.scss';

export type HeaderProps = {
	title: string;
} & PropsWithChildren;

const cnHeader = cn('Header');

const Header: FC<HeaderProps> = ({ title, children }) => {
	return (
		<header className={cnHeader()}>
			<h1 className={cnHeader('Title')}>{title}</h1>
			{children}
		</header>
	);
};

export default Header;
