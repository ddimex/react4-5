import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./ChatRoom.css";

const ChatRoom = ({ roomId, chats }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const x = chats.filter((chat) => chat.roomId === roomId);
    setData(x);
  }, [roomId]);

  return (
    <div>
      <div className="mainCRContainer">
        <div className="crContainer">
          <h2 className="crTitle">{data?.[0]?.roomId}</h2>
          <h2 className="crSubtitle">{data?.[0]?.title}</h2>

          {data?.[0]?.messages && data?.[0]?.messages.length > 0 ? (
            <div>
              {data?.[0]?.messages.map((message, index) => (
                <div key={index} style={{ display: "flex", gap: "10px" }}>
                  <div className="msgContainer">
                    <h2 className="username">{message.username + ":"}</h2>
                    <h2>{'"' + message.value + '"'}</h2>
                    <h4>{message.timestamp}</h4>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="msgContainer">
              <h2 style={{ fontSize: "1.25rem" }}>
                No messages are posted in this chatroom
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
