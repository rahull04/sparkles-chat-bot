import './index.css';
import { ChangeEventHandler } from "react";
export interface ChatBotOptionalProps {
    wrapperClassName?: string;
    headerWrapperClassName?: string;
    mode?: "light" | "dark";
}
interface ChatBotProps extends ChatBotOptionalProps {
    visible: boolean;
    setVisible: () => void;
    input: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}
export declare const ChatBot: ({ wrapperClassName, visible, headerWrapperClassName, setVisible, input, onChange }: ChatBotProps) => JSX.Element;
export {};
//# sourceMappingURL=ChatBot.d.ts.map