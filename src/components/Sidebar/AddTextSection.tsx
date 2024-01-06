import { ChangeEvent, useContext } from "react";
import AppContext from "../../AppContext";

function AddTextSection() {
  const { yourText, addYourText } = useContext(AppContext);
  function handleTextChange(e: ChangeEvent<HTMLInputElement>) {
    addYourText(e.target.value);
  }

  return (
    <section className="space-y-4 py-5 px-5">
      <p>Add your text</p>
      <input
        type="text"
        placeholder="Type here"
        value={yourText}
        onChange={handleTextChange}
        className="bg-[#12151b] p-3 border-2 border-gray-700 outline-none w-full text-[0.85rem] rounded-md"
      />
    </section>
  );
}

export default AddTextSection;
