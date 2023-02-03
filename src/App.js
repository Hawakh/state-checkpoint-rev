import React, { useState } from "react";
import Profile from "./component/Profile ";


export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div >
      <h1>This is your Profile</h1>
      <button   onClick={() => setShow(!show)}>
        {show ? "Hide Counter" : "Show Counter"}
      </button>
      {show ? <Profile /> : null}
    </div>
  );
}