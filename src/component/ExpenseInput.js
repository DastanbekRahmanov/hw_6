import { useCallback, useState } from 'react'
import './ExpenseInput.css'

const ExpenseInput = () => {
	const [input, setInput] = useState('')
	let date = new Date()
	let month = date.toLocaleString('en-US', { month: '2-digit' })
	let day = date.toLocaleString('en-US', { day: '2-digit' })
	let year = date.getFullYear()
	let newData = `${day}.${month}.${year}`

	const inputHandler = (event) => {
		setInput(event.target.value)
	}
	let [das, addData] = useState([])
	const submitHanlder = (e) => {
		e.preventDefault()
		if (input === '') {
			return alert('type something')
		}
		setInput('')
		addData([...das, { inpValue: input, date: newData }])
		if (input == 'Enter') {
			return 'keyup'
		}
	}
	return (
		<div className='new-expense'>
			<form className='form' onSubmit={submitHanlder}>
				<input
					placeholder='Введите значения'
					className='input'
					type='text'
					value={input}
					onChange={inputHandler}
				/>
				<button className='btn' onClick={submitHanlder}>Add</button>
			</form>
            <div className='renderDiv'>
            {das.map((i) => (
					<h2>{`${i.inpValue} ${i.date}`}</h2>
				))}
            </div>
		</div>
	)
}

export default ExpenseInput
