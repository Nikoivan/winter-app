import { PayloadAction } from '@reduxjs/toolkit';

export enum SelectedTypes {
	GROUP = 'group',
	INDIVIDUAL = 'individual',
}

export enum GroupNames {
	CITY = 'city',
	SEATS_COUNT = 'seatsCount',
	CHILDREN_SEATS_COUNT = 'childrenSeatsCount',
	IS_CHILDREN_SEATS = 'isChildrenSeats',
	SAFETY_CHILD_SEAT = 'needSafetyChildSeat',
}

export enum IndividualNames {
	CAR_SIZE = 'carSize',
	FROM_ADDRESS = 'needFromAddress',
	ADDRESS = 'address',
}

export enum Cities {
	SIMF = 'simf',
	SEVAS = 'sev',
	BAKH = 'bakh',
	YALTA = 'yalta',
	ALUSHTA = 'alu',
	OTHER = 'other',
}

export type GroupState = {
	seatsCount: string;
	childrenSeatsCount: string;
	isChildrenSeats: boolean;
	needSafetyChildSeat: boolean;
};

export enum CarSizes {
	FOUR = '4',
	SIX = '6',
	SEVEN = '7',
}

export type IndividualState = {
	carSize: CarSizes;
	needFromAddress: boolean;
	address: string;
};

export type TransferState = {
	selectedType: SelectedTypes;
	userName: string;
	telephone: string;
	city: Cities;
	group: GroupState;
	individual: IndividualState;
	info: string;
	errors: {
		phone: boolean;
	};
};

export type SelectTypeAction = PayloadAction<{ type: SelectedTypes }>;
export type ChangeGroupStateAction = PayloadAction<{ name: GroupNames; value: string | boolean }>;
export type ChangeStringValueAction = PayloadAction<{ name: 'userName' | 'info'; value: string }>;
export type ChangePhoneAction = PayloadAction<{ value: string }>;
export type ChangeCityAction = PayloadAction<{ city: Cities }>;
export type ChangeIndividualStateAction = PayloadAction<{ name: IndividualNames; value: string | boolean }>;
