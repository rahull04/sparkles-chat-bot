import './index.scss';
import { MdClose, MdSmartToy } from "react-icons/md";

interface HeaderProps {
    wrapperClassName?: string;
    onClose?: () => void;
}
const mode = "light";

export const Header = ({ wrapperClassName, onClose }: HeaderProps) => {
    const modeClassName = (() => {
      if (mode === "light") return "light-mode";
      if (mode === "dark") return "dark-mode";
      return "light";
    })();
  
    return (
      <div className={`header-container ${modeClassName} ${wrapperClassName}`}>
        <div className='name' >
          <div className='image' >
            <MdSmartToy size={20} color='black' />
          </div>
          <div className='bot-name' >
            Sparkles
          </div>
        </div>
        <MdClose className='close' size={25} onClick={onClose} />
      </div>
    );
  };
