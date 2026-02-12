import { useState, useEffect } from "react";
import "./MessageList.css";
import axios from "axios";

const MessageList = ({refresh}) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const getFun = async () => {
      const response = await axios.get(
        "https://pageraccio-default-rtdb.asia-southeast1.firebasedatabase.app/pagerAccio.json",
      );
      let messageList = response.data
      messageList = Object.keys(messageList).map((key)=>{return {id: key, name: messageList[key].name, message: messageList[key].message}})
      setMessages(messageList.reverse().slice(0, 5));
    };
    getFun();
  }, [refresh]);
  return (
    <div>
      {messages != [] &&
        messages.map((key) => (
          <div className="messageContainer">
            <p>Name:{key.name}</p>
            <p>Message: {key.message}</p>
          </div>
        ))}
    </div>
  );
};

export default MessageList;
