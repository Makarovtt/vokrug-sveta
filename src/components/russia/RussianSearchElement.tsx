"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

export const RussianSearchElement = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <div className="w-full py-14 flex items-center justify-center">
      {isLoading ? (
        <>
          <Script
            strategy="afterInteractive"
            onLoad={() => {
              console.log("Script has loaded");
            }}
            src="https://stells.info/assets/js/partner.fire.js"
          />
          <div
            className="s-partnership w-full max-w-[1100px]"
            style={{ display: "none" }}
          >
            najAUgXvCGn6EmpnQ%2FToCuo2OcTEYXHZhbndFrdjctk%3D
          </div>
        </>
      ) : (
        <div className="text-center w-full text-2xl text-gray-400">
          Загрузка...
        </div>
      )}
    </div>
  );
};
