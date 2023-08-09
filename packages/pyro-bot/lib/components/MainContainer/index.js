import './index.scss';
const mode = "light";
export const MainContainer = ({ wrapperClassName, children, visible }) => {
    const fadeClassName = !visible ? 'fadeOut' : 'fadeIn';
    const modeClassName = (() => {
        if (mode === 'light')
            return 'light-mode';
        if (mode === 'dark')
            return 'dark-mode';
        return 'light-mode';
    })();
    return (<div className={`main-container animated ${fadeClassName} ${modeClassName} ${wrapperClassName}`}>
      {children}
    </div>);
};
//# sourceMappingURL=index.js.map