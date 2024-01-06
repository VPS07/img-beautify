import logo from "../../assets/logo.png";
import ColorSection from "./ColorSection";
import StylingControlsSection from "./StylingControlsSection";
import AddTextSection from "./AddTextSection";
import DownloadButtonSection from "./DownloadButtonSection";

function SideBar() {
  return (
    <section className="bg-[#191e24] h-[100vh] w-[20rem] divide-y-[1px] divide-gray-700/60 pt-3 border-r-[1px] border-gray-700/40">
      {/* logo */}
      <div className="flex justify-center items-center space-x-3 pb-3">
        <img src={logo} alt="logo" className="w-9" />
        <p className="font-semibold text-xl">IMGbeautify</p>
      </div>

      <ColorSection />

      <StylingControlsSection />

      <AddTextSection />

      <DownloadButtonSection />
    </section>
  );
}

export default SideBar;
