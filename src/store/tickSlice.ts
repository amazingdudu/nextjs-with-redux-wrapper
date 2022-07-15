import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import type { AppThunk } from './store';

export const slice = createSlice({
    name: 'tickSlice',
    initialState: {
        lastUpdate: 0,
        light: false
    },
    reducers: {
        serverRenderClock: (state, action: PayloadAction<boolean>) => {
            state.light = !action.payload;
            state.lastUpdate = Date.now();
        },
        tick: state => {
            state.light = true;
            state.lastUpdate = Date.now();
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.tick
            };
        }
    }
});

export const { serverRenderClock, tick } = slice.actions;

export const startClock = (): AppThunk<ReturnType<typeof setInterval>> => dispatch => {
    return setInterval(() => {
        dispatch(tick());
    }, 1000);
};

export default slice.reducer;
