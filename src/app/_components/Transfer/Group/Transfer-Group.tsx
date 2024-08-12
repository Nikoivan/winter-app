'use client';

import { BaseSyntheticEvent, FC, memo, useCallback } from 'react';
import { cn } from '@bem-react/classname';

import InfoIcon from '../../Icons/InfoIcon';
import { GroupNames } from '@/lib/transfer/transferTypes';
import getPlacesOptions from '../transfer.utils';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Checkbox from '../../Checkbox/Checkbox';
import { isEnumValue } from '@/app/_helpers/typeGuards';
import { transferDataActions } from '@/lib/transfer/transferSlice';

const placesOptions = getPlacesOptions(12);

const cnTransfer = cn('Transfer');

const TransferGroupComp: FC = () => {
	const { group } = useAppSelector((state) => state.transferData);
	const dispatch = useAppDispatch();

	const handleStateChange = useCallback(
		(e: BaseSyntheticEvent) => {
			const { value, name } = e.target;

			if (isEnumValue(GroupNames, name)) {
				dispatch(transferDataActions.changeGroupState({ name, value }));
			}
		},
		[dispatch]
	);

	return (
		<div className={cnTransfer('Group')}>
			<div className={cnTransfer('Row')}>
				<label
					className={cnTransfer('Label')}
					htmlFor='seatsCount'>
					Количество пассажиров <InfoIcon fontSize={20} />
					<select
						className={cnTransfer('Select')}
						name={GroupNames.SEATS_COUNT}
						id='seatsCount'
						value={group.seatsCount}
						onChange={handleStateChange}>
						{placesOptions.map(({ title, value }) => (
							<option
								className={cnTransfer('Option')}
								value={value}
								key={value}>
								{title}
							</option>
						))}
					</select>
				</label>
				{group.isChildrenSeats && Number(group.seatsCount) > 1 && (
					<>
						<label
							className={cnTransfer('Label')}
							htmlFor='childrenSeatsCount'>
							Из них дети до 12 лет
							<select
								className={cnTransfer('Select')}
								name={GroupNames.CHILDREN_SEATS_COUNT}
								id='childrenSeatsCount'
								value={group.childrenSeatsCount}
								onChange={handleStateChange}>
								{getPlacesOptions(Number(group.seatsCount) - 1).map(({ title, value }) => (
									<option
										className={cnTransfer('Option')}
										value={value}
										key={value}>
										{title}
									</option>
								))}
							</select>
						</label>
					</>
				)}
			</div>
			<label
				htmlFor='isChildren'
				className={cnTransfer('Label')}>
				В группе есть дети до 12 лет
				<Checkbox
					className={cnTransfer('Input', { type: 'checkbox' })}
					checked={group.isChildrenSeats}
					name={GroupNames.IS_CHILDREN_SEATS}
					id='isChildren'
					onChange={handleStateChange}
				/>
			</label>
			{group.isChildrenSeats && (
				<>
					<label
						htmlFor='needSafetyChildSeat'
						className={cnTransfer('Label')}>
						Нужно детское кресло
						<Checkbox
							className={cnTransfer('Input', { type: 'checkbox' })}
							checked={group.needSafetyChildSeat}
							name={GroupNames.SAFETY_CHILD_SEAT}
							id='needSafetyChildSeat'
							onChange={handleStateChange}
						/>
					</label>
				</>
			)}
		</div>
	);
};

const TransferGroup = memo(TransferGroupComp);

export default TransferGroup;
