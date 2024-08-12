import { FC } from 'react';
import { Metadata } from 'next';
import { cn } from '@bem-react/classname';

import { PostProps } from '../_components/Post/Post';
import Link from 'next/link';

const cnHelpful = cn('Helpful');

const errorText = 'Не удалось получить список постов';

export const metadata: Metadata = {
	title: 'Полезная информация о поездках на Ай-Петри',
	description: 'Полезные статьи о поездках и трансфере на Ай-Петри.',
};

async function getData(): Promise<PostProps[]> {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
			next: {
				revalidate: 60,
			},
		});

		if (!response || response.status >= 300) {
			throw new Error(errorText);
		}

		return await response.json();
	} catch {
		throw new Error(errorText);
	}
}

const HelpFulPage: FC = async () => {
	const posts = await getData();

	return (
		<main className='Main'>
			<div className={cnHelpful()}>
				<h1 className='H1'>Полезные статьи</h1>
				<ul className='List'>
					{posts.map((post) => (
						<li
							className={cnHelpful('Post')}
							key={post.id}>
							<Link href={`/helpful/${post.id}`}>{post.title}</Link>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
};

export default HelpFulPage;
