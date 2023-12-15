import React from "react";
import { IoMdSend } from "react-icons/io";
import { useState } from "react";

function ChatInput({ channelName, channelId }) {
  const [message, setMessage] = useState({
    messages: "",
  });
  const sendMessage = (e) => {
    e.preventDefault();

    // if (!channelId) {
    //   return false;
    // }

    // storing messages in the database and getting it to create chat messages
    console.log(message.messages);
    setMessage({ ...message, messages: "" });
  };
  const changeHandler = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  return (
    <div className="rounded-md">
      <form onSubmit={sendMessage} className="flex justify-center relative">
        <input
          type="text"
          placeholder={`Message #${channelName}`}
          className="w-[60%] rounded-sm p-2 fixed bottom-[30px] border border-slate-400 outline-none"
          name="messages"
          value={message.messages || ""}
          onChange={changeHandler}
        />
        <button type="submit" hidden>
          <IoMdSend />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
