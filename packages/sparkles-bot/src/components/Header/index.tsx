import './index.scss';
import { MdClose } from "react-icons/md";

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
        Sparkles
        <MdClose size={25} onClick={onClose} />
      </div>
    );
  };
