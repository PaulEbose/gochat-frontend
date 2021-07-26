import { Message } from './types'

type CallbackFunc = (msg: Message) => void

const socket = new WebSocket('ws://localhost:8080/ws')

export function connect(cb: CallbackFunc) {
	socket.onopen = () => {
		console.log('Socket Connected!')
	}

	socket.onerror = (err: Event) => {
		console.log('Socket Error:', err)
	}

	socket.onmessage = (msg: MessageEvent<Message>) => {
		console.log('Incoming Message:', msg)
		cb(JSON.parse(msg.data).body)
	}

	socket.onclose = (ev: CloseEvent) => {
		console.log('Socket Disconnected:', ev)
	}
}

export function send(msg: Message) {
	console.log('Sending Message:', msg)
	socket.send(msg)
}
