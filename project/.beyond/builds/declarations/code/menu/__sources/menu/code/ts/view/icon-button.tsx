import * as React from "react";
import { createUseContext } from "./context";
export function IconButton() {
  const { toggleSetOpen } = createUseContext();
  const handleOnClick = () => {
    toggleSetOpen();
  };
  return (
    <div className="dropdown__icon-div" onClick={handleOnClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
      >
        <g clip-path="url(#clip0_1_39)">
          <path
            d="M4.75 28.5H33.25V25.3333H4.75V28.5ZM4.75 20.5833H33.25V17.4167H4.75V20.5833ZM4.75 9.5V12.6667H33.25V9.5H4.75Z"
            fill="#F2F2F2"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_39">
            <rect width="38" height="38" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
