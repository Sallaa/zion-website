"use client";
import { FormEvent, useState, useRef, useEffect } from "react";

export default function Mnx() {
  return (
    <main
      className="bg-cover"
      style={{ minHeight: "100vh", background: "black" }}
    >
      <div
        className="fixed top-0 w-full"
        style={{ mixBlendMode: "difference", color: "#FFF" }}
      >
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-800">
              ZION
            </a>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-800 tracking-widest"
                style={{ mixBlendMode: "difference" }}
              >
                Archives
              </a>
              <a href="#" className="text-800 tracking-widest">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <video autoPlay muted loop id="video" src={"/MNX_video.mp4"} />
      </div>
    </main>
  );
}
