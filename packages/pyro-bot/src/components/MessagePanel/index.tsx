import { useEffect, useRef } from 'react';
import { Message } from '../Message';
import './index.scss';
import type { MessageType } from '../../hooks/useMessaging';

interface MessagePanelProps {
    messages: MessageType[];
    wrapperClassName?: string;
    botName: string;
    botImage: string;
    mode: string;
    visible: boolean;
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
      panelRef.current.scrollTop = panelRef.current.scrollHeight
    }
    setTimeout(() => {
      if(panelRef?.current) {
        panelRef.current.scrollTop = panelRef.current.scrollHeight
      }
    }, 1010);
  }, [messages])

  return (
    <div ref={panelRef} className={`message-panel ${modeClassName} ${wrapperClassName}`}>
      {
        messages?.map(({message, from}, i) => <Message mode={mode} key={`message-${i}`} title={message} from={from} botName={botName} botImage={botImage} listLength={messages.length} index={i} />)
      }
    </div>
  );
};
