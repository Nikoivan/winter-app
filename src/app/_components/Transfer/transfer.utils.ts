import { Cities } from '@/lib/transfer/transferTypes';

type PropertyOption = {
	title: string;
	value: string;
};

export const baseCities = [
	{ title: 'Симферополь', value: Cities.SIMF },
	{ title: 'Севастополь', value: Cities.SEVAS },
	{ title: 'Бахчисарай', value: Cities.BAKH },
	{ title: 'Ялта', value: Cities.YALTA },
	{ title: 'Алушта', value: Cities.ALUSHTA },
	{ title: 'Другой', value: Cities.OTHER },
];

export default function getPlacesOptions(count: number): PropertyOption[] {
	const arr: PropertyOption[] = [];

	for (let i = 1; i <= count; i += 1) {
		arr.push({ title: String(i), value: String(i) });
	}

	return arr;
}

export function getPriceByCarSize(carSize: '4' | '6' | '7'): number {
	switch (carSize) {
		case '4':
			return 10000;
		case '6':
			return 11000;
		case '7':
			return 13000;
		default:
			return 12000;
	}
}
