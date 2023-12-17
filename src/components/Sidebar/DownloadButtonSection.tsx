import { toPng } from "html-to-image";
import AppContext from "../../AppContext";
import { useContext } from "react";

function DownloadButtonSection() {
  const { imgElementRef, imgSize } = useContext(AppContext);

  const htmlToImageConvert = () => {
    if (imgElementRef.current !== null) {
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
    }
  };

  return (
    <section className="flex justify-center pt-9">
      <button
        className="btn btn-info hover:opacity-70 outline-none capitalize"
        onClick={htmlToImageConvert}
      >
        <box-icon name="download" size="20px"></box-icon>
        Download Image
      </button>
    </section>
  );
}

export default DownloadButtonSection;
