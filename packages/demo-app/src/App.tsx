import { useState } from 'react';
import './App.css';
import { ChatBot } from '@tuomo/sparkles-bot';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <ChatBot visible={visible} setVisible={() => setVisible(!visible)} />
    </div>
  );
}

export default App;
