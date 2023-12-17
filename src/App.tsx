import { useState, useRef, RefObject } from "react";
import AppContext, { AppSettings, ImgSize } from "./AppContext";
import MainSection from "./components/MainSection/index";
import SideBar from "./components/Sidebar";

function App() {
  const [selectedBgColor, setSelectedBgColor] = useState<string>(
    "linear-gradient(62deg, #8ec5fc 0, #e0c3fc 100%)"
  );
  const [shadow, setShadow] = useState<number>(30);
  const [roundness, setRoundness] = useState<number>(11);
  const [imgPadding, setImgPadding] = useState<number>(35);
  const [yourText, setYourText] = useState<string>("Made ❤ with IMGbeautify");
  const [imgSize, setImgSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  const imgElementRef: RefObject<HTMLDivElement> = useRef(null);
  const defaultSettings: AppSettings = {
    selectedBgColor,
    addSelectedBgColor: (color: string) => setSelectedBgColor(color),
    shadow,
    addShadow: (shadow: number) => setShadow(shadow),
    roundness,
    addRoundness: (roundness: number) => setRoundness(roundness),
    imgPadding,
    addImgPadding: (padding: number) => setImgPadding(padding),
    imgElementRef,
    yourText,
    addYourText: (text: string) => setYourText(text),
    imgSize,
    addImgSize: (imgSize: ImgSize) => setImgSize(imgSize),
  };

  return (
    <AppContext.Provider value={defaultSettings}>
      <div className="hidden lg:flex flex-row max-h-screen">
        <SideBar />
        <MainSection />
      </div>

      {/* //TODO: Toggle for sidebar */}
      <div className="text-2xl pt-[35%] px-20 text-center text-red-400 lg:hidden">
        ⚠ This website is not intented for moblie use. Please use desktop
        browser for better use.
      </div>
    </AppContext.Provider>
  );
}

export default App;
