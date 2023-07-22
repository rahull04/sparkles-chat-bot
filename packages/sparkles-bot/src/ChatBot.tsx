import { MainContainer } from "./components/MainContainer";
import "./index.css";
import { Header } from "./components/Header";
import { TypeSection } from "./components/TypeSection";
import { ToggleButton } from "./components/ToggleButton";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
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

  return (
    <>
      <ToggleButton visible={visible} onClick={() => {
        if(visible) {
          if(!input) return;
          setMessageList((curr) => [
            ...curr,
            { from: "user", message: input },
          ]);
          onChange({
            target: {
              value: "",
            },
          } as ChangeEvent<HTMLInputElement>);
        } else {
          setVisible();
        }
      }} />
      {!visible && <p style={{position: 'absolute', right: '7.5rem', bottom: '4rem', zIndex: 11111}} >Say Hi to {botName}</p>}
      <MainContainer mode={mode} wrapperClassName={wrapperClassName} visible={visible}>
        <Header visible={visible} mode={mode} botName={botName} botImage={botImage} wrapperClassName={headerWrapperClassName} onClose={setVisible} />
        <MessagePanel visible={visible} mode={mode} botName={botName} botImage={botImage} messages={messageList} />
        {visible && <TypeSection
          mode={mode}
          input={input}
          onChange={onChange}
          setMessageList={setMessageList}
        />}
      </MainContainer>
    </>
  );
};
