import React from "react";
import { useState } from "react";
import slackIcon from "../assets/slackIcon.png";
import { databases } from "../config/config";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { ID } from "appwrite";
import { useDispatch } from "react-redux";
import { enterUserData } from "../redux/userSlice";

function Signup({ logIn, setLogIn }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password and Confirm Password must be same");
      return;
    }

    const data = databases.createDocument(
      "657c921dbb1d727e7892",
      "6593905f1e6a28aba59d",
      ID.unique(),
      {
        name: formData.name,
        dob: formData.dob,
        email: formData.email,
        password: formData.confirmPassword,
      }
    );

    data
      .then(() => {
        setLogIn(true);
        toast.success("user created");
      })
      .catch((err) => toast.error("error occured:", err.message));

    console.log(data);
    dispatch(
      enterUserData({
        name:formData.name,
        email:formData.email,
      })
    )
    setFormData({
      name: "",
      dob: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <div className="flex justify-center items-center h-[100%] bg-gray-200">
      <div className="basis-[50%] max-w-md p-8 border rounded-lg bg-slate-300 border-2">
        <h1 className="font-bold text-center">Sign Up</h1>
        <div className="flex flex-col  items-center my-1">
          <img
            className="w-10 h-10 rounded-full hover:cursor-pointer hover:opacity-80 "
            src={slackIcon}
            alt="Rounded avatar"
          />
          <p className="mt-1 font-semibold ">
            {formData.name ? `@` : ""}
            {formData.name.replace(/\s+/g, "")}
          </p>
        </div>
        <form
          onSubmit={submitHandler}
          className="flex flex-col justify-center gap-3 text-salte-400 "
        >
          <label>
            <p className="text-sm font-semibold pl-1">Name</p>
            <input
              type="text"
              name="name"
              onChange={changeHandler}
              value={formData.name}
              placeholder="enter your name"
              required
              className="w-[100%] p-2 rounded-lg border"
            />
          </label>

          <label>
            <p className="text-sm font-semibold pl-1">DOB</p>
            <input
              type="date"
              name="dob"
              onChange={changeHandler}
              value={formData.dob}
              required
              className="w-[100%] p-2 rounded-lg border"
            />
          </label>

          <label>
            <p className="text-sm font-semibold pl-1">Email</p>
            <input
              type="email"
              name="email"
              onChange={changeHandler}
              value={formData.email}
              placeholder="enter your email"
              required
              className="w-[100%] p-2 rounded-lg border"
            />
          </label>
          <label>
            <p className="text-sm font-semibold pl-1">Password</p>
            <input
              type="password"
              name="password"
              onChange={changeHandler}
              placeholder="enter your password"
              value={formData.password}
              className="w-[100%] p-2 rounded-lg border"
              required
            />
          </label>

          <label>
            <p className="text-sm font-semibold pl-1">Confirm Password</p>
            <input
              type="password"
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="enter your password"
              value={formData.confirmPassword}
              className="w-[100%] p-2 rounded-lg border"
              required
            />
          </label>
          <button className="p-2 bg-blue-500 hover:bg-blue-700 hover:border-slate-600 border-2 rounded-lg border outline-none">
            Submit
          </button>
        </form>
        <p>
          Already have account?<NavLink to="/login">Login</NavLink>{" "}
        </p>
      </div>
    </div>
  );
}

export default Signup;
