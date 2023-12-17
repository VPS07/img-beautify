import { ChangeEvent, useContext } from "react";
import AppContext from "../../AppContext";

function AddTextSection() {
  const { yourText, addYourText } = useContext(AppContext);
  function handleTextChange(e: ChangeEvent<HTMLInputElement>) {
    addYourText(e.target.value);
  }

  return (
    <section className="space-y-7 pt-7">
      <p>Add your text</p>
      <input
        type="text"
        placeholder="Type here"
        value={yourText}
        onChange={handleTextChange}
        className="input input-bordered input-info w-full max-w-xs"
      />
    </section>
  );
}

export default AddTextSection;
