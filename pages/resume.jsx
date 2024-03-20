import React, { useEffect, useState } from "react";

const resume = () => {
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);
  return (
    <div className="flex flex-col items-center items-center">
      <div className="my-4">
        <iframe
          src="https://drive.google.com/file/d/1VCRrvWkA5OKKeBvBRHzs_vMtBfnWId1F/preview"
          width={width}
          height={height}
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};

export default resume;
