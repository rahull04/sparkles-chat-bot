import { useState } from "react";
import "./App.css";
import { ChatBot, ChatBotOptionalProps } from "pyro-bot";
import Girl from './assets/icons/girl.png';
import Boy from './assets/icons/boy.png';
import { Home } from "./Home";

interface PossibleValues {
  name: string;
  value: string;
}

interface ChatBotProps {
  prop: string;
  value: string;
  possibleValues?: PossibleValues[];
  modifyInputType?: 'string' | 'select';
}

const Table = ({ chatBotProps, onChange }: {chatBotProps: ChatBotProps[], onChange: any}) => (
  <div style={{width: 500}}>
    <table style={{width: 500}} >
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
            <td>{prop.possibleValues?.map(p => p.name).join(', ')}</td>
            <td>{prop.value}</td>
            <td>
              {
                prop.modifyInputType === 'select' ?
                  <select style={{width: '100%'}} value={prop.value} onChange={(e) => onChange(prop.prop, e.target.value)}>
                    {
                      prop.possibleValues?.map((p, i) => <option key={`option-${i}`} value={p.value}>{p.name}</option>)
                    }
                  </select>
                  : <input value={prop.value} onChange={(e) => onChange(prop.prop, e.target.value)} />
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

function App() {
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState("");
  const [chatBotProps, setChatBotProps] = useState<ChatBotProps[]>([
    {
      prop: "mode",
      value: "light",
      possibleValues: [   
        {
          name: "Light",
          value: "light",
        },
        {
          name: "Dark",
          value: "dark",
        },
      ],
      modifyInputType: 'select',
    }, 
    {
      prop: "botName",
      value: "Pyro",
    },
    {
      prop: "botImage",
      value: Boy,
      possibleValues: [
        {
          name: 'Girl',
          value: Girl,
        },
        {
          name: 'Boy',
          value: Boy,
        },
      ],
      modifyInputType: 'select'
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
      <Home />
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
