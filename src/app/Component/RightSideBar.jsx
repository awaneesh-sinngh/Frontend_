"use client"
import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
const RightsideBar = ()=>{
    const [showAllSponsers , setShowAllSponsers]=useState(false)
    const sponsors = [
        {
          name: "Netflix",
          description: "Watch the latest trending movies and series.",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3qmBuBERRMhoFTvvNUWw7Kr9iicoxC4c8ZQ&s",
          website: "https://www.netflix.com",
        },
        {
          name: "Instagram",
          description: "Explore the latest features and connect with friends.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0NoNt4ECTrCIzRA6PhvyyPThBY9OUEW0-ng&s",
          website: "https://www.instagram.com",
        },
        {
          name: "Spotify",
          description: "Stream your favorite music anytime, anywhere.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpvQJUXehm_yT1kr2WSATHaDRF88_JjWHcQ&s",
          website: "https://www.spotify.com",
        },
        {
          name: "Amazon",
          description: "Shop for everything you need with fast delivery.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBLSbp3rFpIZ0kzoreJLN7uZqkJz0h6-RQQ&s",
          website: "https://www.amazon.com",
        },
        {
          name: "Apple",
          description: "Discover innovative products and services.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qsC4qgsmGTJ9HnNYatRyi7GyJ7GlRMujlw&s",
          website: "https://www.apple.com",
        },
      ];
      const displaySponsers = showAllSponsers ? sponsors :sponsors.slice(0,3)

    return(
         <motion.aside  initial={{opacity:0 , x:50}} animate={{opacity:1 , x:0}} transition={{duration:0.5}} className="space-y-4" >
                 <Card>
                    <CardHeader>
                        <CardTitle className='flex text-lg font-semibold items-center'>
                                  <TrendingUp className="mr-2 h-5 w-5 text-primary"/>
                                  Popular Sponsers
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4 ">
                          {displaySponsers.map((sponsors,index)=>(
                            <motion.li key={sponsors.name} initial={{opacity:0 , y:20}} animate={{opacity:1 , y:0}} transition={{delay: index*0.1}}  className="flex flex-col items-center space-x-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                                    <img src={sponsors.image} alt={sponsors.name} className="w-40 h-30 object-contain rounded-md"/>
                                <div className="flex-1 ">
                                        <h3 className="text-md font-semibold"> {sponsors.name} </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400"> {sponsors.description}</p>
                                        <a href={sponsors.website} target="_blank" className="text-primary text-sm flex items-center mt-1 hover:underline">
                                          Visit_Website <ExternalLink className="h-4 w-4 ml-1"/>
                                        </a>
                                </div>
                            </motion.li>
                          ))}
                        </ul>
                        {sponsors.length>3&&(
                          <Button variant="outline" className='w-full mt-4 dark:text-red-300'onClick={()=>setShowAllSponsers(!showAllSponsers)}>
                            {showAllSponsers ? "Show_Less" : "Show_More"}
                          </Button>
                        )}
                    </CardContent>
                 </Card>
         </motion.aside>
    )}

export default RightsideBar

 