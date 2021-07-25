import { useEffect, useState } from 'react'
import { ChatHistory, Header } from './components'
import { connect, sendMsg } from './utils/api'
import { Message } from './utils/types'

function App() {
	const [Msgs, setMsgs] = useState<Message[]>([])

	useEffect(() => {
		connect((msg) => setMsgs((m) => [...m, msg]))
	}, [])

	return (
		<div className="App">
			<Header />
			<main>
				<ChatHistory msgs={Msgs} />
				<button onClick={() => sendMsg('Hello!')}>Send Message</button>
			</main>
		</div>
	)
}

export default App
