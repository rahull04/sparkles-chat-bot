import { ChangeEvent, ChangeEventHandler } from "react";
import "./index.scss";
import { MessageType } from "../../hooks/useMessaging";
interface HeaderProps {
  wrapperClassName?: string;
  input: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  sendMessage: () => void;
  mode: string;
}

const DEFAULT_MESSAGE = "Ask a question...";

export const TypeSection = ({
  wrapperClassName,
  input,
  onChange,
  sendMessage,
  mode,
}: HeaderProps) => {
  const modeClassName = (() => {
    if (mode === "light") return "light-mode";
    if (mode === "dark") return "dark-mode";
    return "light";
  })();

  return (
    <div
      className={`type-section-container ${modeClassName} ${wrapperClassName}`}
    >
      <input
        type="text"
        value={input}
        className={modeClassName}
        onChange={onChange}
        placeholder={DEFAULT_MESSAGE}
        onKeyUp={(e) => {
          e.code === "Enter" && sendMessage();
        }}
      />
    </div>
  );
};
