import { ChangeEvent, useContext } from "react";
import AppContext from "../../AppContext";

function RangeSliderSection() {
  const {
    shadow,
    addShadow,
    roundness,
    addRoundness,
    imgPadding,
    addImgPadding,
  } = useContext(AppContext);

  function handleShadowChange(e: ChangeEvent<HTMLInputElement>) {
    addShadow(Number(e.target.value));
  }

  function handleRoundnessChange(e: ChangeEvent<HTMLInputElement>) {
    addRoundness(Number(e.target.value));
  }

  function handlePaddingChange(e: ChangeEvent<HTMLInputElement>) {
    addImgPadding(Number(e.target.value));
  }

  return (
    <section className="space-y-3 py-5 px-5">
      {/* Shadow property */}
      <div className="space-y-3">
        <p>Shadow</p>
        <div className="tooltip w-full" data-tip={shadow}>
          <input
            type="range"
            min="0"
            max="100"
            value={shadow}
            onChange={handleShadowChange}
            className="range range-info range-xs"
          />
        </div>
      </div>

      {/* Roundness property */}
      <div className="space-y-3">
        <p>Border Radius</p>
        <div className="tooltip w-full" data-tip={roundness}>
          <input
            type="range"
            min={0}
            max="100"
            value={roundness}
            onChange={handleRoundnessChange}
            className="range range-success range-xs"
          />
        </div>
      </div>

      {/* Padding property */}
      <div className="space-y-3">
        <p>Padding</p>
        <div className="tooltip w-full" data-tip={imgPadding}>
          <input
            type="range"
            min={0}
            max="100"
            value={imgPadding}
            onChange={handlePaddingChange}
            className="range range-error range-xs"
          />
        </div>
      </div>
    </section>
  );
}

export default RangeSliderSection;
