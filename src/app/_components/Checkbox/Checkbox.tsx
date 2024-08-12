'use client';

import { BaseSyntheticEvent, FC, memo } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

type CheckboxProps = {
	checked: boolean;
	name: string;
	id?: string;
	onChange: (e: BaseSyntheticEvent) => void;
} & IClassNameProps;

const cnCheckbox = cn('Checkbox');

const CheckboxComp: FC<CheckboxProps> = ({ checked, name, id, className, onChange }) => (
	<input
		type='checkbox'
		className={cnCheckbox(null, [className])}
		checked={checked}
		name={name}
		id={id}
		onChange={onChange}
	/>
);

const Checkbox = memo(CheckboxComp);

export default Checkbox;
