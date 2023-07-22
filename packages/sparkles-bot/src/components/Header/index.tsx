import './index.scss';
import { MdClose } from "react-icons/md";

interface HeaderProps {
    wrapperClassName?: string;
    onClose?: () => void;
    botName: string;
    botImage: string;
    mode: string;
    visible: boolean;
}

export const Header = ({ wrapperClassName, onClose, botName, botImage, mode, visible }: HeaderProps) => {
  const fadeClassName = !visible ? 'fadeHeaderOut' : 'fadeHeaderIn';  
  const modeClassName = (() => {
      if (mode === "light") return "light-mode";
      if (mode === "dark") return "dark-mode";
      return "light";
    })();
  
    return (
      <div className={`header-container animated ${fadeClassName} ${modeClassName} ${wrapperClassName}`}>
        <div className='name' >
          <div className='image' >
            <img src={botImage} height={25} width={25} color='black' />
          </div>
          <div className='bot-name' >
            {botName}
          </div>
        </div>
        <MdClose className='close' size={25} onClick={onClose} />
      </div>
    );
  };
