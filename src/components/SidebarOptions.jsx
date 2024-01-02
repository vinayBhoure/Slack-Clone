import React from "react";
import { databases } from "../config/config";
import toast from "react-hot-toast";
import { ID } from "appwrite";
import { useDispatch } from "react-redux";
import { enterRoom } from "../redux/appSlice";
import { useNavigate } from "react-router";

export default function SidebarOptions({
  title,
  icon,
  addChannelOption,
  setRender,
  render,
  id
}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectChannel = () => {
    if(id){
      dispatch(enterRoom({
        roomId:id,
        roomName:title
      }))
      navigate(`/chatsection`);
    }
  }
  /* -----------------------------------------------------------------------------------------------------------------------
                                   // inserting data into rooms table
  -------------------------------------------------------------------------------------------------------------------------- */
  const addChannel =  () => {

    try {
      const channelName = prompt("Please enter the channel name");
      if (!channelName) return;

      const promise = databases.createDocument(
        "657c921dbb1d727e7892", // database id
        "657c92254fd30c159f33", // collection id
        ID.unique(), // document id
        {
          channelName: channelName,
        }
      );

      promise.then(
        function (response) {
          toast.success("Channel added successfully");
        },
        function (error) {
          toast.error("error while adding channel", error.message);
          console.log(error); // Failure
        }
      );
      setTimeout(() => {
        setRender(!render);
      }, 2000);
    } 
    catch (err) {
      toast.error("error while adding channel", err.message);
    }
  }
  

  /* ------------------------------------------------Rendering------------------------------------------------------------------- */
  return (
    <div
      className="flex text-sm items-center pl-2 cursor-pointer hover:opacity-80 hover:bg-[#340e36]"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      <div className=" ">{icon && icon}</div>
      {icon && <div className="p-1 ml-2 font-normal ">{title}</div>}
    </div>
  );
}