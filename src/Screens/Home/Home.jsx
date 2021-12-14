import { useState, useEffect, useCallback } from "react";
import { MessageList } from "../../Components/MessageList";
import { MessageForm } from "../../Components/MessageForm";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import { store } from "../../Store";
import { addMessageActionWithThunk } from "../../Store/MESSAGE/actions"


export const Home = () => {
  const { getState } = store
  const { dispatch } = store
  const chatId = {}
  const INITIAL_MESSAGES = {
    id: uuidv4(),
    author: "Поддержка",
    text: "Здравствуйте, если у вас есть проблема, отпишитесь сюда",
  };
  const BOT_MESSAGES = {
    id: uuidv4(),
    author: "Поддержка",
    text: "Спасибо, мы ценим вашу помощь! Ждите ответа.",
  };
  const [messageList, setMessageList] = useState([INITIAL_MESSAGES]);

  useEffect(() => {
    let timer;
    if (messageList[messageList.length - 1].author !== "Поддержка")
      timer = setTimeout(() => {
        setMessageList([...messageList, BOT_MESSAGES]);
      }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [messageList]);

  return (
    <div>
      <header className="App-header">Служба поддержки</header>
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


