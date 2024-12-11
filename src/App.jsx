import { useState } from "react";
import "./App.css";
import FormComponent from "./FormComponent";
import SideBar from "./SideBar";
import ChatRoom from "./ChatRoom";
import Login from "./Login";

function App() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("General");
  const [chats, setChats] = useState([
    {
      roomId: "General",
      title: "🎉 You're looking at general channel",
      messages: [],
    },
    {
      roomId: "Learning React",
      title: "👋 Welcome to the learning reactjs channel",
      messages: [],
    },
    {
      roomId: "Random",
      title: "🎉 Post your music here",
      messages: [
        {
          username: "damjanm",
          timestamp: "21:28",
          value: "Hello world",
        },
      ],
    },
  ]);

  const [stage, setStage] = useState("signUp");

  const handleSignUp = (name, user) => {
    setFullName(name);
    setUsername(user);
    setStage("logIn");
  };

  const handleLogin = () => {
    setStage("chatRoom");
  };

  return (
    <div className="mainContainer">
      {stage === "signUp" && <FormComponent onSignUp={handleSignUp} />}
      {stage === "logIn" && <Login onLogin={handleLogin} />}
      {stage === "chatRoom" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "500px",
          }}
        >
          <SideBar roomId={roomId} setRoomId={setRoomId} />
          <ChatRoom roomId={roomId} chats={chats} />
        </div>
      )}
    </div>
  );
}

export default App;
