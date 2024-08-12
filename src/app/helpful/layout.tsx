import Link from 'next/link';
import { FC, PropsWithChildren, ReactNode } from 'react';

const HelpFulLayout: FC<PropsWithChildren> = ({ children }) => (
	<div className='Hepful-Layout'>
		<ul className='List'>
			<li>
				<Link href='/helpful/mainposts'>Основные посты</Link>
			</li>
			<li>
				<Link href='/helpful/asideposts'>Дополнительные посты</Link>
			</li>
		</ul>
		{children}
	</div>
);

export default HelpFulLayout;
