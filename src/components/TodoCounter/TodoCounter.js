import './TodoCounter.css';

function TodoCounter({ todoCount }) {
	let text = 'задач';

	if (todoCount % 100 < 5 || todoCount % 100 > 20) {
		switch (todoCount % 10) {
			case 1: text = 'задачу'; break;
			case 2:
			case 3:
			case 4: text = 'задачи'; break;
		}
	}

	return (
		<p className="todo__counter">Вы завершили {todoCount} {text}!</p>
	);
}

export default TodoCounter;