import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import ChatInput from "./ChatInput";
import Messages from "./Messages";


export default function ChatSection() {

  const roomId = useSelector((state) => state.app.roomId);
  // fetch room detail
  // fetch messages

  return (
    <div className=" overflow-scroll no-scrollbar">
      <div className="flex justify-between border-b px-5 py-3">
        <div className="flex items-center">
          <h4 className="lowercase">
            <strong> Room NAme</strong>
          </h4>
          <FaRegStar className="ml-1" />
        </div>
        <div className="flex items-center">
          <IoMdInformationCircleOutline  className="mr-1"/> Details
        </div>
      </div>
 

      <div>
       {/* chat messages */}
         <Messages />
      </div>

      
      <div>
      {/* chat input */}
        <ChatInput channelId={roomId}/>
      </div>
    </div>
  );
}
