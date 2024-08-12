import { FC } from 'react';
import { cn } from '@bem-react/classname';

export type PostProps = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

const cnPost = cn('Post');

const Post: FC<PostProps> = ({ userId, id, title, body }) => (
	<li className={cnPost()}>
		<h3 className={cnPost('Title')}>{title}</h3>
		<p className={cnPost('Text')}>{body}</p>
	</li>
);

export default Post;
