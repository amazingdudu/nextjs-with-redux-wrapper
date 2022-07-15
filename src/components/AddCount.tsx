import React from 'react';
import { addCount } from '../store/counterSlice';

import { useAppSelector, useAppDispatch } from '../hooks';

const AddCount = () => {
    const count = useAppSelector(state => state.counter.count);
    const dispatch = useAppDispatch();

    return (
        <div>
            <style jsx>{`
                div {
                    padding: 0 0 20px 0;
                }
            `}</style>
            <h1>
                AddCount: <span>{count}</span>
            </h1>
            <button onClick={() => dispatch(addCount())}>Add To Count</button>
        </div>
    );
};

export default AddCount;
