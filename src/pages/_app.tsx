import React from 'react';
import { AppProps } from 'next/app';

import { wrapper } from '../store/store';

const WrappedApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);
