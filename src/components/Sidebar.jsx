import React from "react";
import { FaCircle } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import SidebarOptions from "./SidebarOptions";
import { MdOutlineInsertComment } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { MdExpandLess } from "react-icons/md";
import { MdExpandMore } from "react-icons/md"
import { IoAppsSharp } from "react-icons/io5";
import { PiFiles } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";
// import { CiSaveDown2 } from "react-icons/ci";
import { IoBookmarkOutline } from "react-icons/io5"; 
import { FaEnvelopeOpen } from "react-icons/fa6";
import { SlPicture } from "react-icons/sl";
import { useState } from "react";



export default function Sidebar() {
  
  const [channel, setChannel] = useState([]);

  const sideMenu = [{
    title: "Thread",
    icon: <MdOutlineInsertComment />
  },
  {
    title: "Mentions & reactions",
    icon: <SlPicture />
  },
  {
    title: "Saved Items",
    icon: <FaEnvelopeOpen />
  },
  {
    title: "Channel browser",
    icon: <IoBookmarkOutline />
  },
  {
    title: "People & user groups",
    icon: <IoPeopleSharp />
  },
  {
    title: "Apps",
    icon: <IoAppsSharp /> 
  },
  {
    title: "File browser",
    icon: <PiFiles />
  },
  {
    title: "Show less",
    icon: <MdExpandLess />
  },

 ]

 console.log(channel);

  return (
    <div className="text-white divide-y divide-neutral-600">

    {/* header info section */}
      <div className="flex items-center basis-1 py-2 border-t border-neutral-600">
        <div className="">
          <h1 className="text-base font-semibold ">Vinay FAM</h1>
          <p className="flex items-center text-sm">
            <FaCircle className="h-2 mt-1"  style={{color:'green'}} />
            vinay Bhoure
          </p>
        </div>
        <div className="ml-auto mr-5  text-black bg-white p-1 rounded-full hover:cursor-pointer hover:opacity-80">
          <FaPencilAlt />
        </div>
      </div>

      {/* Menu section  */}
      <div className="py-2">
       {sideMenu.map((item, index) => (
         <SidebarOptions key={index} title={item.title} icon={item.icon} />
       ))}
      
      </div>

      <div className="py-2">
      <SidebarOptions title={"Channels"} icon={<MdExpandMore /> }  />
      </div>

      <div className="py-2">
      <SidebarOptions title={"Add Channel"} icon={<IoAddOutline /> } channel={channel} setChannel={setChannel} />
     
      {channel && channel.map((item, index) => {
        return <SidebarOptions key={index} id={channel.id} title={item.name} icon={"#"} />
      })}
      </div>

    </div>
  );
}
