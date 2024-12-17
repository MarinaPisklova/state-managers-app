import { observer, useLocalObservable } from 'mobx-react-lite';
import styles from './App.module.css';
import store, { StoreContext, useStore } from './stores';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = observer(({ todos }: { todos: typeof store.todos }) => {
    const appUI = useLocalObservable(() => ({
        todosVisible: true,
        loading: false,
        toggleTodoVisibility() {
            this.todosVisible = !this.todosVisible;
        },
    }));

    return (
        <div className={styles.app}>
            <TodoInput />
            <div className={styles.wrapper}>
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

    return (
        <StoreContext.Provider value={store}>
            <App todos={todos} />
        </StoreContext.Provider>
    );
};

export { App };
export default AppWrapper;
