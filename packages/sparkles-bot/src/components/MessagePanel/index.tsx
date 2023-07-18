import { Message } from '../Message';
import './index.scss';

interface MessagePanelProps {
    messages: string[];
    wrapperClassName?: string;
}
const mode = "light";

export const MessagePanel = ({ messages, wrapperClassName }: MessagePanelProps) => {
  const modeClassName = (() => {
    if(mode === 'light') return 'light-mode';
    if(mode === 'dark') return 'dark-mode';
    return 'light-mode';
  })();

  return (
    <div className={`message-panel ${modeClassName} ${wrapperClassName}`}>
      {
        messages?.map(message => <Message title={message} />)
      }
    </div>
  );
};
