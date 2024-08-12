'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '../../../lib/store';
import { transferDataActions } from '@/lib/transfer/transferSlice';

export default function StoreProvider({ count, children }: { count?: number; children: React.ReactNode }) {
	const storeRef = useRef<AppStore | null>(null);

	if (!storeRef.current) {
		storeRef.current = makeStore();
		// можем обновить первоначальное значение через API
		storeRef.current.dispatch(transferDataActions.initializedTransferState(count));
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
}
