import React, { useEffect, useState } from "react";
import Image from "next/image";

const opensource = () => {
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth * 0.5);
    setHeight(window.innerHeight * 0.5);
  }, []);
  return (
    <div className="flex flex-col items-center">
      {/* <Image
        src="https://github-readme-streak-stats.herokuapp.com/?user=ratnesh4193&theme=radical&border=7F3FBF&background=0D1117"
        alt="GitHub streak"
        width={width}
        height={height}
      /> */}
      <Image
        src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=ratnesh4193&theme=radical"
        alt="GitHub Contribution"
        width={width}
        height={height}
      />
      <Image
        src="https://denvercoder1-github-readme-stats.vercel.app/api?username=ratnesh4193&show_icons=true&count_private=true&theme=react&border_color=7F3FBF&bg_color=0D1117&title_color=F85D7F&icon_color=F8D866"
        alt="Github Stats"
        width={width}
        height={height}
      />
      <Image
        src="https://denvercoder1-github-readme-stats.vercel.app/api/top-langs/?username=ratnesh4193&langs_count=8&layout=compact&theme=react&border_color=7F3FBF&bg_color=0D1117&title_color=F85D7F&icon_color=F8D866"
        alt="Top Languages"
        width={width}
        height={height}
      />
      <Image
        src="https://github-readme-activity-graph.vercel.app/graph?username=ratnesh4193&custom_title=Ratnesh's%20GitHub%20Activity%20Graph&bg_color=0D1117&color=7F3FBF&line=7F3FBF&point=7F3FBF&area_color=FFFFFF&title_color=FFFFFF&area=true"
        alt="Graph"
        width={width}
        height={height}
      />
    </div>
  );
};

export default opensource;
