import './index.scss';
import { MdClose } from "react-icons/md";
const mode = "light";
export const Header = ({ wrapperClassName, onClose, botName, botImage }) => {
    const modeClassName = (() => {
        if (mode === "light")
            return "light-mode";
        if (mode === "dark")
            return "dark-mode";
        return "light";
    })();
    return (<div className={`header-container ${modeClassName} ${wrapperClassName}`}>
        <div className='name'>
          <div className='image'>
            <img src={botImage} height={25} width={25} color='black'/>
          </div>
          <div className='bot-name'>
            {botName}
          </div>
        </div>
        <MdClose className='close' size={25} onClick={onClose}/>
      </div>);
};
//# sourceMappingURL=index.js.map