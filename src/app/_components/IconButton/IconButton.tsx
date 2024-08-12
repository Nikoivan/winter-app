'use client';

import { FC, PropsWithChildren } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import './IconButton.scss';
import { on } from 'events';

type IconButtonProps = {
	onClick?: (e: unknown) => void;
} & PropsWithChildren &
	IClassNameProps;

const cnIconButton = cn('IconButton');

const IconButton: FC<IconButtonProps> = ({ onClick, children, className }) => (
	<button
		onClick={onClick}
		className={cnIconButton(null, [className])}>
		{children}
	</button>
);

export default IconButton;
