import { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router';

const Albums = lazy(() => import('./Albums'));
const AlbumsDetails = lazy(() => import('./AlbumsDetails/AlbumsDetails'));

const queryClient = new QueryClient();

const App = () => {
    return (
        <Suspense fallback={<>loading...</>}>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <Routes>
                        <Route path="/" element={<Albums />} />
                        <Route path="/details/:id" element={<AlbumsDetails />} />
                    </Routes>
                </QueryClientProvider>
            </BrowserRouter>
        </Suspense>
    );
};

export default App;
