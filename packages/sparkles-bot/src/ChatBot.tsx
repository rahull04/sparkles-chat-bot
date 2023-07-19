import { MainContainer } from "./components/MainContainer";
import './index.css';
import { Header } from "./components/Header";
import { TypeSection } from "./components/TypeSection";
import { ToggleButton } from "./components/ToggleButton";
import { ChangeEventHandler, useState } from "react";
import { MessagePanel } from "./components/MessagePanel";

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

export const ChatBot = ({wrapperClassName, visible, headerWrapperClassName, setVisible, input, onChange}: ChatBotProps) => {
    const [messageList, setMessageList] = useState<string[]>([]);

    if(!visible) {
        return <ToggleButton onClick={setVisible} />
    }

    return (
        <MainContainer wrapperClassName={wrapperClassName} visible={visible} >
            <Header wrapperClassName={headerWrapperClassName} onClose={setVisible} />
            <MessagePanel messages={messageList} />
            <TypeSection input={input} onChange={onChange} setMessageList={setMessageList} />
        </MainContainer>
    )
}