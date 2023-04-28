import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoCounter from './components/TodoCounter/TodoCounter';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodoListActions from './components/TodoListActions/TodoListActions';
import './css/App.css';


function App() {
	const [todoList, setTodoList] = useState(
		localStorage.getItem('tasks')
			? JSON.parse(localStorage.getItem('tasks'))
			: []
	);

	const addTodo = (todoName) => {
		const newTodo = {
			id: uuidv4(),
			name: todoName,
			isCompleted: false
		};

		const newTodoList = [...todoList, newTodo];

		setTodoList(newTodoList);
	};

	const removeTodo = (todoId) => {
		const newTodoList = todoList.filter(todo => todo.id !== todoId);

		setTodoList(newTodoList);
	};

	const completeTodo = (todoId) => {
		const newTodoList = todoList.map(todo => {
			return todo.id === todoId
				? { ...todo, isCompleted: !todo.isCompleted }
				: { ...todo };
		});

		setTodoList(newTodoList);
	};

	const removeCompletedTodo = () => {
		const newTodoList = todoList.filter(todo => !todo.isCompleted);

		setTodoList(newTodoList);
	};

	const removeAllTodo = () => {
		setTodoList([]);
	};

	const todoCount = todoList.filter(todo => todo.isCompleted).length;

	localStorage.setItem('tasks', JSON.stringify(todoList));

	return (
		<div className="app">
			<h1 className="title-1 todo__title-1">Задачи</h1>

			<TodoForm addTodo={addTodo} />

			{todoList.length !== 0 && <TodoListActions removeCompletedTodo={removeCompletedTodo} removeAllTodo={removeAllTodo} todoCount={todoCount} />}

			{
				todoList.length !== 0
					? <TodoList todoList={todoList} removeTodo={removeTodo} completeTodo={completeTodo} />
					: <p className='todo__message'>Все задачи выполнены!</p>
			}

			{todoCount > 0 && <TodoCounter todoCount={todoCount} />}
		</div>
	);
}

export default App;
