import React from "react";
import { useState } from "react";
import slackIcon from "../assets/slackIcon.png";
import { supabase } from "../config/config";
import toast from "react-hot-toast";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  /* ----------------------------------------------------------------------------------------------------------------------------
                                                      Auth section is pending here
  ------------------------------------------------------------------------------------------------------------------------------*/
  async function signInWithEmail(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email: formData.email,
        options: {
          // set this to false if you do not want the user to be automatically signed up
          shouldCreateUser: false,
          emailRedirectTo: "http://localhost:3000/",
        },
      });
      if (error) {
        throw error;
      } else {
        toast.success("Mail sent to your email");
        console.log("this is user data", data);
      }
    } catch (error) {
      toast.error("error while sending email to user", error.message);
      console.log(error);
    }

    console.log(" this is form data : ", formData);
    setFormData({ email: "", password: "" });
  }

  return (
    <div className="flex justify-center items-center h-[100%] bg-gray-200">
      <div className="basis-[50%] max-w-md p-8 border rounded-lg bg-slate-300 border-2">
        <div className="flex flex-col  items-center my-1">
          <img
            className="w-10 h-10 rounded-full hover:cursor-pointer hover:opacity-80 "
            src={slackIcon}
            alt="Rounded avatar"
          />
          <p className="mt-1 font-semibold ">
            {formData.email ? `@` : ""}
            {formData.email.replace(/\s+/g, "")}
          </p>
        </div>
        <form
          onSubmit={signInWithEmail}
          className="flex flex-col justify-center gap-3 text-salte-400 "
        >
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
          <button className="p-2 bg-blue-500 hover:bg-blue-700 hover:border-slate-600 border-2 rounded-lg border outline-none">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
