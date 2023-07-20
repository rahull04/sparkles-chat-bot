import { useEffect, useRef } from 'react';
import { Message } from '../Message';
import './index.scss';
{
    MessageType;
}
from;
'../../ChatBot';
const mode = "light";
export const MessagePanel = ({ messages, wrapperClassName, botName, botImage }) => {
    const panelRef = useRef(null);
    const modeClassName = (() => {
        if (mode === 'light')
            return 'light-mode';
        if (mode === 'dark')
            return 'dark-mode';
        return 'light-mode';
    })();
    useEffect(() => {
        if (panelRef ? .current : ) {
            panelRef.current.scrollTop = panelRef.current.scrollHeight;
        }
    }, [messages]);
    return (<div ref={panelRef} className={`message-panel ${modeClassName} ${wrapperClassName}`}>
      {messages ? .map(({ message, from }, i) => <Message key={`message-${i}`} title={message} from={from} botName={botName} botImage={botImage} listLength={messages.length} index={i}/>)
        :
    }
    </div>);
};
//# sourceMappingURL=index.js.map