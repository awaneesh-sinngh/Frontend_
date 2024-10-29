"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import {
  Search,
  Home,
  Video,
  Users,
  path,
  Menu,
  Bell,
  MessageCircle,
  LogOut,
  Moon,
  Sun,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 text-foreground showed-md h-16 fixed top-0 left-0 right-0 z-50 p-2 ">
      <div className="flex justify-between items-center mx-auto p-2 ">
        <div className="flex items-center gap-2 md:gap-4">
          <Image
            src="/images/fecbook_logo.png"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="relative">
            <form action="">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"></Search>
                <Input
                  className="pl-8 w-40 md:w-62 h-10 bg-gray-100 dark:bg-slate-600 rounded-full "
                  placeholder="Search facebook.."
                ></Input>
              </div>
              {isSearchOpen && (
                <div className="absolute top-full  left-0 w-full bg-white dark:bg-gray-800 p-2 rounded-md shadow-lg  border border-gray-200 dark:border-gray-700 mt-1 z-50">
                  <div className="p-2 ">
                    <div className="flax item-center space-x-8 p-2 hover:bg-red-200 dark:hover:bg-green-100 rounded-md  cursor-pointer">
                      // When the user clicks on the search icon, the search bar
                      will open .
                      <Search className="absolute text-sm text-gray-400"></Search>
                      <div className="flax item-center gap-2 ">
                        <Avatar>
                          <AvatarImage />
                          <AvatarFallback>Awaneesh</AvatarFallback>
                        </Avatar>
                        <span>Awaneesh Singh</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        <nav className="hidden md:flex justify-around w-[40%] max-w-md ">
          {[
            { icon: Home, path: "/", name: "Home" },
            { icon: Video, path: "/video-feed", name: "Video" },
            { icon: Users, path: "/friends-list", name: "Friends" },
          ].map(({ icon: Icon, path, name }) => (
            <Button
              key={name}
              variant="ghost"
              size="icon"
              className={`relative text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-transparent`}
            >
              <Icon className="text-2xl" />
            </Button>
          ))}
        </nav>
        {/* User Profile Menu Started Here */}
        <div className="flex space-x-2 md:space-x-4 items-center ">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-600 cursor-pointer "
          >
            <Menu />
          </Button>
          {/* Bell Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:block text-gray-600 cursor-pointer pl-1 "
          >
            <Bell />
          </Button>
          {/*Massege circle  */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:block text-gray-600 cursor-pointer pl-1 "
          >
            <MessageCircle />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-8 w-8 rounded-full "
              >
                <Avatar>
                  <AvatarImage />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 z-50" align="end">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <div className="flex  items-center ">
                    <Avatar className="w-8 h-8 mr-2 ">
                      <AvatarImage />
                      <AvatarFallback className="dark:bg-gray-400">
                        A
                      </AvatarFallback>
                    </Avatar>
                    <div className="">
                      <p className="text-sm font-medium leading-none">
                        Awaneesh Singh
                      </p>
                      <p className="text-xs text-gray-600 mt-2 leading-none">
                        XYZ@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Users /> <span className="ml-2 ">Profile</span>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <MessageCircle /> <span className="ml-2 ">Massage</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "light" ? (
                  <>
                    <Moon className="mr-2" />
                    <span className="ml-2 ">Dark Mode</span>
                  </>
                ) : (
                  <>
                    <Sun className="mr-2" />
                    <span className="ml-2 ">Light Mode</span>
                  </>
                )}
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut /> <span className="ml-2 ">LogOut</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
