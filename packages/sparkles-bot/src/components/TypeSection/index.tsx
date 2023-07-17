import './index.scss';

interface HeaderProps {
    wrapperClassName?: string;
}
const mode = "light";

export const TypeSection = ({ wrapperClassName }: HeaderProps) => {
    const modeClassName = (() => {
      if (mode === "light") return "light-mode";
      if (mode === "dark") return "dark-mode";
      return "light";
    })();
  
    return (
      <div className={`type-section-container ${modeClassName} ${wrapperClassName}`}>
        <input type='text' />
      </div>
    );
  };
