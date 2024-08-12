import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { transferDataSlice } from './transfer/transferSlice';

const rootReducer = combineSlices(transferDataSlice);

export const makeStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
