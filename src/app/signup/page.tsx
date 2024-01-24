"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

//import toast, { Toaster } from 'react-hot-toast';

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  // const notify = () => toast('Here is your toast.');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("signup success", response.data);
     
    //  toast.success("SuccessFully SignUp");
      router.push("/login");
    } catch (error: any) {
      console.log("Sign Up failed", error.message);

    //  toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    
    <div className=" flex flex-col items-center justify-center min-h-screen py-2  ">
      
      <h1> {loading ? "Processing" : "Signup"} </h1>
      <hr />
      <br />
      <label htmlFor="username">UserName</label>
      <input
        className="rounded-lg p-1  border border-gray-200 mb-4 focus:outline-none focus:border-gray-700 text-black"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="  Enter UserName"
      />
      <label htmlFor="username">Email</label>
      <input
        className="rounded-lg  p-1 text-black border border-gray-200 mb-4 focus:outline-none focus:border-gray-700"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="  Enter Email"
      />
      <label htmlFor="password">Password</label>
      <input
        className="rounded-lg  p-1 text-black border border-gray-200 mb-4 focus:outline-none focus:border-gray-700 "
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="  Enter Password"
      />
      <button
        onClick={onSignup}
        type="submit"
        className="p-2 border  focus:outline-none rounded-lg   border-gray-300 mb-4 focus:border-gray-600"
      >
        {buttonDisabled ? "No Signup " : "Signup"}
      </button>
  
      <Link href="/login">Vist Login Page</Link>
    </div>
  );
}
