import * as React from "react";

function badgeSvg(props) {
  return (
    <svg
      id="prefix__Layer_1"
      data-name="Layer 1"
      viewBox="0 0 250 200"
      className="prefix__MuiSvgIcon-root"
      aria-hidden="true"
      fontSize={80}
      color="#ffbe00"
      style={{ width: "100px" }}
    >
      <path
        d="M130.45 181.11C74.81 146 50.35 84.69 56.15 23.49c33.64-14.93 102.2-15.06 148.46-.29 5.94 56.34-15.26 121.22-74.16 157.91zM65.53 32c-5 60.14 21.84 111.7 65.37 137.66 50.35-31.92 69.84-87.32 64.57-137.86C152.25 19.42 109 18.24 65.53 32z"
        fill={"white"}
      />
      <path
        d="M65.53 32c43.5-13.78 86.72-12.6 129.94-.2 5.27 50.54-14.22 105.94-64.57 137.86C87.37 143.72 60.49 92.16 65.53 32z"
        fill={props.fillbadge ? "white" : "transparent"}
      />
      <text
        x="51.5%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={props.fillbadge ? "black" : "white"}
        fontSize="43px"
        fontFamily="Orbitron"
      >
        {props.label}
      </text>
    </svg>
  );
}

export default badgeSvg;
