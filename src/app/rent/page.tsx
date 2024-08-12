import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
	title: 'Прокат сноубордов лыж и санок на горе Ай-Петри',
	description: 'Прокат зимнего снаряжения на горе Ай-Петри - сноуборды, лыжи, плюшки, санки, одежды и другое',
};

const RentPage: FC = () => (
	<main className='Main'>
		<h1 className='H1'>Прокат Снаряжения</h1>
	</main>
);

export default RentPage;
