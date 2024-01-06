import { toPng, toJpeg } from "html-to-image";
import AppContext from "../../AppContext";
import { useContext, useState } from "react";

function DownloadButtonSection() {
  const { imgElementRef, imgSize } = useContext(AppContext);
  const [imgFormat, setImgFormat] = useState<string>("Png");

  const htmlToImageConvert = () => {
    if (imgElementRef.current !== null) {
      if (imgFormat === "Png") {
        toPng(imgElementRef.current, {
          cacheBust: false,
          pixelRatio: 1,
          canvasWidth: imgSize.width,
          canvasHeight: imgSize.height,
        })
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "my-image-name.png";
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        toJpeg(imgElementRef.current, {
          cacheBust: false,
          pixelRatio: 1,
          canvasWidth: imgSize.width,
          canvasHeight: imgSize.height,
        })
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "my-image-name.jpeg";
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  return (
    <section className="flex justify-center space-x-1 pt-7 px-2">
      <button
        className="btn btn-info hover:opacity-70 outline-none capitalize text-xs"
        onClick={htmlToImageConvert}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          style={{ fill: " rgba(0, 0, 0, 1)" }}
        >
          <path d="m12 16 4-5h-3V4h-2v7H8z"></path>
          <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
        </svg>
        Download Image
      </button>
      <select
        className="select select-bordered select-sm h-12 w-full max-w-xs"
        onChange={(e) => setImgFormat(e.target.value)}
      >
        <option selected>Png</option>
        <option>Jpeg</option>
      </select>
    </section>
  );
}

export default DownloadButtonSection;
