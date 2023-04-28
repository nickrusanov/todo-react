import { RiSurveyLine, RiDeleteBinLine, RiCheckLine } from 'react-icons/ri';
import './Todo.css';
import TodoButton from '../TodoButton/TodoButton';

function Todo({ todo, removeTodo, completeTodo }) {

	return (
		<li className={`todo__item${todo.isCompleted ? ' todo__item--completed' : ''}`}>
			<RiSurveyLine className="todo__item-icon" />

			<p className="todo__item-title">{todo.name}</p>

			<TodoButton id={todo.id} onClick={removeTodo}>
				<RiDeleteBinLine className='todo__item-btn-icon todo__item-btn-icon--remove' />
			</TodoButton>

			<TodoButton id={todo.id} onClick={completeTodo}>
				<RiCheckLine className='todo__item-btn-icon todo__item-btn-icon--complete' />
			</TodoButton>
		</li>
	);
}

export default Todo;