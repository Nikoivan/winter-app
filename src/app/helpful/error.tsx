'use client';

import { FC } from 'react';

const ErrorHelpful: FC<{ error: Error }> = ({ error }) => (
	<div className='Error'>
		<h1 className='H1'>Что-то пошло не так. Попробуйте снова</h1>
		<span className='Error-Message'>{error.message}</span>
	</div>
);

export default ErrorHelpful;
