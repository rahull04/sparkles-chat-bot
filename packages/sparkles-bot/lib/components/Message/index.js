import { useEffect, useState } from 'react';
import './index.scss';
;
export const Message = ({ title, from = 'user', listLength, index, botName, botImage }) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);
    if (isLoading && listLength - 1 === index) {
        return (<div className="loader-container">
        <div className="dot-pulse"/>
      </div>);
    }
    return (<div className={`message-container ${from}`}>
      {from === 'user' ? <p className='user'>You</p> : null}
      {from === 'bot' ? (<div className='name'>
            <div className='image'>
              <img src={botImage} height={18} width={18} color='black'/>
            </div>
            <div className='bot-name'>
              {botName}
            </div>
          </div>) : null}
      <p>{title}</p>
    </div>);
};
//# sourceMappingURL=index.js.map