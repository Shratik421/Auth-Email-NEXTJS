"use client";

export default function UserProfilePage({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center text-2xl min-h-screen py-2">
      <h2 className="mb-3">Profile</h2>
      <hr />
      <h2 className="text-4xl text-center pb-3">
        Profile Page
        <br/>

      </h2>
        <span className="p-1 m-3 bg-yellow-300 rounded-lg text-black">
        User Id :   {params.id}
        
        </span>
    </div>
  );
}
