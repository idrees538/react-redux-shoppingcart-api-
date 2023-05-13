import React, { useState } from 'react'

function Clock() {
    let time=new Date().toLocaleTimeString();
    const [ctime,settime]=useState(time);
    const timeupdate=()=>{
        time=new Date().toLocaleTimeString();
        settime(time);
    };
    setInterval(timeupdate,1000)
  return (
    <div>{ctime}</div>
  )
}

export default Clock