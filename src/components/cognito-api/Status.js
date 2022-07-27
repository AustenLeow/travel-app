import React, {useState, useEffect, useContext} from "react";
import { AccountContext } from "./Account";

const Status = () => {
  const [status, setStatus] = useState(false);
  
  const {logout, getSession} = useContext(AccountContext);

  useEffect(()=>{
    getSession().then((session) => {
      console.log("Session: ", session);
      setStatus(true);
    });
  }, []);

  return (
    <div>
      {status ? <a class="nav-links" onClick={logout}>Log out?</a>: ''}     {/* <button onClick={logout}>Logout</button> */}
    </div>
  )
};

export default Status


