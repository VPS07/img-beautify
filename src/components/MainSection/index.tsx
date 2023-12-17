import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useContext } from "react";
import AppContext from "../../AppContext";

function MainSection() {
  const [imgPath, setImgPath] = useState<string>("");
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
        addImgSize({
          width,
          height,
        });
        console.log(`Width: ${width}px, Height: ${height}px`);
      };
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const backgroundStyle = {
    padding: imgPadding + "px",
  };

  const imgBackgroundStyle = {
    background: selectedBgColor,
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
          <div className="text-center">
            <p className="text-3xl pb-10">Drop Your Image Here</p>
            <box-icon
              type="solid"
              color="white"
              name="image-add"
              size="100px"
            ></box-icon>
          </div>
        </div>
      ) : (
        //  TODO: fixed for potrait images
        <div className="flex justify-center items-center scale-90 overflow-hidden">
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
