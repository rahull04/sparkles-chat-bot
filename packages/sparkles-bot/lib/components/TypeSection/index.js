import './index.scss';
import { MdSend } from "react-icons/md";
var mode = "light";
var DEFAULT_MESSAGE = 'Ask a question...';
export var TypeSection = function (_a) {
    var wrapperClassName = _a.wrapperClassName, input = _a.input, onChange = _a.onChange;
    var modeClassName = (function () {
        if (mode === "light")
            return "light-mode";
        if (mode === "dark")
            return "dark-mode";
        return "light";
    })();
    return (<div className={"type-section-container " + modeClassName + " " + wrapperClassName}>
        <input type='text' value={input} onChange={onChange} placeholder={DEFAULT_MESSAGE}/>
        {input ? <MdSend className='send-btn' size={20}/> : null}
      </div>);
};
//# sourceMappingURL=index.js.map