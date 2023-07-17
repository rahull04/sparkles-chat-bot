import { MainContainer } from "./components/MainContainer";
import './index.css';
import { Header } from "./components/Header";
import { TypeSection } from "./components/TypeSection";
import { ToggleButton } from "./components/ToggleButton";

interface ChatBotProps {
    wrapperClassName?: string;
    visible: boolean;
    headerWrapperClassName?: string;
    mode?: "light" | "dark";
    setVisible: () => void;
}

export const ChatBot = ({wrapperClassName, visible, headerWrapperClassName, setVisible}: ChatBotProps) => {

    if(!visible) {
        return <ToggleButton onClick={setVisible} />
    }

    return (
        <MainContainer wrapperClassName={wrapperClassName} >
            <Header wrapperClassName={headerWrapperClassName} onClose={setVisible} />
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <TypeSection />
        </MainContainer>
    )
}