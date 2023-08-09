import './index.scss';
import { MdSmartToy } from "react-icons/md";
const mode = "light";
export const ToggleButton = ({ wrapperClassName, onClick }) => {
    const modeClassName = (() => {
        if (mode === 'light')
            return 'light-mode';
        if (mode === 'dark')
            return 'dark-mode';
        return 'light-mode';
    })();
    return (<div onClick={onClick} className={`toggle-button-container ${modeClassName} ${wrapperClassName}`}>
        <MdSmartToy size={40}/>
    </div>);
};
//# sourceMappingURL=index.js.map