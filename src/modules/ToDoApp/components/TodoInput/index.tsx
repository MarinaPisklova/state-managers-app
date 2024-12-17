import { FormEvent } from 'react';
import styles from './TodoInput.module.css';
import { useStore } from '../../stores';

const TodoInput = () => {
    const { todos } = useStore();
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const formElement = e.target as HTMLFormElement;
        const formData = new FormData(formElement);
        const value = String(formData.get('todo-input') || '');

        todos.add(value);
        formElement.reset();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.input}>
            <input name="todo-input" placeholder="Сходить в магазин..." />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default TodoInput;
