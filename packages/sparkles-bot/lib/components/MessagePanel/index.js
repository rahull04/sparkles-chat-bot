import { Message } from '../Message';
import './index.scss';
var mode = "light";
export var MessagePanel = function (_a) {
    var messages = _a.messages, wrapperClassName = _a.wrapperClassName;
    var modeClassName = (function () {
        if (mode === 'light')
            return 'light-mode';
        if (mode === 'dark')
            return 'dark-mode';
        return 'light-mode';
    })();
    return (<div className={"message-panel " + modeClassName + " " + wrapperClassName}>
      {messages ? .map(function (message) { return <Message title={message}/>; })
        :
    }
    </div>);
};
//# sourceMappingURL=index.js.map