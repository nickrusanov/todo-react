import { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodo }) {
	const [inputText, setInputText] = useState('');

	const onInputChange = (e) => {
		setInputText(e.target.value);
	};

	const onFormSubmit = (e) => {
		e.preventDefault();

		addTodo(inputText);

		setInputText('');
	};

	const onButtonClick = (e) => {
		e.target.classList.add('todo__btn--active');
		setTimeout(() => {
			e.target.classList.remove('todo__btn--active');
		}, 800);
	};

	return (
		<form className="todo__form" onSubmit={onFormSubmit}>
			<input className="todo__input" type='text' value={inputText}
				onChange={onInputChange} placeholder='Напишите задачу' />

			<button className="todo__btn" type="submit" disabled={inputText.length === 0} onClick={onButtonClick}>
				<span className="todo__btn-text">Добавить</span>
				<span className="todo__btn-ripple"></span>
			</button>
		</form>
	);
}

export default TodoForm;