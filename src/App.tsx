import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import MainPage from './shared/components/MainPage';
import { modulesConfig } from './modules';

const App = () => {
    return (
        <Suspense fallback={<>loading...</>}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    {modulesConfig.map(({ name, path, component }) => (
                        <Route key={name} path={path + '/*'} element={component} />
                    ))}
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};

export default App;
