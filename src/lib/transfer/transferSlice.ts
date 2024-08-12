import { createSlice } from '@reduxjs/toolkit';
import {
	CarSizes,
	ChangeCityAction,
	ChangeGroupStateAction,
	ChangeIndividualStateAction,
	ChangePhoneAction,
	ChangeStringValueAction,
	Cities,
	SelectedTypes,
	SelectTypeAction,
	TransferState,
} from './transferTypes';

const initialState: TransferState = {
	selectedType: SelectedTypes.GROUP,
	userName: '',
	telephone: '',
	city: Cities.SIMF,
	group: {
		seatsCount: '1',
		childrenSeatsCount: '',
		isChildrenSeats: false,
		needSafetyChildSeat: false,
	},
	individual: { carSize: CarSizes.FOUR, needFromAddress: false, address: '' },
	info: '',
	errors: {
		phone: false,
	},
};

export const transferDataSlice = createSlice({
	name: 'transferData',
	initialState,
	reducers: {
		//добавить типизацию
		initializedTransferState: (state, action) => {
			if (!action.payload) {
				return;
			}

			state = { ...state, ...action.payload };
		},
		selectType: (state, action: SelectTypeAction) => {
			state.selectedType = action.payload.type;
		},
		changeGroupState: (state, action: ChangeGroupStateAction) => {
			const { name, value } = action.payload;

			state.group = { ...state.group, [name]: value };
		},
		changeStringValue: (state, action: ChangeStringValueAction) => {
			const { name, value } = action.payload;

			state[name] = value;
		},
		changePhone: (state, action: ChangePhoneAction) => {
			const { value } = action.payload;
			//add validation
			state.telephone = value;
		},
		changeCity: (state, action: ChangeCityAction) => {
			state.city = action.payload.city;
		},
		changeIndividualState: (state, action: ChangeIndividualStateAction) => {
			const { name, value } = action.payload;

			state.individual = { ...state.individual, [name]: value };
		},
	},
});

export const transferDataActions = transferDataSlice.actions;
