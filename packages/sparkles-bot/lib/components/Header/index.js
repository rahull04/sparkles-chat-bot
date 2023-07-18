import './index.scss';
import { MdClose, MdSmartToy } from "react-icons/md";
var mode = "light";
export var Header = function (_a) {
    var wrapperClassName = _a.wrapperClassName, onClose = _a.onClose;
    var modeClassName = (function () {
        if (mode === "light")
            return "light-mode";
        if (mode === "dark")
            return "dark-mode";
        return "light";
    })();
    return (<div className={"header-container " + modeClassName + " " + wrapperClassName}>
        <div className='name'>
          <div className='image'>
            <MdSmartToy size={20} color='black'/>
          </div>
          <div className='bot-name'>
            Sparkles
          </div>
        </div>
        <MdClose className='close' size={25} onClick={onClose}/>
      </div>);
};
//# sourceMappingURL=index.js.map