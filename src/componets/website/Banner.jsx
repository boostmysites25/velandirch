import React from "react";
import { defaultBanner } from "../../constant";
import ReactPlayer from "react-player";
import servicepagebanner from "../../assets/videos/servicepagebanner.mp4";
const Banner = ({ page }) => {
  return (
    <div
      data-aos="fade-down"
      className="h-[40vh] sm:h-[55vh] md:h-[70vh] w-full relative"
    >
      <ReactPlayer
        url={servicepagebanner}
        loop
        muted
        width="100vw"
        height="100%"
        playsinline
        playing
        className="react-player left-0 top-0 absolute object-cover h-full w-full"
      />
      {/* <img src={defaultBanner} className="object-cover h-full w-full" alt="" /> */}
      <h2 className="font-raleway text-[2.18rem] md:text-7xl font-bold leading-tight text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[10%] text-center">
        {page}
      </h2>
    </div>
  );
};

export default Banner;
