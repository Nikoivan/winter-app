import { PostProps } from '@/app/_components/Post/Post';
import { Metadata } from 'next';
import { FC } from 'react';

const errorText = 'Не удалось получить список постов';

type Props = {
	params: {
		id: string;
	};
};

async function getData(id: string): Promise<PostProps> {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
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

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
	return await { title: id };
}

const PostPage: FC<Props> = async ({ params: { id } }) => {
	const { title, body } = await getData(id);

	return (
		<main className='Main'>
			<h1 className='H1'>{title}</h1>
			<p className='Paragraph'>{body}</p>
		</main>
	);
};

export default PostPage;
