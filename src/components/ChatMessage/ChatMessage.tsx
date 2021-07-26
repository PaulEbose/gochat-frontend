import { Message } from '../../utils/types'
import './ChatMessage.scss'

type ChatMessageProps = { msg: Message }

function ChatMessage({ msg }: ChatMessageProps) {
	return <div className="ChatMessage">{msg}</div>
}

export default ChatMessage
