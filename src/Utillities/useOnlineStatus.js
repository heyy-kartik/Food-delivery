import { useEffect } from "react";
import { useState } from "react";
const useOnlineStatus = () => {
    const [onlineStatus, setonlineStatus] = useState(true);
  useEffect(()=>{
    window.addEventListener("Offline", () =>{
        setonlineStatus(false)
    })

     window.addEventListener("Online", () =>{
        setonlineStatus(true)
  });
},[]);
  return onlineStatus
}
export default useOnlineStatus;
