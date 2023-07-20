import './index.scss';

interface MainContainerProps {
    children?: React.ReactNode;
    wrapperClassName?: string;
    visible: boolean;
    mode: string;
}

export const MainContainer = ({ wrapperClassName, children, visible, mode }: MainContainerProps) => {
  const fadeClassName = !visible ? 'fadeOut' : 'fadeIn';
  const modeClassName = (() => {
    if(mode === 'light') return 'light-mode';
    if(mode === 'dark') return 'dark-mode';
    return 'light-mode';
  })();

  return (
    <div className={`main-container animated ${fadeClassName} ${modeClassName} ${wrapperClassName}`}>
      {children}
    </div>
  );
};
