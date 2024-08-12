'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { transferDataActions } from '@/lib/transfer/transferSlice';
import { SelectedTypes } from '@/lib/transfer/transferTypes';
import { cn } from '@bem-react/classname';
import { BaseSyntheticEvent, FC, memo, useCallback } from 'react';

const cnTransfer = cn('Transfer');

const TransferTypeSelectComp: FC = () => {
	const { selectedType } = useAppSelector((state) => state.transferData);
	const dispatch = useAppDispatch();

	const handleSelectType = useCallback(
		(e: BaseSyntheticEvent) => {
			const { name } = e.target;

			dispatch(transferDataActions.selectType({ type: name }));
		},
		[dispatch]
	);

	return (
		<div className={cnTransfer('Wrap')}>
			<div className={cnTransfer('FormRow')}>
				<label
					htmlFor='group'
					className={cnTransfer('Label')}>
					Групповой
					<input
						className={cnTransfer('Input', { type: 'checkbox' })}
						name={SelectedTypes.GROUP}
						id='group'
						type='checkbox'
						checked={selectedType === 'group'}
						onChange={handleSelectType}
					/>
				</label>
			</div>
			<div className={cnTransfer('FormRow')}>
				<label
					htmlFor='individual'
					className={cnTransfer('Label')}>
					Индивидуальный
					<input
						className={cnTransfer('Input', { type: 'checkbox' })}
						name={SelectedTypes.INDIVIDUAL}
						id='individual'
						type='checkbox'
						checked={selectedType === 'individual'}
						onChange={handleSelectType}
					/>
				</label>
			</div>
		</div>
	);
};

const TransferTypeSelect = memo(TransferTypeSelectComp);

export default TransferTypeSelect;
