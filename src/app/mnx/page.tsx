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

  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
  };

  const handleRelease = () => {
    setIsPressed(false);
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
              style={{ width: "75vw" }}
            />
            <br />
            <br />
            <button
              className={
                isPressed
                  ? "btnSubmitMnxPressed text-black"
                  : "btnSubmitMnx text-black"
              }
              type="submit"
              style={{
                background: "#D9D9D9",
                textAlign: "center",
                lineHeight: "47px",
                letterSpacing: "11.34px",
              }}
              onMouseDown={handlePress}
              onMouseUp={handleRelease}
              onTouchStart={handlePress}
              onTouchEnd={handleRelease}
            >
              ENTER
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
