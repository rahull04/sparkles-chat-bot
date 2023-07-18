import './index.scss';
import { MdSmartToy } from "react-icons/md";

interface ToggleButtonProps {
    children?: React.ReactNode;
    wrapperClassName?: string;
    onClick: () => void;
}
const mode = "light";

export const ToggleButton = ({ wrapperClassName, onClick }: ToggleButtonProps) => {
    const modeClassName = (() => {
        if(mode === 'light') return 'light-mode';
        if(mode === 'dark') return 'dark-mode';
        return 'light-mode';
    })();

  return (
    <div
        onClick={onClick}
        className={`toggle-button-container ${modeClassName} ${wrapperClassName}`}
    >
        <MdSmartToy size={40} />
    </div>
  );
};
