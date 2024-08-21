"use client"
import { useEffect } from "react"

const SplashScreen = ({endLoading}: {endLoading: any}) => {

  useEffect(() => {
    setTimeout(() =>  endLoading() ,2000)
  }, [])
  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center text-black">
        splash...
    </div>
  )
}

export default SplashScreen