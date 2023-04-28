import { RiDeleteBinLine, RiRefreshLine } from 'react-icons/ri';
import TodoActionButton from "../TodoActionButton/TodoActionButton";
import './TodoListActions.css';

function TodoListActions({ removeCompletedTodo, removeAllTodo, todoCount }) {
	return (
		<div className='todo__actions'>
			<TodoActionButton onClick={removeAllTodo} title='Удалить все задачи'>
				<RiRefreshLine className='todo__actions-btn-icon' />
			</TodoActionButton>

			<TodoActionButton onClick={removeCompletedTodo} title='Удалить все завершённые задачи' disabled={todoCount === 0}>
				<RiDeleteBinLine className='todo__actions-btn-icon' />
			</TodoActionButton>
		</div>
	);
}

export default TodoListActions;