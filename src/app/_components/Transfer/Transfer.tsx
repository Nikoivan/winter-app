'use client';

import { FC, useCallback, BaseSyntheticEvent } from 'react';
import { cn } from '@bem-react/classname';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { transferDataActions } from '@/lib/transfer/transferSlice';
import { SelectedTypes } from '@/lib/transfer/transferTypes';
import TransferTypeSelect from './TypeSelect/Transfer-TypeSelect';
import TransferFormMain from './FormMain/Transfer-FormMain';
import TransferGroup from './Group/Transfer-Group';

import './Transfer.scss';
import TransferIndividual from './Individual/Transfer-Individual';

const cnTransfer = cn('Transfer');

const Transfer: FC = () => {
	const { selectedType, info } = useAppSelector((state) => state.transferData);
	const dispatch = useAppDispatch();

	const handleValueChange = useCallback(
		(e: BaseSyntheticEvent) => {
			const { value, name } = e.target;

			if (name === 'info' && typeof value === 'string') {
				dispatch(transferDataActions.changeStringValue({ name, value }));
			}
		},
		[dispatch]
	);

	return (
		<div className={cnTransfer()}>
			<h3 className={cnTransfer('Title')}>Трансфер</h3>
			<form className={cnTransfer('Form')}>
				<div className={cnTransfer('FormBlock')}>
					<h4 className={cnTransfer('RowTitle')}>Тип поездки</h4>
					<TransferTypeSelect />
				</div>
				<div className={cnTransfer('FormBlock')}>
					<TransferFormMain />
					{selectedType === SelectedTypes.GROUP && <TransferGroup />}
					{selectedType === SelectedTypes.INDIVIDUAL && <TransferIndividual />}
					<label
						htmlFor='info'
						className={cnTransfer('Label')}>
						Дополнительная инфомация
						<textarea
							className={cnTransfer('TextArea')}
							name='info'
							id='info'
							value={info}
							onChange={handleValueChange}
						/>
					</label>
				</div>
			</form>
		</div>
	);
};

export default Transfer;
