import Main from "./main";

export default function Home() {
  return (
    <div className="bg-[url('/light.png')] dark:bg-[url('/dark.png')] h-screen bg-cover min-w-[320px] relative bg-fixed p-2">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Main />
      </div>
    </div>
  );
}
