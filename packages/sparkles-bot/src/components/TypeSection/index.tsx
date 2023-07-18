import { ChangeEventHandler } from 'react';
import './index.scss';
import { MdSend } from "react-icons/md";

interface HeaderProps {
    wrapperClassName?: string;
    input: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}
const mode = "light";

const DEFAULT_MESSAGE = 'Ask a question...';

export const TypeSection = ({ wrapperClassName, input, onChange }: HeaderProps) => {
    const modeClassName = (() => {
      if (mode === "light") return "light-mode";
      if (mode === "dark") return "dark-mode";
      return "light";
    })();
  
    return (
      <div className={`type-section-container ${modeClassName} ${wrapperClassName}`}>
        <input type='text' value={input} onChange={onChange} placeholder={DEFAULT_MESSAGE} />
        {input ? <MdSend className='send-btn' size={20} /> : null}
      </div>
    );
  };
