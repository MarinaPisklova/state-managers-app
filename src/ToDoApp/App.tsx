import { observer, useLocalObservable } from 'mobx-react-lite';
import styles from './App.module.css';
import store, { useStore } from './stores';
import TodoInput from './ToDo/TodoInput';
import TodoList from './ToDo/TodoList';

const App = observer(({ todos }: { todos: typeof store.todos }) => {
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
});

const AppWrapper = () => {
    const { todos } = useStore();

    return <App todos={todos} />;
};

export { App };
export default AppWrapper;
