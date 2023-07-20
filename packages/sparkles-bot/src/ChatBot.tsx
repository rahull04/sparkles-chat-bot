import { MainContainer } from "./components/MainContainer";
import "./index.css";
import { Header } from "./components/Header";
import { TypeSection } from "./components/TypeSection";
import { ToggleButton } from "./components/ToggleButton";
import { ChangeEventHandler, useState } from "react";
import { MessagePanel } from "./components/MessagePanel";
import Boy from './assets/icons/boy.png';

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

export const ChatBot = ({
  wrapperClassName,
  visible,
  headerWrapperClassName,
  setVisible,
  input,
  onChange,
  botName = 'Sparkles',
  botImage = Boy,
  mode = "light",
}: ChatBotProps) => {
  const [messageList, setMessageList] = useState<MessageType[]>([{
    message: `Hey ya, I'am ${botName}. How may I assist you today ?`,
    from: 'bot'
  }]);

  if (!visible) {
    return <ToggleButton onClick={setVisible} />;
  }

  return (
    <MainContainer mode={mode} wrapperClassName={wrapperClassName} visible={visible}>
      <Header mode={mode} botName={botName} botImage={botImage} wrapperClassName={headerWrapperClassName} onClose={setVisible} />
      <MessagePanel mode={mode} botName={botName} botImage={botImage} messages={messageList} />
      <TypeSection
        mode={mode}
        input={input}
        onChange={onChange}
        setMessageList={setMessageList}
      />
    </MainContainer>
  );
};
