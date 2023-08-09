import { MainContainer } from "./components/MainContainer";
import "./index.css";
import { Header } from "./components/Header";
import { TypeSection } from "./components/TypeSection";
import { ToggleButton } from "./components/ToggleButton";
import { useState } from "react";
import { MessagePanel } from "./components/MessagePanel";
import Boy from './assets/icons/boy.png';
export const ChatBot = ({ wrapperClassName, visible, headerWrapperClassName, setVisible, input, onChange, botName = 'Pyro', botImage = Boy, }) => {
    const [messageList, setMessageList] = useState([{
            message: `Hey ya, I'am ${botName}. How may I assist you today ?`,
            from: 'bot'
        }]);
    if (!visible) {
        return <ToggleButton onClick={setVisible}/>;
    }
    return (<MainContainer wrapperClassName={wrapperClassName} visible={visible}>
      <Header botName={botName} botImage={botImage} wrapperClassName={headerWrapperClassName} onClose={setVisible}/>
      <MessagePanel botName={botName} botImage={botImage} messages={messageList}/>
      <TypeSection input={input} onChange={onChange} setMessageList={setMessageList}/>
    </MainContainer>);
};
//# sourceMappingURL=ChatBot.js.map