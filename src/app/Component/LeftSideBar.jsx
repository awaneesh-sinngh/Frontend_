import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Bell, Home, MessageCircle, User, Video } from "lucide-react";
import React from "react";
const LeftSideBar = () => {
  return (
    <aside
      className={
        "fixed top-16 left-0 h-full w-64 p-4 transform transition-transform duration-200 ease-in-out md:translate-x-0 flex flex-col z-50 md:z-0"
      }
    >
      <div className="flex flex-col h-full overflow-auto ">
        {/* Nevigation Menu Started Hear  */}
        <nav className="space-y-4 flex-grow">
          <div className="flex items-center space-x-2 cursor-pointer ">
            <Avatar className="w-10 h-10">
              <AvatarImage />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <span className="font-semibold">Awaneesh Singh</span>
          </div>

          <Button variant="ghost" className="full justify-start ">
            <Home className="mr-4" />
            Home
          </Button>
          <Button variant="ghost" className="full justify-start ">
            <User className="mr-4" />
            Friends
          </Button>
          <Button variant="ghost" className="full justify-start ">
            <Video className="mr-4" />
            Video
          </Button>
          <Button variant="ghost" className="full justify-start ">
            <MessageCircle className="mr-4" />
            Message
          </Button>
          <Button variant="ghost" className="full justify-start ">
            <User className="mr-4" />
            Profile
          </Button>
          <Button variant="ghost" className="full justify-start ">
            <Bell className="mr-4" />
            Notifiction
          </Button>
        </nav>
        {/* Footer Section  */}
        <div className="mb-16 ">
          <Separator className="my-4 " />
          <div className="flex items-center space-x-2 mb-4 cursor-pointer">
            <Avatar className="w-10 h-10">
              <AvatarImage />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <span className="font-semibold">Awaneesh Singh</span>
          </div>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>Privacy · Terms · Advertising ·</p>
            <p>· Meta © 2024</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LeftSideBar;
