import { useEffect, useState, useRef } from "react";
import { socket } from "../socket";

import "../styles/LiveChat.css";

const LiveChat = () => {
  const [message, setMessage] = useState([]);
  const [username, setUsername] = useState("Anonymous");

  const messageAreaRef = useRef();

  const [msg, setMsg] = useState({
    user: "",
    msg: "",
  });

  useEffect(() => {
    socket.connect();
    console.log("Executing useEffect");
    setUsername(prompt("Username"))
    socket.on("message", (msg) => {
      setMessage((prev) => {
        return [...prev, msg];
      });
      scrollToBottom();
    });
  }, []);

  const handleButton = () => {
    socket.emit("message", msg);
    setMessage((prev) => {
      return [...prev, msg];
    });
    scrollToBottom();
    setMsg({
      // user: "",
      msg: "",
    });
  };

  const scrollToBottom = () => {
    if (messageAreaRef.current) {
      messageAreaRef.current.scrollTop = messageAreaRef.current.scrollHeight;
    }
  };

  return (
    <div className="liveChat">
      <h1>Live Chat</h1>
      <p className="LiveChat_Intro">Welcome to our Community Support Chat, a warm and inclusive space where individuals come together to share experiences, offer support, and find understanding. At Minfulhub, we believe in the power of community, and this chat is a place where you can connect with others who are navigating similar mental health journeys.</p>
      <div className="liveChat_messageArea" ref={messageAreaRef}>
        {message?.map((item, index) => {
          return (
            <div key={index}>
              <h4>{item.user}</h4>
              <p>{item.msg}</p>
            </div>
          );
        })}
      </div>
      <div className="liveChat_input">
        <textarea value={msg.msg}
          onChange={(e) => {
            setMsg({
              user: username,
              msg: e.target.value,
            });
          }}
          placeholder="Write your message"
        ></textarea>
        <button onClick={handleButton}>Post</button>
      </div>
    </div>

  );
};

export default LiveChat;
