import { useContext, useState } from "react";
import AppContext from "../../AppContext";
import colors from "../../Colors";

export default function ColorSection() {
  const { selectedBgColor, addSelectedBgColor } = useContext(AppContext);
  const [customColor, setCustomColor] = useState<string>("");

  function handleClick(color: string) {
    addSelectedBgColor(color);
  }

  function handleCustomColor(e: React.ChangeEvent<HTMLInputElement>) {
    setCustomColor(e.target.value);
    addSelectedBgColor(customColor);
    // console.log(customColor);
  }

  const customColorBackgroundStyle = {
    backgroundColor: customColor,
  };

  return (
    <section className="space-y-5 py-6 px-5">
      <p>Background Color</p>
      <div className="space-y-3">
        <div className="grid grid-cols-5 gap-4">
          {colors.map((color) => (
            <div
              className="color__container"
              key={color}
              onClick={() => handleClick(color)}
            >
              {selectedBgColor == color ? (
                <div className="color__active"></div>
              ) : null}
              <div
                className={`color__circle`}
                style={{ background: color }}
              ></div>
            </div>
          ))}
        </div>
        <div
          className="border-[1px] border-gray-400 w-7 h-7 rounded-full relative"
          style={customColorBackgroundStyle}
        >
          {customColor === "" ? (
            <div className="absolute left-[0.08rem] top-[0.05rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "rgb(255, 255, 255)" }}
              >
                <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
              </svg>
            </div>
          ) : (
            ""
          )}
          <input
            type="color"
            className="opacity-0"
            value={customColor}
            onChange={handleCustomColor}
          />
        </div>
      </div>
    </section>
  );
}
