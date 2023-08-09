import { ChangeEventHandler } from "react";
import "./index.scss";
import { MessageType } from "../../ChatBot";
interface HeaderProps {
    wrapperClassName?: string;
    input: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    setMessageList: React.Dispatch<React.SetStateAction<MessageType[]>>;
}
export declare const TypeSection: ({ wrapperClassName, input, onChange, setMessageList, }: HeaderProps) => JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map