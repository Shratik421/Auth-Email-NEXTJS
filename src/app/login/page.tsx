"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setbuttonDisabled] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log(response.data);
      router.push("/profile");
    } catch (error: any) {
      console.log("login Failed ", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setbuttonDisabled(false);
    } else {
      setbuttonDisabled(true);
    }
  }, [user]);

  return (
    // </div>
    <div className=" flex flex-col items-center justify-center min-h-screen py-2  ">
      <h1> {loading ? "Processing" : "Login"} </h1>
      <hr />
      <br />

      <label htmlFor="username">Email</label>
      <input
        className="rounded-lg  p-1  border border-gray-200 mb-4 focus:outline-none focus:border-gray-700 text-black"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="  Enter Email"
      />
      <label htmlFor="password">Password</label>
      <input
        className="rounded-lg  p-1  border border-gray-200 mb-4 focus:outline-none focus:border-gray-700  text-black"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="  Enter Password"
      />
      <button
        onClick={onLogin}
        type="submit"
        className="p-2 border  focus:outline-none rounded-lg   border-gray-300 mb-4 focus:border-gray-600"
      >
        {buttonDisabled ? "No Login " : "Login"}
      </button>
      <Link href="/signup">Vist Signup Page</Link>
    </div>
  );
}
