import React,{useState}from "react";
import { useEffect } from "react";


export default function Day8() {
    const[msg,setmsg]=useState("Hello dear one,learning React...?")
  
   useEffect(()=>{
        console.log('use Effect hook called..');
        setTimeout(()=>{
            setmsg("Great...This is time to learn HOOKS.... ");
        },2000)
    })
    return (
    <div><p>{msg}</p></div>
  )
}