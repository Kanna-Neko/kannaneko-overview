'use client'
import { useEffect, useState } from "react";
import Main from "./main";

export default function Home() {
  const { isLoading, lightUrl, darkUrl } = useBackgroundUrl();
  const backgroundUrl = useBackground(lightUrl, darkUrl);
  if (isLoading) {
    return <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">loading</div>
  }
  return (
    <div className={`h-screen bg-cover min-w-[320px] relative bg-fixed p-2`} style={{
      backgroundImage: `url(${backgroundUrl})`
    }}>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Main />
      </div>
    </div>
  );
}

function useBackgroundUrl() {
  const [isLoading, setIsLoading] = useState(true);
  const [lightUrl, setLightUrl] = useState("");
  const [darkUrl, setDarkUrl] = useState("");

  const lightOriginUrl = "/light.png";
  const darkOriginUrl = "/dark.png";

  useEffect(() => {
    Promise.all([
      fetch(lightOriginUrl).then((res) => res.blob()).then((res) => {
        return URL.createObjectURL(res);
      }),
      fetch(darkOriginUrl).then((res) => res.blob()).then((res) => {
        return URL.createObjectURL(res);
      }),
    ]).then(([light, dark]) => {
      setIsLoading(false);
      setLightUrl(light);
      setDarkUrl(dark);
    })
  }, [])
  return { isLoading, lightUrl, darkUrl };
}

function useBackground(lightUrl: string, darkUrl: string) {
  const [backgroundUrl, setBackgroundUrl] = useState("");
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const changeTheme = () => {
      if (media.matches) {
        console.log("matches");
        console.log(`light url is ${lightUrl}`);
        setBackgroundUrl(lightUrl);
      } else {
        console.log("not matches");
        console.log(`dark url is ${darkUrl}`);
        setBackgroundUrl(darkUrl);
      }
    }
    changeTheme();
    media.addEventListener("change", changeTheme)
    return () => {
      media.removeEventListener("change", changeTheme);
    }
  }, [lightUrl, darkUrl])
  return backgroundUrl;
}