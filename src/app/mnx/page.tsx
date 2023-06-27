"use client";
import { FormEvent, useState, useRef, useEffect } from "react";

export default function Mnx() {
  const [password, setPassword] = useState("");

  const [isPasswordFound, setPasswordFound] = useState(false);

  const handleChange = (value: string) => {
    setPassword(value);
  };

  const handlePasswordCheck = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === "vizion") {
      setPasswordFound(true);
    }
  };

  return (
    <main
      className="bg-cover flex min-h-screen flex-col items-center justify-between p-24"
      style={{ background: "#CDCDCD" }}
    >
      <div className="flex flex-col h-screen justify-center items-center">
        {isPasswordFound ? (
          <div>
            <video id="video" src={"/MNX_video.mp4"} autoPlay loop />
          </div>
        ) : (
          <form
            className="text-center space-y-5"
            onSubmit={(e) => handlePasswordCheck(e)}
          >
            <h1 className="text-black text-3xl">password :</h1>
            <input
              className="inputMnx"
              type="password"
              name="password"
              value={password}
              onChange={(e) => handleChange(e.target.value)}
              style={{ width: "70vw" }}
            />
            <br />
            <br />
            <input
              className={"btnSubmitMnx text-black"}
              type="submit"
              value="ENTER"
            />
          </form>
        )}
      </div>
    </main>
  );
}
