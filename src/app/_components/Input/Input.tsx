'use client';

import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

const cnInput = cn('Input');

type InputProps = {
	type: 'text' | 'checkbox';
	value: 'string | number | readonly string[] | undefined';
} & IClassNameProps;

const Input: FC<InputProps> = ({ type, value }) => {
	return (
		<input
			type={type}
			className={cnInput()}
			value={value}
		/>
	);
};

export default Input;
