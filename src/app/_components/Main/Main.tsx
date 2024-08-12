import { FC, PropsWithChildren, ReactNode } from 'react';
import { cn } from '@bem-react/classname';

import './Main.scss';

export type ContentProps = {
	tag: string;
	content: string;
	id: string;
};

type MainProps = {
	content?: ContentProps[] | ReactNode[];
} & PropsWithChildren;

const cnMain = cn('Main');

const Main: FC<MainProps> = ({ children }) => (
	<main className={cnMain()}>
		<h2>Основной контент</h2>
		{children}
	</main>
);

export default Main;
