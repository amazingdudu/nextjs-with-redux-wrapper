import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';

import counterSlice from './counterSlice';
import tickSlice from './tickSlice';

const makeStore = () =>
    configureStore({
        reducer: {
            counter: counterSlice,
            tick: tickSlice
        }
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>;

export const wrapper = createWrapper<AppStore>(makeStore);
