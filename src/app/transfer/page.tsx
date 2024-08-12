import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
	title: 'Трансфер на Ай-Петри из Симферополя Севастоля Ялты и других городов Крыма',
	description:
		'Организация авто трансфера к вершине горы Ай-Петри из городов Крыма. Симферополя, Севастополя, Ялты, Алушты, Бахчисарая и других',
};

const TransferPage: FC = () => (
	<main className='Main'>
		<h1 className='H1'>Трансфер</h1>
	</main>
);

export default TransferPage;
