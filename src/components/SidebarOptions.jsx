import React from "react";
import { supabase } from "../config/config";
import { enterRoom } from "../redux/appSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import toast from "react-hot-toast";
export default function SidebarOptions({ title, icon, channel, setChannel, id }) {
 
  const dispatch = useDispatch();

  //condition for Add Channel button
  const addChannelOption = title === "Add Channel" ? true : false;

  const selectChannel = () => {
    toast(`Channel-> ${id} selected`);
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  // inserting data into rooms table
  const addChannel = async () => {
    try {
      const channelName = prompt("Please enter the channel name");
      const { error } = await supabase
        .from("rooms")
        .insert({ name: channelName });

      if (error){
        toast.error("Error occured while adding channel");
        console.log("error ocuured while inserting data", error);
      } 
      else {
        toast.success("Channel added successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error occured while adding channel");
    }
  };

  //  fetching data from rooms table

  async function fetchData() {
    try {
      const { data, error } = await supabase.from("rooms").select("*");

      if (error) {
        console.log("error occured while fetching data", error);
        toast.error("Error occured while adding channel");
      }

      if (addChannelOption) {
        setChannel(data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error occured while fetching data");
    }
  }
  useEffect(() => {
    if(channel !== 0) fetchData();
    
  },[]);

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
