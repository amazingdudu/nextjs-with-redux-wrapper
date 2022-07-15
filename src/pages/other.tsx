import { useEffect } from 'react';
import Page from '../components/Page';
import { addCount } from '../store/counterSlice';
import { wrapper } from '../store/store';
import { serverRenderClock, startClock } from '../store/tickSlice';

import { useAppDispatch, useAppSelector } from '../hooks';

const Other = () => {
    const tick = useAppSelector(state => state.tick);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const timer = dispatch(startClock());

        return () => {
            clearInterval(timer);
        };
    }, []);

    return <Page title="Other Page" linkTo="/" tick={tick} />;
};

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
    console.log(store.getState(), 'other');

    store.dispatch(serverRenderClock(true));
    store.dispatch(addCount());

    return {
        props: {}
    };
});

export default Other;
