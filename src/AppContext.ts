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

const AppContext = createContext<AppSettings>({} as AppSettings);

export default AppContext;
