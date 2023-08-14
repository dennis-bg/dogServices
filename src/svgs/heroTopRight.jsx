import React from "react";
import { useWindowWidth } from "../hooks/useWindowWidth";

export const HeroTopRightSVG = () => {

  const screenWidth = useWindowWidth();

  let svgWidth;
  if(screenWidth > 1000){
    svgWidth = screenWidth/3.5;
  }else if(screenWidth > 700){
    svgWidth = screenWidth/3
  }else if(screenWidth > 500){
    svgWidth = screenWidth/2;
  }else{
    svgWidth = screenWidth/1.5;
  }

    return (
    <svg xmlns="http://www.w3.org/2000/svg"  width={svgWidth} viewBox="0 0 75 100">
  <defs>
    <clipPath id="clipPath">
      <path id="Path_35" data-name="Path 35" d="M177,0h75V91.1H177Zm0,0"/>
    </clipPath>
    <clipPath id="clipPath-2">
      <rect id="Rectangle_5" data-name="Rectangle 5" width="70" height="100"/>
    </clipPath>
    <clipPath id="clipPath-3">
      <path id="Path_39" data-name="Path 39" d="M9,0H70V82H9ZM9,0"/>
    </clipPath>
    <clipPath id="clipPath-4">
      <path id="Path_38" data-name="Path 38" d="M36.926-58.07,102.168,81.152l-36,16.867L.934-41.2Zm0,0"/>
    </clipPath>
  </defs>
  <g id="Group_92" data-name="Group 92" transform="translate(-177)">
    <g id="Group_84" data-name="Group 84" clipPath="url(#clipPath)">
      <path id="Path_34" data-name="Path 34" d="M261.559,91.1c-9.258-3.637-25.645-13.656-24.989-38.965.891-35.215-61.929-8.625-58.812-63.785h83.8Zm0,0" fill="#0097b2"/>
    </g>
    <g id="Group_90" data-name="Group 90">
      <g id="Group_89" data-name="Group 89" transform="translate(182)">
        <g id="Group_88" data-name="Group 88" clipPath="url(#clipPath-2)">
          <g id="Group_87" data-name="Group 87" clipPath="url(#clipPath-3)">
            <g id="Group_86" data-name="Group 86" clipPath="url(#clipPath-4)">
              <g id="Group_85" data-name="Group 85" clipPath="url(#clipPath-4)">
                <path id="Path_36" data-name="Path 36" d="M101.637,80.785c-.184-.109-17.188-10.219-25.578-23.524A43.157,43.157,0,0,1,69,36.844c-.73-5.883-1.348-10.957-7.906-18-4.035-4.332-9.785-6.406-15.793-8.473-9.465-3.328-20.2-7.094-28.25-20.668S10.875-45.09,10.879-45.312l-.984-.09c.074.164-1.687,18.953,4.73,32.656a29.655,29.655,0,0,0,1.523,2.871C24.391,4.008,35.3,7.844,44.922,11.207c5.938,2.1,11.531,4.074,15.391,8.18,6.344,6.813,6.938,11.746,7.625,17.449a44.266,44.266,0,0,0,7.27,20.957c8.563,13.578,25.75,23.75,25.926,23.844Zm0,0" fill="#5ce1e6"/>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </g>
</svg>

)
    }