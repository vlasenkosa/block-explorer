import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ThemeProvider  from 'arui-feather/theme-provider';

import Heading from 'arui-feather/heading';

import { SearchBlock } from './components/search-block';
import { TitleBlock } from './components/title-block';
import { MainBlock } from './components/main-block';
import { TransactionsBlock } from './components/transactions-block';
import { NavigationBlock } from './components/navigation-block';

import { fetchTicker } from './actions/ticker';

import { blockchainDataSelector, searchErrorMessageSelector } from './selectors/blockchain';

import styles from './app.module.css';
import {Paragraph} from "arui-feather/paragraph";

type AppProps = unknown;

const App: React.FC<AppProps> = () => {
    const put = useDispatch();
    const blockData = useSelector(blockchainDataSelector);
    const searchErrorMessage = useSelector(searchErrorMessageSelector);

    useEffect(() => {
        put(fetchTicker.request());
    }, [])

    return (
        <ThemeProvider theme="alfa-on-white">
            <div className={styles.app}>
                <header>
                    <Heading>Bitcoin block explorer</Heading>
                </header>
                <main>
                    <SearchBlock/>
                    {
                        Boolean(blockData) && (
                            <>
                                <TitleBlock/>
                                <MainBlock/>
                                <TransactionsBlock/>
                                <NavigationBlock/>
                            </>
                        )
                    }
                    {
                        Boolean(searchErrorMessage) && (
                            <Paragraph view="lead">
                                {searchErrorMessage}
                            </Paragraph>
                        )
                    }
                </main>
            </div>
        </ThemeProvider>
    );
}

export default App;
