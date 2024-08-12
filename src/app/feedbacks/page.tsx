import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
	title: 'Поездки и трансфер на Ай-Петри отзывы',
	description: 'Отзывы о компании Energy-Tour во всех доступных ресурсах сети интернет',
};

const FeedBacksPage: FC = () => (
	<main className='Main'>
		<h1 className='H1'>Отзывы</h1>
	</main>
);

export default FeedBacksPage;
