import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Chat.css';

const Chat = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    document.title = "Chat";

    localStorage.getItem("token") ? setIsDisabled(false) : setIsDisabled(true);

    fetch("http://localhost:8081/post")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="chatbox">
      <div className="chat">
        <h2>Chat and Share Stories</h2>
        <p>Welcome to our Community Hub, a versatile space that combines the warmth of a chatroom with the richness of shared stories. At Mindfulhub, we believe in the power of community support, and here, you can engage in real-time conversations, explore insightful posts, and be part of a supportive network.</p>
      </div>
      <div className="btn_chat">
        <button className="btn1" onClick={() => navigate("/livechat")}>
          Live Chat
        </button>
        <button
          className="btn2"
          onClick={() => {
            navigate("/schedulechat");
          }}
          disabled={isDisabled}
        >
          One on one help
        </button>
        <button
          className="btn3"
          onClick={() => {
            navigate("/createpost");
          }}
          disabled={isDisabled}
        >
          Create a Post
        </button>
      </div>

      <div className="content-wrapper">
        {posts?.length !== 0 ? (
          <>
            {posts?.map((item) => (
              <div
                className="blog"
                key={item._id}
                onClick={() => {
                  navigate(`/${item._id}`);
                }}
              >
                <h3>{item.title}</h3>
                <p>{item.message}</p>
              </div>
            ))}
          </>
        ) : (
          <h1>No post Found</h1>
        )}
      </div>
    </div>
  );
};

export default Chat;
