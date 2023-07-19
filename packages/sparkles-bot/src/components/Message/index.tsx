import { useEffect, useState } from 'react';
import './index.scss';
import { MdSmartToy } from 'react-icons/md';

interface MessageProps { 
  title: string;
  from?: 'user' | 'bot'; 
  listLength: number;
  index: number;
};

export const Message = ({ title, from = 'user', listLength, index }: MessageProps) => {
  const [isLoading, setIsLoading] = useState(true);

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
    <div className={`message-container ${from}`}>
      {from === 'user' ? <p className='user' >You</p> : null}
      {
        from === 'bot' ? (
          <div className='name' >
            <div className='image' >
              <MdSmartToy size={18} color='black' />
            </div>
            <div className='bot-name' >
              Sparkles
            </div>
          </div>
        ) : null
      }
      <p>{title}</p>
    </div>
  );
};
