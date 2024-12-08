"use client"
import { useEffect, useState } from "react";
import SplashScreen from "./splash-screen";

export default function ClientWrapper({children}){
    const [splashDone, setSplashDone] = useState(false)
   
    

    return splashDone ?  children : <SplashScreen setSplashDone={setSplashDone} />

}