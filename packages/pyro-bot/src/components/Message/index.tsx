import { useEffect, useState } from 'react';
import './index.scss';

interface MessageProps { 
  title: string;
  from?: 'user' | 'bot'; 
  listLength: number;
  index: number;
  botName: string;
  botImage: string;
  mode: string;
};

export const Message = ({ title, from = 'user', listLength, index, botName, botImage, mode }: MessageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const modeClassName = (() => {
    if(mode === 'light') return 'light-mode';
    if(mode === 'dark') return 'dark-mode';
    return 'light-mode';
  })();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if(isLoading && listLength - 1 === index) {
    return (
      <div className="loader-container">
        <div className="dot-pulse" />
      </div>
    );
  }

  return (
    <div className={`message-container ${from} ${modeClassName}`}>
      {from === 'user' ? <p className={`user ${modeClassName}`} >You</p> : null}
      {
        from === 'bot' ? (
          <div className='name' >
            <div className='image' >
              <img src={botImage} height={18} width={18} color='black' style={{borderRadius: 20}} />
            </div>
            <div className={`bot-name`} >
              {botName}
            </div>
          </div>
        ) : null
      }
      <p>{title}</p>
    </div>
  );
};
