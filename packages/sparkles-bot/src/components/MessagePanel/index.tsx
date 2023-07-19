import { useEffect, useRef } from 'react';
import { Message } from '../Message';
import './index.scss';

interface MessagePanelProps {
    messages: string[];
    wrapperClassName?: string;
}
const mode = "light";

export const MessagePanel = ({ messages, wrapperClassName }: MessagePanelProps) => {
  const panelRef = useRef<HTMLInputElement | null>(null);
  const modeClassName = (() => {
    if(mode === 'light') return 'light-mode';
    if(mode === 'dark') return 'dark-mode';
    return 'light-mode';
  })();

  useEffect(() => {
    if(panelRef?.current) {
      panelRef.current.scrollTop = panelRef.current.scrollHeight;
    }
  }, [messages])

  return (
    <div ref={panelRef} className={`message-panel ${modeClassName} ${wrapperClassName}`}>
      {
        messages?.map((message, i) => <Message key={`message-${i}`} title={message} listLength={messages.length} index={i} />)
      }
    </div>
  );
};
