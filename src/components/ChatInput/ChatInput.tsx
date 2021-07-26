import { ChangeEvent, FormEvent, useState } from 'react'
import { send } from '../../utils/api'
import './ChatInput.scss'

function ChatInput() {
	const [msg, setMsg] = useState('')

	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		setMsg(ev.target.value)
		// @todo
		// send user is typing if value is not nil
		// clear user is typing if value is nil
	}

	const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault()
		send(msg)
		setMsg('')
	}

	return (
		<form className="ChatInput" onSubmit={handleSubmit}>
			<input onChange={handleChange} value={msg} />
		</form>
	)
}

export default ChatInput
