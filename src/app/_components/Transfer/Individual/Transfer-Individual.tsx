'use client';

import { BaseSyntheticEvent, FC, memo, useCallback } from 'react';
import { cn } from '@bem-react/classname';
import { IndividualNames } from '@/lib/transfer/transferTypes';
import { isEnumValue } from '@/app/_helpers/typeGuards';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { transferDataActions } from '@/lib/transfer/transferSlice';
import Checkbox from '../../Checkbox/Checkbox';
import InfoIcon from '../../Icons/InfoIcon';

const carSizes = [
	{ title: '4-х местное', value: '4' },
	{ title: '6-ти местное', value: '6' },
	{ title: '7-ми местное', value: '7' },
];

const cnTransfer = cn('Transfer');

const TransferIndividualFC: FC = () => {
	const {
		individual: { carSize, needFromAddress },
	} = useAppSelector((state) => state.transferData);
	const dispatch = useAppDispatch();

	const handleChange = useCallback(
		(e: BaseSyntheticEvent) => {
			const { name, value } = e.target;

			if (!isEnumValue(IndividualNames, name)) {
				return;
			}
			if (name === IndividualNames.FROM_ADDRESS) {
				dispatch(transferDataActions.changeIndividualState({ name, value: !needFromAddress }));
			} else {
				dispatch(transferDataActions.changeIndividualState({ name, value }));
			}
		},
		[dispatch, needFromAddress]
	);

	return (
		<div className={cnTransfer('Individual')}>
			<label
				className={cnTransfer('Label')}
				htmlFor='carSize'>
				Вместимость авто
				<select
					className={cnTransfer('Select')}
					name={IndividualNames.CAR_SIZE}
					id={IndividualNames.CAR_SIZE}
					value={carSize}
					onChange={handleChange}>
					{carSizes.map(({ title, value }, idx) => (
						<option
							className={cnTransfer('Option')}
							value={value}
							key={idx}>
							{title}
						</option>
					))}
				</select>
			</label>
			<label
				className={cnTransfer('Label')}
				htmlFor={IndividualNames.FROM_ADDRESS}>
				Дополнительная услуга забрать с адреса <InfoIcon fontSize={20} />
				<Checkbox
					className={cnTransfer('Checkbox')}
					id={IndividualNames.FROM_ADDRESS}
					name={IndividualNames.FROM_ADDRESS}
					checked={needFromAddress}
					onChange={handleChange}
				/>
			</label>

			{needFromAddress && (
				<label
					className={cnTransfer('Label')}
					htmlFor={IndividualNames.ADDRESS}>
					Адрес
					<input
						className={cnTransfer('Input')}
						name={IndividualNames.ADDRESS}
						id={IndividualNames.ADDRESS}
						onChange={handleChange}
					/>
				</label>
			)}
		</div>
	);
};

const TransferIndividual = memo(TransferIndividualFC);

export default TransferIndividual;
