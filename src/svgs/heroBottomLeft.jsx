import React from "react";
import { useWindowWidth } from "../hooks/useWindowWidth";

export const HeroBottomLeftSVG = () => {

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
    <svg xmlns="http://www.w3.org/2000/svg" width={svgWidth} viewBox="0 0 75 100">
  <defs>
    <clipPath id="topRight-clip-path">
      <path id="Path_29" data-name="Path 29" d="M0,53.625H75V144H0Zm0,0"/>
    </clipPath>
    <clipPath id="topRight-clip-path-2">
      <rect id="Rectangle_4" data-name="Rectangle 4" width="70" height="100"/>
    </clipPath>
    <clipPath id="topRight-clip-path-3">
      <path id="Path_33" data-name="Path 33" d="M0,19H61v81H0Zm0,0"/>
    </clipPath>
    <clipPath id="topRight-clip-path-4">
      <path id="Path_32" data-name="Path 32" d="M32.852,158.789-32.387,19.566,3.605,2.7,68.848,141.922Zm0,0"/>
    </clipPath>
  </defs>
  <g id="Group_91" data-name="Group 91" transform="translate(11.682 -153)">
    <g id="Group_77" data-name="Group 77" transform="translate(-11.682 109)" clipPath="url(#topRight-clip-path)">
      <path id="Path_28" data-name="Path 28" d="M-9.777,53.625C-.52,57.262,15.867,67.281,15.211,92.59c-.891,35.215,61.93,8.625,58.812,63.785h-83.8Zm0,0" fill="#0097b2"/>
    </g>
    <g id="Group_83" data-name="Group 83" transform="translate(-11.682 109)">
      <g id="Group_82" data-name="Group 82" transform="translate(0 44)">
        <g id="Group_81" data-name="Group 81" clipPath="url(#topRight-clip-path-2)">
          <g id="Group_80" data-name="Group 80" clipPath="url(#topRight-clip-path-3)">
            <g id="Group_79" data-name="Group 79" clipPath="url(#topRight-clip-path-4)">
              <g id="Group_78" data-name="Group 78" clipPath="url(#topRight-clip-path-4)">
                <path id="Path_30" data-name="Path 30" d="M-31.855,19.934c.184.113,17.184,10.223,25.578,23.527a42.925,42.925,0,0,1,4.828,9.758,43.073,43.073,0,0,1,2.23,10.66c.73,5.879,1.348,10.957,7.906,18,4.031,4.332,9.785,6.41,15.793,8.477,9.465,3.324,20.191,7.094,28.25,20.668s6.176,34.793,6.168,35.015l.988.086c-.074-.16,1.688-18.953-4.734-32.656a29.471,29.471,0,0,0-1.52-2.871C45.387,96.715,34.477,92.879,24.859,89.512c-5.937-2.1-11.531-4.07-15.391-8.176C3.125,74.52,2.531,69.59,1.84,63.887a43.866,43.866,0,0,0-2.3-10.941A44.009,44.009,0,0,0-5.426,42.93c-8.563-13.578-25.75-23.754-25.926-23.848Zm0,0" fill="#5ce1e6"/>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </g>
</svg>



)}