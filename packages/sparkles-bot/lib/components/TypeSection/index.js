import './index.scss';
var mode = "light";
export var TypeSection = function (_a) {
    var wrapperClassName = _a.wrapperClassName;
    var modeClassName = (function () {
        if (mode === "light")
            return "light-mode";
        if (mode === "dark")
            return "dark-mode";
        return "light";
    })();
    return (<div className={"type-section-container " + modeClassName + " " + wrapperClassName}>
        <input type='text'/>
      </div>);
};
//# sourceMappingURL=index.js.map