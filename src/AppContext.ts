import { createContext } from "react";

export interface ImgSize {
  width: number;
  height: number;
}

export interface AppSettings {
  selectedBgColor: string;
  addSelectedBgColor: (color: string) => void;
  shadow: number;
  addShadow: (shadow: number) => void;
  roundness: number;
  addRoundness: (roundness: number) => void;
  imgPadding: number;
  addImgPadding: (padding: number) => void;
  imgElementRef: React.RefObject<HTMLDivElement>;
  yourText: string;
  addYourText: (text: string) => void;
  imgSize: ImgSize;
  addImgSize: (imgSize: ImgSize) => void;
}

export const defaultSettings: AppSettings = {
  selectedBgColor: "",
  addSelectedBgColor: (color: string) => {},
  shadow: 30,
  addShadow: (shadow: number) => {},
  roundness: 11,
  addRoundness: (roundness: number) => {},
  imgPadding: 35,
  addImgPadding: (padding: number) => {},
  yourText: "Made ❤ with IMGbeautify",
  addYourText: (text: string) => {},
  imgSize: { width: 0, height: 0 },
  addImgSize: (imgSize: ImgSize) => {},
};

const AppContext = createContext<AppSettings>(defaultSettings);

export default AppContext;
