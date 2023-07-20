import { useEffect, useRef } from 'react';
import { Message } from '../Message';
import './index.scss';
import type { MessageType } from '../../ChatBot';

interface MessagePanelProps {
    messages: MessageType[];
    wrapperClassName?: string;
    botName: string;
    botImage: string;
    mode: string;
}

export const MessagePanel = ({ messages, wrapperClassName, botName, botImage, mode }: MessagePanelProps) => {
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
        messages?.map(({message, from}, i) => <Message mode={mode} key={`message-${i}`} title={message} from={from} botName={botName} botImage={botImage} listLength={messages.length} index={i} />)
      }
    </div>
  );
};
