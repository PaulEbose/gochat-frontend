import { PropsWithChildren } from 'react'
import { Message } from '../../utils/types'
import ChatMessage from '../ChatMessage/ChatMessage'
import './ChatHistory.scss'

type ChatHistoryProps = PropsWithChildren<{ msgs: Message[] }>

function ChatHistory({ msgs }: ChatHistoryProps) {
	return (
		<div className="ChatHistory">
			<h2>Chat History</h2>

			{msgs.map((msg, index) => (
				<ChatMessage key={index} msg={msg} />
			))}
		</div>
	)
}

export default ChatHistory
