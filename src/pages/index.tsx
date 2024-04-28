import Weather from "@/components/Weather";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta
          name="description"
          content="Weather forecast app provides detailed local forecast & weather forecast world wide, the app provides the current temperature in Celsius and Fahrenheit, sunrise and sunset time according to city time zone"
        />
      </Head>
      <div
        style={{
          backgroundColor: "#4158D0",
          backgroundImage:
            "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
        }}
        className="w-screen h-screen flex items-center justify-center"
      >
        <Weather />
      </div>
    </>
  );
}
