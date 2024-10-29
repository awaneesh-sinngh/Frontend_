import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
const StoryS = () => {
  const  [scrollPosition , setScrollPosition ] = useState(0);
  const [maxScroll ,setMaxScroll]=useState(0);
  const  [minScroll ,setMinScroll]=useState(0);
  const containerRef=useRef(null);
  const storyPosts =[{
    mediaUrl:"https://www.google.com/",
    mediaType:"Video"
  }]
  useEffect(()=>{
    const container = containerRef.current;
    if(container){
      const updateMaxScroll= ()=>{
        setMaxScroll(container.scrollWidth-container.offsetWidth);  
        setScrollPosition(container.scrollLeft)
      };
       updateMaxScroll();
       window.addEventListener('resize',updateMaxScroll)
       return ()=>window.removeEventListener('resize',updateMaxScroll)
    }
    } , []);
      
  const scroll = (direction) => {
    const container = containerRef.current;
       if(container){
        const scrollAmount = direction === 'left' ? -200 :200;
        container.scrollBy({left:scrollAmount ,behavior:'smooth'})
       }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if(container){
      setScrollPosition(container.scrollLeft)
    }
  };

  return (
    <div className='relative'>
      <div className='flex space-x-2 overflow-x-hidden py-4 '
      ref={containerRef} onScroll={handleScroll} style={{scrollbarWidth:'none' , msOverflowStyle:'none'}}>
        <motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default StoryS
