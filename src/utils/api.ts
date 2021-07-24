import { Message } from './types'

const socket = new WebSocket('ws://localhost:8080/ws')

export function connect() {
	socket.onopen = () => {
		console.log('Socket Connected!')
	}

	socket.onerror = (err: Event) => {
		console.log('Socket Error:', err)
	}

	socket.onmessage = (msg: MessageEvent<Message>) => {
		console.log('Incoming Message:', msg)
	}

	socket.onclose = (ev: CloseEvent) => {
		console.log('Socket Disconnected:', ev)
	}
}

export function sendMsg(msg: Message) {
	console.log('Sending Message:', msg)
	socket.send(msg)
}
