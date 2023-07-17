import './index.scss';
var mode = "light";
export var MainContainer = function (_a) {
    var wrapperClassName = _a.wrapperClassName, children = _a.children;
    var modeClassName = (function () {
        if (mode === 'light')
            return 'light-mode';
        if (mode === 'dark')
            return 'dark-mode';
        return 'light-mode';
    })();
    return (<div className={"main-container " + modeClassName + " " + wrapperClassName}>
      {children}
    </div>);
};
//# sourceMappingURL=index.js.map