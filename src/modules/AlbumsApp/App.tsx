import { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router';
import store, { StoreContext } from './stores';
import styles from './App.module.css';

const Albums = lazy(() => import('./components/Albums'));
const AlbumsDetails = lazy(() => import('./components/AlbumsDetails/AlbumsDetails'));

const queryClient = new QueryClient();

const App = () => {
    return (
        <Suspense fallback={<>loading...</>}>
            <StoreContext.Provider value={store}>
                <QueryClientProvider client={queryClient}>
                    <div className={styles.app}>
                        <Routes>
                            <Route path="/" element={<Albums />} />
                            <Route path="/:id" element={<AlbumsDetails />} />
                        </Routes>
                    </div>
                </QueryClientProvider>
            </StoreContext.Provider>
        </Suspense>
    );
};

export default App;
