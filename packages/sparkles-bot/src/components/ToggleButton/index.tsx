import './index.scss';
import { MdSend, MdMessage } from "react-icons/md";

interface ToggleButtonProps {
    children?: React.ReactNode;
    wrapperClassName?: string;
    onClick: () => void;
    visible: boolean;
    mode: string;
}

export const ToggleButton = ({ wrapperClassName, onClick, visible, mode }: ToggleButtonProps) => {
    const modeClassName = (() => {
        if(mode === 'light') return 'light-mode';
        if(mode === 'dark') return 'dark-mode';
        return 'light-mode';
    })();

  return (
    <div
        onClick={onClick}
        className={`toggle-button-container ${modeClassName} ${'visible-' + visible} ${wrapperClassName}`}
    >
        {
            visible ? <MdSend size={25} /> : <MdMessage size={25} />
        }
    </div>
  );
};
