import "./index.scss";
import { MdSend } from "react-icons/md";
const mode = "light";
const DEFAULT_MESSAGE = "Ask a question...";
export const TypeSection = ({ wrapperClassName, input, onChange, setMessageList, }) => {
    const modeClassName = (() => {
        if (mode === "light")
            return "light-mode";
        if (mode === "dark")
            return "dark-mode";
        return "light";
    })();
    return (<div className={`type-section-container ${modeClassName} ${wrapperClassName}`}>
      <input type="text" value={input} onChange={onChange} placeholder={DEFAULT_MESSAGE} onKeyUp={(e) => {
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
            });
    }}/>
      {input ? (<MdSend className="send-btn" onClick={() => {
        setMessageList((curr) => [
            ...curr,
            { from: "user", message: input },
        ]);
        onChange({
            target: {
                value: "",
            },
        });
    }} size={20}/>) : null}
    </div>);
};
//# sourceMappingURL=index.js.map