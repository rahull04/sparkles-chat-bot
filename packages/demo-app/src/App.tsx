import { useState } from "react";
import "./App.css";
import { ChatBot, ChatBotOptionalProps } from "@tuomo/sparkles-bot";

const Table = ({ chatBotProps, onChange }: any) => (
  <div>
    <table>
      <thead>
        <th>Title</th>
        <th>Type</th>
        <th>Modify</th>
      </thead>
      <tbody>
        {Object.entries(chatBotProps)?.map(([key, value]) => (
          <tr>
            <th>{key}</th>
            <th>{typeof value}</th>
            <th>
              <input onChange={onChange} />
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

function App() {
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState("What is your name ?");
  const [chatBotProps, setChatBotProps] = useState({
    mode: "light",
    wrapperClassName: "",
    headerWrapperClassName: "",
  });

  const onChange = (key: string, value: string) => {
    const temp = { ...chatBotProps };
    temp[key as keyof typeof chatBotProps] = value;
    setChatBotProps(temp);
  };

  return (
    <div className="App">
      <Table chatBotProps={chatBotProps} onChange={onChange} />
      <ChatBot
        visible={visible}
        setVisible={() => setVisible(!visible)}
        input={input}
        onChange={(v) => setInput(v.target.value)}
        {...(chatBotProps as ChatBotOptionalProps)}
      />
    </div>
  );
}

export default App;
