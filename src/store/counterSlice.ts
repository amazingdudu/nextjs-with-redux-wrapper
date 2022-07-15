import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export const slice = createSlice({
    name: 'countSlice',
    initialState: {
        count: 0
    },
    reducers: {
        addCount: state => {
            state.count += 1;
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                count: state.count ? state.count : action.payload.counter.count
            };
        }
    }
});

export const { addCount } = slice.actions;

export default slice.reducer;
