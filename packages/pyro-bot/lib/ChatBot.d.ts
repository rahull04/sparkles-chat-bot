import "./index.css";
import { ChangeEventHandler } from "react";
export interface ChatBotOptionalProps {
    wrapperClassName?: string;
    headerWrapperClassName?: string;
    mode?: "light" | "dark";
    botName?: string;
    botImage?: string;
}
interface ChatBotProps extends ChatBotOptionalProps {
    visible: boolean;
    setVisible: () => void;
    input: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}
export interface MessageType {
    message: string;
    from: 'user' | 'bot';
}
export declare const ChatBot: ({ wrapperClassName, visible, headerWrapperClassName, setVisible, input, onChange, botName, botImage, }: ChatBotProps) => JSX.Element;
export {};
//# sourceMappingURL=ChatBot.d.ts.map