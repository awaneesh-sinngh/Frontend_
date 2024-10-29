"use client";
import React, { useState } from "react";
import LeftSideBar from "../Component/LeftSideBar";
import RightsideBar from "../Component/RightSideBar";
import StoryS from "@/Story/StoryS";
import NewPostForm from "./posts/NewPostForm";
import PostCard from "./posts/PostCard";
const HomePage = () => {
  const [isPostFormOpen, setIsPostFormOpen] = useState(false);
  const posts = [
    {
      _id: 1,
      content: "Hello world",
      mediaurl: "https://www.rolls-roycemotorcars.com/en_GB/home.html",
      author: "John Doe",
      date: "2022-01-01",
      likes: 10,
    },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-bacground trxt-forground ">
      <main className="flex flex-1 pt-16 ">
        <LeftSideBar />
        <div className="flex-1 px-4 py-6 md:ml-64 lg:mr-6 lg:max-w-2xl xl:max-w-3xl mx-auto ">
          <div className="lg:ml-2 xl:ml-28">
            <StoryS />
            <NewPostForm 
            isPostFormOpen={isPostFormOpen} setIsPostFormOpen={setIsPostFormOpen}/>
            <div className="mt-6 space-y-6 ">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-64 xl:w-80 fixed right-0 top-16 bottom-0 overflow-y-auto p-4">
          <RightsideBar />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
