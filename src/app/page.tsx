"use client";

import React, { useState } from "react";

function TwowayBinding() {
  const [userName, setUsername] = useState("");
  return (
    <>
      <h1>Enter Your Name</h1>
      <form>
        <input
          type="text"
          className=" border-2 border-black p-2 m-2 "
          value={userName}
          onChange={(e: any) => {
            setUsername(e.target.value);
            console.log(userName);
          }}
        />
      </form>
    </>
  );
}

export default TwowayBinding;
