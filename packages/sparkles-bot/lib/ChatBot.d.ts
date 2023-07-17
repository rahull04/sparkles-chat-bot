import './index.css';
interface ChatBotProps {
    wrapperClassName?: string;
    visible: boolean;
    headerWrapperClassName?: string;
    mode?: "light" | "dark";
    setVisible: () => void;
}
export declare const ChatBot: ({ wrapperClassName, visible, headerWrapperClassName, setVisible }: ChatBotProps) => JSX.Element;
export {};
//# sourceMappingURL=ChatBot.d.ts.map