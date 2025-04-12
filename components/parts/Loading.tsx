"use client";
import React, { useEffect, useState } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [loadingDone, setLoadingDone] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => setLoadingDone(true), 1000);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <>
      {!loadingDone && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-alt_light dark:bg-dark z-50">
          <div
            className="w-[200px] h-[200px] rounded-full flex items-center justify-center relative"
            style={{
              background: `conic-gradient(var(--dark_color) ${
                progress * 3.6
              }deg, #2a2a2a ${progress * 3.6}deg)`,
            }}
          >
            <div className="absolute w-[160px] h-[160px]  bg-white dark:bg-dark rounded-full z-0" />
            <span
              className="text-6xl text-dark_color font-bold relative z-10"
              style={{
                opacity: `${progress * 0.01}`,
                filter: `blur(${(100 - progress) / 10}px)`,
              }}
            >
              {progress}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
