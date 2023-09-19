import * as React from "react";
import { createUseContext } from "./context";
export function IconRemove() {
  const { toggleNotOpen } = createUseContext();
  const handleOnClick = () => {
    toggleNotOpen();
  };
  return (
    <div className="content-icon" onClick={handleOnClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
      >
        <g clip-path="url(#clip0_1_60)">
          <path
            d="M30.0833 10.1492L27.8508 7.91669L19 16.7675L10.1491 7.91669L7.91663 10.1492L16.7675 19L7.91663 27.8509L10.1491 30.0834L19 21.2325L27.8508 30.0834L30.0833 27.8509L21.2325 19L30.0833 10.1492Z"
            fill="#F2F2F2"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_60">
            <rect width="38" height="38" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
