import { useEffect } from 'react';

import Page from '../components/Page';
import { addCount } from '../store/counterSlice';
import { wrapper } from '../store/store';
import { serverRenderClock, startClock } from '../store/tickSlice';

import { useAppDispatch, useAppSelector } from '../hooks';

const Index = () => {
    const tick = useAppSelector(state => state.tick);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const timer = dispatch(startClock());

        return () => {
            clearInterval(timer);
        };
    }, []);

    return <Page title="Index Page" linkTo="/other" tick={tick} />;
};

export const getStaticProps = wrapper.getStaticProps(store => async () => {
    store.dispatch(serverRenderClock(true));
    store.dispatch(addCount());

    return {
        props: {}
    };
});

export default Index;
