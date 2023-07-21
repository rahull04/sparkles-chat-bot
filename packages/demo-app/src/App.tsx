import { useState } from "react";
import "./App.css";
import { ChatBot, ChatBotOptionalProps } from "@tuomo/sparkles-bot";
import Girl from './assets/icons/girl.png';

interface ChatBotProps {
  prop: string;
  value: string;
  possibleValues?: string[];
}

const Table = ({ chatBotProps, onChange }: {chatBotProps: ChatBotProps[], onChange: any}) => (
  <div>
    <table>
      <tbody>
        <tr>
          <th>Title</th>
          <th>Type</th>
          <th>Possible values</th>
          <th>Current value</th>
          <th>Modify</th>
        </tr>
      </tbody>
      <tbody>
        {chatBotProps?.map((prop, i) => (
          <tr key={`tr-${i}`} >
            <td>{prop.prop}</td>
            <td>{typeof prop.value}</td>
            <td>{prop.possibleValues?.join(',')}</td>
            <td>{prop.value}</td>
            <td>
              <input onChange={(e) => onChange(prop.prop, e.target.value)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

function App() {
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState("What is your name ?");
  const [chatBotProps, setChatBotProps] = useState<ChatBotProps[]>([
    {
      prop: "mode",
      value: "light",
      possibleValues: ["light", "dark"]
    }, 
    {
      prop: "botName",
      value: "Sparkles",
    },
    {
      prop: "botImage",
      value: Girl,
    },
    {
      prop: "wrapperClassName",
      value: "",
    },
    {
      prop: "headerWrapperClassName",
      value: "",
    },
  ]);

  const onChange = (key: string, value: string) => {
    let temp = [...chatBotProps];
    temp = temp.map(item => {
      if(item.prop === key) {
        item["value"] = value;
      }
      return item;
    });
    setChatBotProps(temp);
  };
  const propsData = (() => {
    const data: any = {};
    chatBotProps.forEach(item => data[item.prop] = item.value);
    return data;
  })();

  return (
    <div className="App">
      <Table chatBotProps={chatBotProps} onChange={onChange} />
      <ChatBot
        visible={visible}
        setVisible={() => setVisible(!visible)}
        input={input}
        onChange={(v) => setInput(v.target.value)}
        {...propsData as ChatBotOptionalProps}
      />
    </div>
  );
}

export default App;
