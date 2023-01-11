import React from "react";

const BannerPage = () => {
  return (
    <div>
      <div style={{ height: "400px" }} className="flex">
        <div>
          <img
            src="https://www.cloud.ryanscomputers.com/cdn/sliders/Intel-13th-Gen-New-Linup-Banner_1672750626.webp"
            alt=""
          />
        </div>
        <div style={{ height: "300px" }}>
          <img
            src="https://www.cloud.ryanscomputers.com/cdn/right_side/Antec-HCG1000-Power-Supply-Right-slider_1671520947.webp"
            alt=""
          />
          <img
            src="https://www.cloud.ryanscomputers.com/cdn/right_side/Bose-QuietComfort-45-Black-Bluetooth-Headphone-Right-Slider_1672556877.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
