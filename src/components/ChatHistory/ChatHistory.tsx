import { PropsWithChildren } from 'react'
import { Message } from '../../utils/types'
import './ChatHistory.scss'

type ChatHistoryProps = PropsWithChildren<{ msgs: Message[] }>

function ChatHistory({ msgs }: ChatHistoryProps) {
	return (
		<div className="ChatHistory">
			<h2>Chat History</h2>

			{msgs.map((msg, index) => (
				<p key={index}>{msg}</p>
			))}

			{JSON.stringify(msgs)}
		</div>
	)
}

export default ChatHistory
