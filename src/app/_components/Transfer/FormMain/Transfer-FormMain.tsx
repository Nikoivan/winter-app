'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { cn } from '@bem-react/classname';
import { BaseSyntheticEvent, FC, memo, useCallback } from 'react';
import { baseCities } from '../transfer.utils';
import { transferDataActions } from '@/lib/transfer/transferSlice';
import { isEnumValue } from '@/app/_helpers/typeGuards';
import { Cities } from '@/lib/transfer/transferTypes';

const cnTransfer = cn('Transfer');

const TransferFormMainComp: FC = () => {
	const { userName, telephone, city } = useAppSelector((state) => state.transferData);
	const dispatch = useAppDispatch();

	const handleValueChange = useCallback(
		(e: BaseSyntheticEvent) => {
			const { value, name } = e.target;

			if (name === 'city' && isEnumValue(Cities, value)) {
				dispatch(transferDataActions.changeCity({ city: value }));
			} else if (name === 'userName' && typeof value === 'string') {
				dispatch(transferDataActions.changeStringValue({ name, value }));
			} else if (name === 'telephone' && typeof value === 'string') {
				dispatch(transferDataActions.changePhone({ value }));
			}
		},
		[dispatch]
	);

	return (
		<div className={cnTransfer('FormMain')}>
			<label
				htmlFor='userName'
				className={cnTransfer('Label')}>
				Ваше имя *
				<input
					className={cnTransfer('Input')}
					type='text'
					name='userName'
					id='userName'
					value={userName}
					onChange={handleValueChange}
				/>
			</label>
			<label
				htmlFor='telephone'
				className={cnTransfer('Label')}>
				Контактный телефон *
				<input
					className={cnTransfer('Input')}
					name='telephone'
					id='telephone'
					type='text'
					value={telephone}
					onChange={handleValueChange}
				/>
			</label>
			<label
				htmlFor='city'
				className={cnTransfer('Label')}>
				Из какого вы города
				<select
					className={cnTransfer('Select')}
					name='city'
					id='city'
					value={city}
					onChange={handleValueChange}>
					{baseCities.map(({ title, value }) => (
						<option
							className={cnTransfer('Option')}
							value={value}
							key={value}>
							{title}
						</option>
					))}
				</select>
			</label>
		</div>
	);
};

const TransferFormMain = memo(TransferFormMainComp);

export default TransferFormMain;
