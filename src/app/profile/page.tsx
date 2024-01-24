"use client";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("loguot succesfully");
      router.push("/");
    } catch (error: any) {
      console.error(error.message, "error from clienty side");
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };

  return (
    <div className="flex flex-col items-center justify-center text-2xl min-h-screen py-2">
      <h2>Profile</h2>
      <hr />
      <h2>Profile Page</h2>
      <hr />
      <h2 className="p-1 m-3 padding rounded bg-green-400">
        {data === "nothing" ? 
          "Nothing"
         : (
          <Link href={`profile/${data}`}>{data}</Link>
        )}
      </h2>
      <hr />
      <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-200 text-white font-bold py-2  px-2"
      >
        Logout
      </button>

      <button
        onClick={getUserDetails}
        className="bg-green-300 mt-4 hover:bg-yellow-200 text-white font-bold py-2  px-2"
      >
        Get User Details
      </button>
    </div>
  );
}
