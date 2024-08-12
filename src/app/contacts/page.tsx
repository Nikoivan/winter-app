import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
	title: 'Поездки на Ай-Петри контакты, телефон',
	description: 'Контактная информация для организации поездок на Ай-Петри',
};

const ContactsPage: FC = () => (
	<main className='Main'>
		<h1 className='H1'>Контакты</h1>
	</main>
);

export default ContactsPage;
