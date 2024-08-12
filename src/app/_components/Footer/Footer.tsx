import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Footer.scss';

const cnFooter = cn('Footer');

const Footer: FC = () => (
	<footer className={cnFooter()}>
		<h3 className={cnFooter('Title')}>Создано и разработано NiKo Studio</h3>
	</footer>
);

export default Footer;
