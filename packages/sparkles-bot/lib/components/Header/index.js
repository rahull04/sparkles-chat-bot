import './index.scss';
var mode = "light";
export var Header = function (_a) {
    var wrapperClassName = _a.wrapperClassName;
    var modeClassName = (function () {
        if (mode === "light")
            return "light-mode";
        if (mode === "dark")
            return "dark-mode";
        return "light";
    })();
    return (<div className={"header-container " + modeClassName + " " + wrapperClassName}>
        Sparkles
      </div>);
};
//# sourceMappingURL=index.js.map