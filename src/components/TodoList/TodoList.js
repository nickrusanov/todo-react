import Todo from "../Todo/Todo";
import './TodoList.css';

function TodoList({ todoList, removeTodo, completeTodo }) {

	return (
		<ul className="todo__list">
			{todoList.map(todo =>
				<Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />)}
		</ul>
	);
}

export default TodoList;