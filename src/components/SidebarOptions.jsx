import React from "react";
import { databases } from "../config/config";
import { enterRoom } from "../redux/appSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { ID } from "appwrite";
import { selectClasses } from "@mui/material";
export default function SidebarOptions({
  title,
  icon,
  fetchData,
  addChannelOption
}) {
  const dispatch = useDispatch();

  //condition for Add Channel button
 

  const selectChannel = () => {
    // toast(`Channel-> ${id} selected`);
    // if (id) {
    //   dispatch(
    //     enterRoom({
    //       roomId: id,
    //     })
    //   );
    // }
  };

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
    } 
    catch (err) {
      toast.error("error while adding channel", err.message);
    }
    // fetchData();
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