'use client';

import { FC, memo, useMemo } from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import { useAppSelector } from '@/lib/hooks';
import { Cities, SelectedTypes } from '@/lib/transfer/transferTypes';
import { getPriceByCarSize } from '../../Transfer/transfer.utils';

type PriceProps = IClassNameProps;

const cnOrder = cn('Order');

const OrderPriceFC: FC<PriceProps> = ({ className }) => {
	const {
		selectedType,
		city,
		group: { seatsCount },
		individual: { carSize, needFromAddress },
	} = useAppSelector((state) => state.transferData);

	const price = useMemo(() => {
		console.log(seatsCount);

		return selectedType === SelectedTypes.GROUP
			? +seatsCount * 2000
			: getPriceByCarSize(carSize) + (needFromAddress ? 1000 : 0);
	}, [carSize, needFromAddress, seatsCount, selectedType]);

	return (
		<div className={cnOrder('Price')}>
			<h4 className={cnOrder('PriceTitle', [className])}>Цена</h4>
			{<span className={cnOrder('PriceValue')}>{city === Cities.OTHER ? 'Невозможно определить' : price} ₽</span>}
		</div>
	);
};

const OrderPrice = memo(OrderPriceFC);

export default OrderPrice;
