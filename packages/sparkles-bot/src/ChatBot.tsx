import { MainContainer } from "./components/MainContainer";
import "./index.css";
import { Header } from "./components/Header";
import { TypeSection } from "./components/TypeSection";
import { ToggleButton } from "./components/ToggleButton";
import { ChangeEventHandler } from "react";
import { MessagePanel } from "./components/MessagePanel";
import Boy from './assets/icons/boy.png';
import { useMessaging } from "./hooks/useMessaging";

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
  const { messageList, sendMessage } = useMessaging(botName, onChange, input);

  return (
    <>
      <ToggleButton mode={mode} visible={visible} onClick={() => {
        if(visible) {
          sendMessage();
        } else {
          setVisible();
        }
      }} />
      {!visible && <p style={{position: 'fixed', right: '7.5rem', bottom: '4rem', zIndex: 11111}} >Say Hi to {botName}</p>}
      <MainContainer mode={mode} wrapperClassName={wrapperClassName} visible={visible}>
        <Header visible={visible} mode={mode} botName={botName} botImage={botImage} wrapperClassName={headerWrapperClassName} onClose={setVisible} />
        <MessagePanel visible={visible} mode={mode} botName={botName} botImage={botImage} messages={messageList} />
        {visible && <TypeSection
          mode={mode}
          input={input}
          onChange={onChange}
          sendMessage={sendMessage}
        />}
      </MainContainer>
    </>
  );
};
