import './index.scss';

interface HeaderProps {
    wrapperClassName?: string;
}
const mode = "light";

export const Header = ({ wrapperClassName }: HeaderProps) => {
    const modeClassName = (() => {
      if (mode === "light") return "light-mode";
      if (mode === "dark") return "dark-mode";
      return "light";
    })();
  
    return (
      <div className={`header-container ${modeClassName} ${wrapperClassName}`}>
        Sparkles
      </div>
    );
  };
