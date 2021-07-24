import { connect, sendMsg } from './utils/api'
import { useEffect } from 'react'
import './App.css'

function App() {
	useEffect(() => {
		connect()
	}, [])
	return (
		<div className="App">
			<main>
				<button onClick={() => sendMsg('Hello!')}>Send Message</button>
			</main>
		</div>
	)
}

export default App
