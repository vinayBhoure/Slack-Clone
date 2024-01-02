import React from "react";
import { useEffect, useState } from "react";
import { databases } from "../config/config";

function Messages({ flag }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const AllMessages = databases.listDocuments(
      "657c921dbb1d727e7892",
      "657c9243cef5deb3affe"
    );
    AllMessages.then(
      function (response) {
        setMessages(response.documents);
        console.log("All messages", response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  }, [flag]);

  return (
    <div className="divide-y">
      {messages?.map((message) => {
        return (
          <div className="m-1 bg-blue-100 px-2 rounded-md flex flex-col gap-1 
          hover:shadow-lg hover:bg-blue-200
          ">
            <div className="flex justify-between items-center">
              <p className="text-xs">{message.sender}</p>
              <p className="mr-5 text-xs">{message.$createdAt}</p>
            </div>

            <p className="mx-2">{message.message}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Messages;
