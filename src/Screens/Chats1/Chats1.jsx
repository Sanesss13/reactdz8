import { store } from "../../Store";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { MessageList } from "../../Components/MessageList";
import { MessageForm } from "../../Components/MessageForm";
import "./index.css";
export const Chats1 = () => {
  const INITIAL_MESSAGES = {
    id: uuidv4(),
    author: "ИНФОРМАЦИЯ",
    text: "Здравствуйте, это новый чат",
  };

  const [messageList, setMessageList] = useState([INITIAL_MESSAGES]);
  return (
    <div>
      <header className="App-header">Чат 1</header>
      <main className="App-main">
        <MessageList messageList={messageList} />
        <MessageForm
          messageList={messageList}
          setMessageList={setMessageList}
        />
      </main>
      <footer className="App-footer">
      </footer>
    </div>
  );
}



