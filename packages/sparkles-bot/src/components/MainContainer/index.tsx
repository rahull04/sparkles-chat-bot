import './index.scss';

interface MainContainerProps {
    children?: React.ReactNode;
    wrapperClassName?: string;
}
const mode = "light";

export const MainContainer = ({ wrapperClassName, children }: MainContainerProps) => {
    const modeClassName = (() => {
        if(mode === 'light') return 'light-mode';
        if(mode === 'dark') return 'dark-mode';
        return 'light-mode';
    })();

  return (
    <div className={`main-container ${modeClassName} ${wrapperClassName}`}>
      {children}
    </div>
  );
};
