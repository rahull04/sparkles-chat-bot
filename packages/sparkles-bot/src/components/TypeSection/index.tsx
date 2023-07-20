import { ChangeEvent, ChangeEventHandler } from "react";
import "./index.scss";
import { MdSend } from "react-icons/md";
import { MessageType } from "../../ChatBot";

interface HeaderProps {
  wrapperClassName?: string;
  input: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  setMessageList: React.Dispatch<React.SetStateAction<MessageType[]>>;
  mode: string;
}

const DEFAULT_MESSAGE = "Ask a question...";

export const TypeSection = ({
  wrapperClassName,
  input,
  onChange,
  setMessageList,
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
        onChange={onChange}
        placeholder={DEFAULT_MESSAGE}
        onKeyUp={(e) => {
          e.code === "Enter" &&
            setMessageList((curr) => [
              ...curr,
              { from: "user", message: input },
            ]);
          e.code === "Enter" &&
            onChange({
              target: {
                value: "",
              },
            } as ChangeEvent<HTMLInputElement>);
        }}
      />
      {input ? (
        <MdSend
          className="send-btn"
          color={'black'}
          onClick={() => {
            setMessageList((curr) => [
              ...curr,
              { from: "user", message: input },
            ]);
            onChange({
              target: {
                value: "",
              },
            } as ChangeEvent<HTMLInputElement>);
          }}
          size={20}
        />
      ) : null}
    </div>
  );
};
