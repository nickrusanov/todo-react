import './TodoButton.css';

function TodoButton({ children, onClick, id }) {
	return (
		<button className='todo__item-btn' onClick={() => onClick(id)}>
			{children}
		</button>
	);
}

export default TodoButton;