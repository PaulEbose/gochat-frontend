import { useEffect, useState } from 'react'
import { ChatHistory, ChatInput, Header } from './components'
import { connect } from './utils/api'
import { Message } from './utils/types'

function App() {
	const [msgs, setMsgs] = useState<Message[]>([])

	useEffect(() => {
		connect((msg) => setMsgs((m) => [...m, msg]))
	}, [])

	return (
		<div className="App">
			<Header />
			<main>
				<ChatHistory msgs={msgs} />
				<ChatInput />
			</main>
		</div>
	)
}

export default App
