import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useContext } from "react";
import AppContext from "../../AppContext";

function MainSection() {
  const [imgPath, setImgPath] = useState<string>("");
  const [imgFactor, setImgFactor] = useState<number>(1);
  const {
    selectedBgColor,
    shadow,
    roundness,
    imgPadding,
    imgElementRef,
    yourText,
    addImgSize,
  } = useContext(AppContext);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const imageData = acceptedFiles[0];

    if (imageData.type.startsWith("image/")) {
      //Using file reader api
      const reader = new FileReader();
      reader.onload = () => {
        setImgPath(reader.result + "");
      };
      reader.readAsDataURL(imageData);
      // console.log(acceptedFiles[0]);

      //reading width and height of image
      const image = new Image();
      image.src = URL.createObjectURL(imageData);
      image.onload = () => {
        const width = image.width;
        const height = image.height;
        if (height >= width) setImgFactor(height / width);
        else setImgFactor(0.3);

        addImgSize({
          width,
          height,
        });
        console.log(`Width: ${width}px, Height: ${height}px`);
      };
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const imgContainer = {
    maxWidth: 100 / (0.7 + imgFactor) + "%",
  };

  const backgroundStyle = {
    padding: imgPadding + "px",
  };

  const imgBackgroundStyle = {
    background: selectedBgColor,
    // "max-width": 100 / imgFactor + "%",
  };

  const imgStyle = {
    borderRadius: roundness + "px",
    boxShadow: `0 4px 8px 0 rgba(8, 8, 8, ${
      shadow / 100
    }), 0 6px 20px 0 rgba(18, 18, 18, ${shadow / 100})`,
  };

  return (
    <main className="flex justify-center items-center w-full">
      {imgPath === "" ? (
        <div
          {...getRootProps()}
          className="border-2 border-dashed rounded h-[33rem] w-[45rem] opacity-50 flex flex-col justify-center items-center"
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center">
            <p className="text-3xl pb-10">Drop Your Image Here</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(255, 255, 255, 1)" }}
            >
              <path d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z"></path>
              <path d="m8 11-3 4h11l-4-6-3 4z"></path>
              <path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path>
            </svg>
          </div>
        </div>
      ) : (
        //  TODO: fix for potrait images
        <div
          className="flex justify-center items-center scale-90 overflow-hidden"
          style={imgContainer}
        >
          <div style={imgBackgroundStyle} ref={imgElementRef}>
            <div style={backgroundStyle} className="relative">
              <img src={imgPath} alt="image" style={imgStyle} />
              <p className="absolute right-4 bottom-2 text-xs opacity-60 pt-2">
                {yourText}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default MainSection;
