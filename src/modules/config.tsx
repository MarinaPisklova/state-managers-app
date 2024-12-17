import { lazy } from 'react';

const AlbumsApp = lazy(() => import('./AlbumsApp/App'));
const ToDoApp = lazy(() => import('./ToDoApp/App'));

export const modulesConfig = [
    {
        name: 'ToDo App',
        path: '/todos',
        stack: 'React, MobX',
        component: <ToDoApp />,
    },
    {
        name: 'Albums App',
        path: '/albums',
        stack: 'React, MobX, React Query',
        component: <AlbumsApp />,
    },
];
