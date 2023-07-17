import './index.scss';
import { MdSmartToy } from "react-icons/md";
var mode = "light";
export var ToggleButton = function (_a) {
    var wrapperClassName = _a.wrapperClassName, onClick = _a.onClick;
    var modeClassName = (function () {
        if (mode === 'light')
            return 'light-mode';
        if (mode === 'dark')
            return 'dark-mode';
        return 'light-mode';
    })();
    return (<div onClick={onClick} className={"toggle-button-container " + modeClassName + " " + wrapperClassName}>
        <MdSmartToy size={30}/>
    </div>);
};
//# sourceMappingURL=index.js.map