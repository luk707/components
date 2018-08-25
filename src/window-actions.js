import React from "react";

export default ({ showIcons = false, ...rest }) => (
  <svg
    width="52px"
    height="12px"
    viewBox="0 0 52 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...{ "xmlns:xlink": "http://www.w3.org/1999/xlink", ...rest }}
  >
    <title>Window Actions</title>
    <desc>Created with Sketch.</desc>
    <defs />
    <g
      id="Window-Actions"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="Minimize"
        transform="translate(20.000000, 0.000000)"
        fill-rule="nonzero"
      >
        <circle
          id="Oval"
          stroke="#F4AF1A"
          stroke-width="0.5"
          fill="#FFBE2F"
          cx="6"
          cy="6"
          r="5.75"
        />
        <path
          d="M9.5,6 L2.5,6"
          id="Line"
          stroke="#995700"
          stroke-width="1"
          stroke-linecap="square"
        />
      </g>
      <g id="Close" fill-rule="nonzero" stroke-width="0.5">
        <circle
          id="Oval"
          stroke="#D23830"
          fill="#FF6059"
          cx="6"
          cy="6"
          r="5.75"
        />
        <path
          d="M3.5,3.5 L8.5,8.5"
          id="Line"
          stroke="#4D0000"
          stroke-linecap="square"
        />
        <path
          d="M8.5,3.5 L3.5,8.5"
          id="Line-2"
          stroke="#4D0000"
          stroke-linecap="square"
        />
      </g>
      <g
        id="Maximize"
        transform="translate(40.000000, 0.000000)"
        fill-rule="nonzero"
      >
        <circle
          id="Oval"
          stroke="#109D1B"
          stroke-width="0.5"
          fill="#2ACF42"
          cx="6"
          cy="6"
          r="5.75"
        />
        <path
          d="M4.5,3 C6.5,3 7.66666667,3 8,3 C8.5,3 9,3.5 9,4 C9,4.33333333 9,5.5 9,7.5 L4.5,3 Z"
          id="Path-2"
          fill="#036400"
        />
        <path
          d="M3,4.5 C5,4.5 6.16666667,4.5 6.5,4.5 C7,4.5 7.5,5 7.5,5.5 C7.5,5.83333333 7.5,7 7.5,9 L3,4.5 Z"
          id="Path-2"
          fill="#036400"
          transform="translate(5.250000, 6.750000) rotate(-180.000000) translate(-5.250000, -6.750000) "
        />
      </g>
    </g>
  </svg>
);
