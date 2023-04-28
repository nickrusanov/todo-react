import './TodoActionButton.css';

function TodoActionButton({ children, onClick, title, disabled }) {
	const onButtonClick = (e) => {
		onClick();

		e.target.classList.add('todo__action-btn--active');
		setTimeout(() => {
			e.target.classList.remove('todo__action-btn--active');
		}, 800);
	};

	return (
		<button className='todo__action-btn' onClick={onButtonClick} title={title} disabled={disabled}>
			{children}
			<span className='todo__action-btn-ripple'></span>
		</button>
	);
}

export default TodoActionButton;