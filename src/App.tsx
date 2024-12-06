import TodoInput from './ToDo/TodoInput';
import TodoList from './ToDo/TodoList';
import styles from './App.module.css';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { useStore } from './stores';
import { useEffect } from 'react';
import { when } from 'mobx';

const App = () => {
    const { todos } = useStore();

    useEffect(() => {
        const promiseWhen = when(() => !appUI.todosVisible);

        promiseWhen.then(() => {
            console.log('clean up!');
        });
    }, []);

    const appUI = useLocalObservable(() => ({
        todosVisible: true,
        loading: false,
        toggleTodoVisibility() {
            this.todosVisible = !this.todosVisible;
        },
    }));

    return (
        <div className="app">
            <TodoInput />
            <div className={styles['todo-list-wrapper']}>
                <h2 onClick={appUI.toggleTodoVisibility}>
                    <span>{appUI.todosVisible ? '-' : '+'}</span>
                    Todos (unfinished {todos.unfinishedTodos.length})
                </h2>
                {appUI.todosVisible && <TodoList />}
            </div>
        </div>
    );
};

export default observer(App);
